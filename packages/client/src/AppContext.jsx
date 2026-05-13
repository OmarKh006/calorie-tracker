import { createContext } from "react";
import { useState } from "react";
import { getDateFromString } from "./utils/utils";

export const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: (val) => {},
  calories: 0,
  setCalories: (val) => {},
  currentDateString: "",
  isDateValid: false,
});

function AppContextProvider(props) {
  const { children } = props;
  const todayString = new Date().toISOString().split("T")[0];
  const [currentDate, setCurrentDate] = useState(
    new Date(todayString + "T00:00:00Z"),
  );
  const [calories, setCalories] = useState(0);

  const updateCurrentDate = (val) => {
    setCurrentDate(getDateFromString(val));
  };

  const currentDateString = currentDate
    ? currentDate.toISOString().split("T")[0]
    : "";

  return (
    <AppContext.Provider
      value={{
        currentDate,
        setCurrentDate: updateCurrentDate,
        calories,
        setCalories,
        currentDateString,
        isDateValid: !!currentDateString,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
