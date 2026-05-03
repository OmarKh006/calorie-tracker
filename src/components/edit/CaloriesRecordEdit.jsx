import { useEffect, useState, useReducer, useContext } from "react";
import styles from "./CaloriesRecordEdit.module.css";
import { getDateFromString } from "../../utils/utils";
import AppContext from "../../app-context";

const DEFAULT_VALUE = {
  date: { value: "", valid: false },
  meal: { value: "Breakfast", valid: true },
  content: { value: "", valid: false },
  calories: { value: 0, valid: true },
};

function formReducer(state, action) {
  const { type, key, value } = action;

  if (type === "RESET") {
    return DEFAULT_VALUE;
  }

  let valid;

  switch (key) {
    case "content":
      valid =
        (value === "sport" && state.calories.value < 0) ||
        (value !== "sport" && state.calories.value >= 0);

      return {
        ...state,
        content: { value, valid: !!value },
        calories: { ...state.calories, valid },
      };
    case "calories":
      valid =
        (state.content.value === "sport" && value < 0) ||
        (state.content.value !== "sport" && value >= 0);
      return {
        ...state,
        calories: { value, valid },
      };
    default:
      return {
        ...state,
        [key]: { value, valid: !!value },
      };
  }
}

export default function CaloriesRecordEdit(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const { currentDate, setCurrentDate, calories } = useContext(AppContext);
  const [formState, dispatchFn] = useReducer(
    formReducer,
    DEFAULT_VALUE,
    (initialState) => ({
      ...initialState,
      date: {
        value: currentDate.toISOString().split("T")[0],
        valid: !!currentDate,
      },
    }),
  );
  const {
    date: { valid: isDateValid },
    content: { valid: isContentValid },
    calories: { valid: isCaloriesValid },
  } = formState;

  // const isFormValid =
  //   mealRecord.date && mealRecord.content && mealRecord.calories > 0;

  useEffect(() => {
    setIsFormValid(isDateValid && isContentValid && isCaloriesValid);
  }, [isDateValid, isContentValid, isCaloriesValid]);

  const onDateChange = (event) => {
    dispatchFn({
      type: "UPDATE_FIELD",
      key: "date",
      value: event.target.value,
    });
    setCurrentDate(getDateFromString(event.target.value));
  };

  const onMealChange = (event) => {
    dispatchFn({
      type: "UPDATE_FIELD",
      key: "meal",
      value: event.target.value,
    });
  };

  const onContentChange = (event) => {
    dispatchFn({
      type: "UPDATE_FIELD",
      key: "content",
      value: event.target.value,
    });
  };

  const onCaloriesChange = (event) => {
    dispatchFn({
      type: "UPDATE_FIELD",
      key: "calories",
      value: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(
      Object.keys(formState).reduce((aggr, cur) => {
        aggr[cur] = formState[cur].value;
        return aggr;
      }, {}),
    );
    dispatchFn({ type: "RESET" });
  };

  const onCancelHandler = () => {
    dispatchFn({ type: "RESET" });
    props.onCancel();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <p className={styles.warning}>You have spent {calories} calories</p>
      <label htmlFor="date">Date:</label>
      <input
        className={`${styles["form-input"]} ${!isDateValid ? styles.error : ""}`}
        type="date"
        id="date"
        value={formState.date.value}
        onChange={onDateChange}
      />

      <label htmlFor="meal">Meal:</label>
      <select
        className={styles["form-input"]}
        id="meal"
        value={formState.meal.value}
        onChange={onMealChange}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">Content:</label>
      <input
        className={`${styles["form-input"]} ${!isContentValid ? styles.error : ""}`}
        type="text"
        id="content"
        value={formState.content.value}
        onChange={onContentChange}
      />

      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        value={formState.calories.value}
        onChange={onCaloriesChange}
        className={`${styles["form-input"]} ${!isCaloriesValid ? styles.error : ""}`}
      />

      <div className={styles.footer}>
        <button disabled={!isFormValid}>Add Record</button>
        <button
          type="button"
          className={styles.cancel}
          onClick={onCancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
