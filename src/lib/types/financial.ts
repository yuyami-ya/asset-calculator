export type FinancialData = {
  month: string;
  income: number;
  investment: number;
  livingExpenses: number;
  cumulativeInvestment: number;
  bankBalance: number;
  isInvestmentEnabled: boolean;
  isLivingExpensesEnabled: boolean;
};

export type FinancialInput = {
  initialMonth: string;
  initialBalance: number;
  monthlyIncome: number;
  monthlyInvestment: number;
  monthlyLivingExpenses: number;
};
