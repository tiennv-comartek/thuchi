import { createBrowserRouter, RouteObject } from "react-router-dom";
import MasterLayout from "../components/MasterLayout";
import MasterLogin from "../components/MasterLogin";
import { RouterHome, routerHome } from "../modules/home/route";
import { routeLogin, RouterLogin } from "../modules/login/route";


const routes: RouteObject[] = [
  {
    element: <MasterLogin />,
    children: [...routeLogin],
  },
  {
    element: <MasterLayout />,
    children: [...routerHome],
  },
];
export const systemRouter = {
  ...RouterHome,
  ...RouterLogin,
};
export const browserRouter = createBrowserRouter(routes);
