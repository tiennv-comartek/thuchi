import { Button, Col, Row } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { systemRouter } from "../../../routes";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";

interface ManageI {
  data?: any;
  addData: (data: any) => void;
  updateData: (data: any) => void;
  removeData: (data: any) => void;
}

function ManageForm(props: ManageI) {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [dataEdit, setDataEdit] = useState<any>();

  const showModal = (id: number) => {
    setIsShowModal(true);
    setDataEdit(props.data.filter((c) => c.id === id));
  };

  //delete
  const handleDelete = (id: any) => {
    props.removeData(id);
  };

  return (
    <div>
      <FormAdd addData={props.addData} />
      {props.data ? (
        props.data.map((item) => (
          <div key={item.id} className="item">
            <Row gutter={7}>
              <Col span={21}>
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
              <Col span={3}>
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

      <FormEdit
        isShowModal={isShowModal}
        dataEdit={dataEdit}
        setIsShowModal={setIsShowModal}
        updateData={props.updateData}
        data={props.data}
      />
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
