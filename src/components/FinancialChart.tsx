"use client";

import { FinancialData } from "@/lib/types/financial";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface FinancialChartProps {
  data: FinancialData[];
}

export function FinancialChart({ data }: FinancialChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            name="収入"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="#82ca9d"
            name="投資支出"
          />
          <Line
            type="monotone"
            dataKey="livingExpenses"
            stroke="#ffc658"
            name="生活費支出"
          />
          <Line
            type="monotone"
            dataKey="bankBalance"
            stroke="#ff7300"
            name="銀行残高"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
