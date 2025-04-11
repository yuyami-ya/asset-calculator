"use client";

import { useState } from "react";
import { FinancialForm } from "@/components/FinancialForm";
import { FinancialTable } from "@/components/FinancialTable";
import { FinancialChart } from "@/components/FinancialChart";
import { FinancialInput, FinancialData } from "@/lib/types/financial";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [financialData, setFinancialData] = useState<FinancialData[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateFinancialData = (input: FinancialInput) => {
    const data: FinancialData[] = [];
    let currentBalance = input.initialBalance;
    let cumulativeInvestment = 0;
    const [year, month] = input.initialMonth.split("-").map(Number);

    for (let i = 0; i < 12; i++) {
      const currentMonth = new Date(year, month - 1 + i, 1);
      const monthStr = `${currentMonth.getFullYear()}/${
        currentMonth.getMonth() + 1
      }`;

      let investment = 0;
      let livingExpenses = 0;

      if (i > 0) {
        // 2か月目以降の計算
        investment = input.monthlyInvestment;
        livingExpenses = input.monthlyLivingExpenses;
        cumulativeInvestment += investment;
        currentBalance += input.monthlyIncome - investment - livingExpenses;
      }

      data.push({
        month: monthStr,
        income: input.monthlyIncome,
        investment,
        livingExpenses,
        cumulativeInvestment,
        bankBalance: currentBalance,
        isInvestmentEnabled: true,
        isLivingExpensesEnabled: true,
      });
    }

    setFinancialData(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setFinancialData([]);
    setShowResults(false);
  };

  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center">資産計算アプリ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FinancialForm onSubmit={calculateFinancialData} />

        {showResults && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>計算結果</CardTitle>
              <Button variant="outline" onClick={handleReset}>
                リセット
              </Button>
            </CardHeader>
            <CardContent className="space-y-8">
              <FinancialTable data={financialData} />
              <FinancialChart data={financialData} />
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
