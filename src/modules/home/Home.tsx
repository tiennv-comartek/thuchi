import { Button, Card } from "antd";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { key_login } from "../../constant/constant";
import { systemRouter } from "../../routes";
import { useExpenseStore } from "../store/useExpense";
import { useInComeStore } from "../store/useInCome";
import "./style.scss";

function Home() {
  const navigate = useNavigate();

  const { dataExpenses } = useExpenseStore((state: any) => ({
    dataExpenses: state.dataExpenses,
  }));

  const { dataIncomes } = useInComeStore((state: any) => ({
    dataIncomes: state.dataInComes,
  }));

  const amountExpense = dataExpenses.reduce(
    (total, current) => {
      return Number(total) + Number(current.data.amount);
    },
    [0]
  );

  const amountInCome = dataIncomes.reduce(
    (total, current) => {
      return Number(total) + Number(current.data.amount);
    },
    [0]
  );

  const handleLogout = () => {
    localStorage.removeItem(key_login);
    navigate(systemRouter.LOGIN);
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="form_home">
      <Button type="primary" onClick={handleLogout}>
        Out
      </Button>
      <div className="title">App chi tiêu</div>
      <Card
        title="Chi"
        className="out"
        extra={<Link to={systemRouter.EXPENSE}>Xem</Link>}
      >
        <p>{new Intl.NumberFormat().format(amountExpense)} VNĐ</p>
      </Card>
      <Card
        title="Thu"
        className="in"
        extra={<Link to={systemRouter.INCOME}>Xem</Link>}
      >
        {new Intl.NumberFormat().format(amountInCome)} VNĐ
      </Card>
      <Card
        title={amountInCome > amountExpense ? "Tổng" : "Tổng(Còn cái nịt!)"}
        className="total"
      >
        {new Intl.NumberFormat().format(amountInCome - amountExpense)} VNĐ
      </Card>
    </div>
  );
}

export default Home;
