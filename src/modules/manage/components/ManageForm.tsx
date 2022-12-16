import { Button, Col, Form, Input, InputNumber, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { systemRouter } from "../../../routes";

interface ManageI {
  data?: any;
  addData: (data: any) => void;
  updateData: (data: any) => void;
  removeData: (data: any) => void;
}

function ManageForm(props: ManageI) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [dataEdit, setDataEdit] = useState<any>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  //Add
  const showModalAdd = () => {
    setIsModalAdd(true);
  };
  const cancelModeAdd = () => {
    setIsModalAdd(false);
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
  //Edit
  const showModal = (id: number) => {
    setIsModalOpen(true);
    setDataEdit(props.data.filter((c) => c.id === id));
  };
  useEffect(() => {
    if (dataEdit) {
      formEdit.setFieldsValue({
        title: dataEdit[0].data?.title,
        amount: dataEdit[0].data?.amount,
        id: dataEdit[0].id,
      });
    }
    // eslint-disable-next-line
  }, [dataEdit]);

  const onAdd = (value: any) => {
    const dataNew = props.data;
    const index = props.data.findIndex((x) => x.id === value.id);
    if (index >= 0) {
      dataNew[index].data.title = value?.title || "";
      dataNew[index].data.amount = value?.amount || "";
      props.updateData(dataNew);
      setIsModalOpen(false);
    }
  };

  //delete
  const handleDelete = (id: any) => {
    props.removeData(id);
  };

  const handleCancle = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Form>
        <Form.Item>
          <Button onClick={showModalAdd}>+</Button>
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
                <InputNumber></InputNumber>
              </Form.Item>
            </Form>
          </Modal>
        </Form.Item>
      </Form>
      {props.data ? (
        props.data.map((item) => (
          <div key={item.id} className="item">
            <Row gutter={7}>
              <Col span={20}>
                <Button
                  onClick={() => showModal(item.id)}
                  className="btn_modal"
                >
                  <Row>
                    <Col span={18}>
                      <div style={{ textAlign: "left" }}>
                        {item?.data?.title}
                      </div>
                    </Col>
                    <Col span={6}>
                      <div>
                        {new Intl.NumberFormat().format(item?.data?.amount)}
                      </div>
                    </Col>
                  </Row>
                </Button>
              </Col>
              <Col span={2}>
                <Button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  X
                </Button>
              </Col>
            </Row>
          </div>
        ))
      ) : (
        <></>
      )}

      <Modal
        title="Chỉnh sửa ngay"
        open={isModalOpen}
        onOk={formEdit.submit}
        onCancel={handleCancle}
      >
        <Form layout="vertical" form={formEdit} onFinish={onAdd}>
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

      <Button
        type="primary"
        onClick={() => {
          navigate(systemRouter.HOME);
        }}
      >
        Quay lại
      </Button>
    </div>
  );
}

export default ManageForm;
