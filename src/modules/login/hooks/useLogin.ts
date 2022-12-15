import { notification } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { key_login } from "../../../constant/constant";
import { systemRouter } from "../../../routes";

const useLogin = () => {
  const navigate = useNavigate();
  const checkData = useCallback((data: any) => {
    if (data.name === "tien@gmail.com" && data.password === "oke") {
      localStorage.setItem(key_login, data.name);
      notification.success({
        message: "Thành công",
        description: "Đăng nhập thành công",
      });
      navigate(systemRouter.HOME);
    } else {
      localStorage.setItem(key_login, "");
      notification.error({
        message: "Thất bại",
        description: "Đăng nhập thất bại",
      });
      navigate(systemRouter.LOGIN);
    }
    // eslint-disable-next-line
  }, []);
  return { checkData };
};

export default useLogin;
