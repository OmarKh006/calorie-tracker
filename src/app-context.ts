import { createContext } from "react";

const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: (val: Date) => {},
  calories: 0,
  setCalories: (val: number) => {},
});

export default AppContext;
