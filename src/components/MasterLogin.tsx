import { Col, Row } from "antd";
import { Outlet } from "react-router";
import gk1 from "../assets/images/logo1.jpg";
import gk2 from "../assets/images/logo2.jpg";
import gk3 from "../assets/images/logo3.jpg";
import gk4 from "../assets/images/logo4.jpg";
import isLogin from "../hoc/isLogin";
import "./style.scss";

function MasterLogin(props) {
  return (
    <div className="masterlayout">
      <Row  justify="center" >
        <Col lg={16} md={10} span={0}>
          <div className="wraper_img">
            <div
              className="img_login"
              style={{
                backgroundImage: `url(${
                  [gk1, gk2, gk3, gk4][Math.floor(Math.random() * 4)]
                })`,
              }}
            ></div>
          </div>
        </Col>

        <Col lg={8} md={10} span={14} className="waper_login">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default isLogin(MasterLogin);
