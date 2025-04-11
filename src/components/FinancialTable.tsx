"use client";

import { FinancialData } from "@/lib/types/financial";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FinancialTableProps {
  data: FinancialData[];
}

export function FinancialTable({ data }: FinancialTableProps) {
  // テーブルのヘッダーを定義
  const headers = ["差し引き前", "投資累計", "銀行残高"];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            {data.map((row) => (
              <TableHead key={row.month}>{row.month}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {headers.map((header, headerIndex) => (
            <TableRow key={headerIndex}>
              <TableCell>{header}</TableCell>
              {data.map((row, index) => (
                <TableCell key={index}>
                  {headerIndex === 0 &&
                    `${(
                      row.bankBalance +
                      row.investment +
                      row.livingExpenses
                    ).toLocaleString()}万円`}
                  {headerIndex === 1 &&
                    `${row.cumulativeInvestment.toLocaleString()}万円`}
                  {headerIndex === 2 &&
                    `${row.bankBalance.toLocaleString()}万円`}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
