import { Card } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

function Home(props) {
  return (
    <div className="form_home">
      <div className="title">App chi tiêu</div>
      <Card title="Tiêu" className="out" extra={<Link to="#">Xem</Link>}></Card>
      <Card title="Thu" className="in" extra={<Link to="#">Xem</Link>}></Card>
    </div>
  );
}

export default Home;
