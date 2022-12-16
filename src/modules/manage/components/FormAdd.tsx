import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

function FormAdd(props) {
  const [form] = Form.useForm();
  const [isModalAdd, setIsModalAdd] = useState(false);

  const cancelModeAdd = () => {
    setIsModalAdd(false);
  };

  const showModalAdd = () => {
    setIsModalAdd(true);
  };

  const onSubmit = (value: any) => {
    if (value) {
      props.addData({
        id: Math.ceil(Math.random() * 1000),
        data: {
          amount: value.amount,
          title: value.name,
        },
      });
      form.resetFields();
      setIsModalAdd(false);
    }
  };

  return (
    <>
      <Button onClick={showModalAdd} danger className="btn_add">
        Add New +
      </Button>
      <Modal
        title="Thêm mới"
        open={isModalAdd}
        onOk={form.submit}
        onCancel={cancelModeAdd}
      >
        <Form layout="vertical" form={form} onFinish={onSubmit}>
          <Form.Item label={"Tên"} name={"name"}>
            <Input></Input>
          </Form.Item>
          <Form.Item label={"Số tiền"} className="amount" name={"amount"}>
            <Input type="number"></Input>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FormAdd;
