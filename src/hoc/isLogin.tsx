import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { key_login } from "../constant/constant";
import useLocalStorage from "../modules/login/hooks/useLocalStorage";
import { systemRouter } from "../routes";
const isLogin = (WappedComponent: any) => {
  return function (props: any) {
    const navigate = useNavigate();
    const { storedValue } = useLocalStorage(key_login, "");
    useEffect(() => {
      if (storedValue) {
        navigate(systemRouter.HOME);
      }
    }, [storedValue, navigate]);
    return <WappedComponent {...props} />;
  };
};

export default isLogin;
