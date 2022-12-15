import { RouteObject } from "react-router-dom";
import Login from "./Login";

export const RouterLogin = {
    LOGIN:"/login",
}
    
export const routeLogin: RouteObject[] = [
    {
        path: "/login",
        element:<Login/> 
    }
];