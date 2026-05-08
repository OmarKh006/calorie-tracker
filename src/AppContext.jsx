import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: (val) => {},
  calories: 0,
  setCalories: (val) => {},
});

function AppContextProvider(props) {
  const { children } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calories, setCalories] = useState(0);
  return (
    <AppContext.Provider
      value={{ currentDate, setCurrentDate, calories, setCalories }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
