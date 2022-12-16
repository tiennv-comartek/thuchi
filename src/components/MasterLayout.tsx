import isNotLogin from "../hoc/isNotLogin";
import "./style.scss";
import gk1 from "../assets/images/gk1.png";
import gk2 from "../assets/images/gk2.png";
import gk3 from "../assets/images/gk3.png";
import { Col, Row } from "antd";
import { Outlet } from "react-router";
function MasterLayout() {
  return (
    <div className="masterlayout">
      <Row>
        <Col xl={8} md={12} span={0}>
          <div className="wraper_img">
            <div
              className="img_login"
              style={{
                backgroundImage: `url(${
                  [gk1, gk2, gk3][Math.floor(Math.random() * 3)]
                })`,
              }}
            ></div>
          </div>
        </Col>

        <Col className="waper_login" xl={8} md={12} span={24}>
          <Outlet />
        </Col>
        <Col className="wraper_img" xl={8} span={0}>
          <div
            className="img_login"
            style={{
              backgroundImage: `url(${
                [gk1, gk2, gk3][Math.floor(Math.random() * 3)]
              })`,
            }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}

export default isNotLogin(MasterLayout);
