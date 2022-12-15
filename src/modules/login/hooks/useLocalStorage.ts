import { useState } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });
  return {
    setStoredValue,
    storedValue,
  };
};

export default useLocalStorage;
