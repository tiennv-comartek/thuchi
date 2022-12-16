import { RouteObject } from "react-router-dom";
import Expense from "./pages/Expense";
import InCome from "./pages/InCome";

export const RouterManager = {
  EXPENSE: "/expense",
  INCOME: "/income",
};

export const routerManager: RouteObject[] = [
  {
    path: "/expense",
    element: <Expense />,
  },
  {
    path: "/income",
    element: <InCome />,
  },
];
