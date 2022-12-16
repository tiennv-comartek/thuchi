import React, { useEffect } from "react";
import { useInComeStore } from "../../../store/useInCome";
import ManageForm from "../components/ManageForm";

function InCome(props) {
  const { dataInComes, addData, updateData, removeData } = useInComeStore(
    (state: any) => ({
      dataInComes: state.dataInComes,
      addData: state.addData,
      updateData: state.updateData,
      removeData: state.removeData,
    })
  );

  useEffect(() => {
    document.title = "Thu nhập";
  }, []);

  return (
    <div className="form_item">
      <ManageForm
        data={dataInComes}
        updateData={updateData}
        addData={addData}
        removeData={removeData}
      />
    </div>
  );
}

export default InCome;
