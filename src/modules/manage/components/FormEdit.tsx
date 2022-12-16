import { Form, Input, Modal } from "antd";
import { useEffect } from "react";

function FormEdit(props) {
  const [formEdit] = Form.useForm();

  const handleCancle = () => {
    props.setIsShowModal(false);
  };

  const onEdit = (value: any) => {
    const dataNew = props.data;
    const index = props.data.findIndex((x) => x.id === value.id);
    if (index >= 0) {
      dataNew[index].data.title = value?.title || "";
      dataNew[index].data.amount = value?.amount || "";
      props.updateData(dataNew);
      props.setIsShowModal(false);
    }
  };

  useEffect(() => {
    if (props.dataEdit) {
      formEdit.setFieldsValue({
        title: props.dataEdit[0].data?.title,
        amount: props.dataEdit[0].data?.amount,
        id: props.dataEdit[0].id,
      });
    }
    // eslint-disable-next-line
  }, [props.dataEdit]);
  return (
    <>
      <Modal
        title="Chỉnh sửa ngay"
        open={props.isShowModal}
        onOk={formEdit.submit}
        onCancel={handleCancle}
      >
        <Form layout="vertical" form={formEdit} onFinish={onEdit}>
          <Form.Item label={"Tên"} name={"title"}>
            <Input></Input>
          </Form.Item>
          <Form.Item label={"Số tiền"} className="amount" name={"amount"}>
            <Input type="number"></Input>
          </Form.Item>
          <Form.Item style={{ display: "none" }} name={"id"} label="id">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FormEdit;
