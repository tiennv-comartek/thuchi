import create from "zustand";

interface DataArrI {
  dataExpenses: {
    id: number;
    data: {
      title: string;
      amount: number;
    };
  }[];
}

interface DataI {
  id: number;
  data: {
    title: string;
    amount: number;
  };
}

interface ActionI {
  addData: (dataExpense: DataI) => void;
  updateData: (dataExpense: DataArrI["dataExpenses"]) => void;
  removeData: (dataExpenseId: number) => void;
}

export const useExpenseStore = create<DataArrI & ActionI>((set) => ({
  dataExpenses: [
    {
      id: Math.ceil(Math.random() * 1000),
      data: {
        title: "Mua chó",
        amount: 200000,
      },
    },
    {
      id: Math.ceil(Math.random() * 1000),
      data: {
        title: "Mua heo",
        amount: 150000,
      },
    },
  ],
  addData: (dataExpense) => {
    set((state) => ({
      dataExpenses: [...state.dataExpenses, dataExpense],
    }));
  },
  updateData: (dataExpenseve) => {
    set((state) => ({
      dataExpenses: [...dataExpenseve],
    }));
  },
  removeData: (dataExpenseId) => {
    set((state) => ({
      dataExpenses: state.dataExpenses.filter(
        (c: { id: any }) => c.id !== dataExpenseId
      ),
    }));
  },
}));
