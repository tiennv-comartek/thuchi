import create from "zustand";

interface DataArrI {
  dataInComes: {
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
  updateData: (dataExpense: DataArrI["dataInComes"]) => void;
  removeData: (dataExpenseId: number) => void;
}

export const useInComeStore = create<DataArrI & ActionI>((set) => ({
  dataInComes: [
    {
      id: Math.ceil(Math.random() * 1000),
      data: {
        title: "Lương",
        amount: 3000000,
      },
    },
    {
      id: Math.ceil(Math.random() * 1000),
      data: {
        title: "Bán gấu",
        amount: 200000,
      },
    },
  ],
  addData: (dataInCome) => {
    set((state) => ({
      dataInComes: [...state.dataInComes, dataInCome],
    }));
  },
  removeData: (dataInComeId) => {
    set((state) => ({
      dataInComes: state.dataInComes.filter((c) => c.id !== dataInComeId),
    }));
  },
  updateData: (dataNew) => {
    set((state) => ({
      dataInComes: [...dataNew],
    }));
  },
}));
