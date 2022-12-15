import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "./Home";

export const RouterHome = {
  HOME: "/",
};

export const routerHome: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];
