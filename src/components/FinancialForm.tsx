"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FinancialInput } from "@/lib/types/financial";

interface FinancialFormProps {
  onSubmit: (data: FinancialInput) => void;
}

export function FinancialForm({ onSubmit }: FinancialFormProps) {
  // 今月の1か月前の日付を取得（日本時間）
  const getLastMonth = () => {
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const year = lastMonth.getFullYear();
    const month = String(lastMonth.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const [formData, setFormData] = useState<FinancialInput>({
    initialMonth: getLastMonth(),
    initialBalance: 110,
    monthlyIncome: 47,
    monthlyInvestment: 10,
    monthlyLivingExpenses: 20,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>資産計算フォーム</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="initialMonth">初月</Label>
            <Input
              id="initialMonth"
              type="month"
              value={formData.initialMonth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, initialMonth: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="initialBalance">初月の残高（万円）</Label>
            <Input
              id="initialBalance"
              type="number"
              value={formData.initialBalance}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  initialBalance: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyIncome">毎月の収入（万円）</Label>
            <Input
              id="monthlyIncome"
              type="number"
              value={formData.monthlyIncome}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  monthlyIncome: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyInvestment">投資支出（万円）</Label>
            <Input
              id="monthlyInvestment"
              type="number"
              value={formData.monthlyInvestment}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  monthlyInvestment: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monthlyLivingExpenses">生活費支出（万円）</Label>
            <Input
              id="monthlyLivingExpenses"
              type="number"
              value={formData.monthlyLivingExpenses}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({
                  ...formData,
                  monthlyLivingExpenses: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <Button type="submit" className="w-full">
            計算開始
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
