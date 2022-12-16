import { useExpenseStore } from "../../store/useExpense";
import ManageForm from "../components/ManageForm";
import "../style.scss";

function Expense(props) {
  const { dataExpenses, addData, updateData, removeData } = useExpenseStore(
    (state: any) => ({
      dataExpenses: state.dataExpenses,
      addData: state.addData,
      updateData: state.updateData,
      removeData: state.removeData,
    })
  );
  return (
    <div className="form_item">
      <ManageForm
        data={dataExpenses}
        updateData={updateData}
        addData={addData}
        removeData={removeData}
      />
    </div>
  );
}

export default Expense;
