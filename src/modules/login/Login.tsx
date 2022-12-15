import { Button, Form, Input } from "antd";
import useLogin from "./hooks/useLogin";
import "./style.scss";

const Login = () => {
  const { checkData } = useLogin();
  const onFinish = (data: any) => {
    checkData(data);
  };
  return (
    <div className="form_login">
      <div className="title">@COPY BY TIEN</div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name={"name"} label="Tên tài khoản">
          <Input required={true} />
        </Form.Item>
        <Form.Item name={"password"} label="Mật khẩu">
          <Input.Password required={true} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
