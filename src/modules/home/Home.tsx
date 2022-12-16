import { Card } from "antd";
import { Link } from "react-router-dom";
import { systemRouter } from "../../routes";
import { useExpenseStore } from "../store/useExpense";
import { useInComeStore } from "../store/useInCome";
import "./style.scss";

function Home(props) {
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
  return (
    <div className="form_home">
      <div className="title">App chi tiêu</div>
      <Card
        title="Tiêu"
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
