import {
  useEffect,
  useState,
  useReducer,
  useContext,
  useRef,
  useCallback,
} from "react";
import styles from "./CaloriesRecordEdit.module.css";
import { AppContext } from "../../AppContext";
import FormInput from "../common/FormInput";
import Button from "../common/Button";

const DEFAULT_VALUE = {
  meal: true,
  content: false,
  calories: true,
};

function formReducer(state, action) {
  const { key, value, auxVal } = action;

  let valid;

  switch (key) {
    case "content":
      valid =
        (value === "sport" && auxVal < 0) || (value !== "sport" && auxVal >= 0);

      return {
        ...state,
        content: !!value,
        calories: valid,
      };
    case "calories":
      valid =
        (auxVal === "sport" && value < 0) || (auxVal !== "sport" && value >= 0);
      return {
        ...state,
        calories: valid,
      };
    default:
      return {
        ...state,
        meal: !!value,
      };
  }
}

export default function CaloriesRecordEdit(props) {
  const [isFormValid, setIsFormValid] = useState(false);
  const {
    currentDate,
    isDateValid,
    currentDateString,
    setCurrentDate,
    calories,
  } = useContext(AppContext);
  const [formState, dispatchFn] = useReducer(formReducer, DEFAULT_VALUE);
  const { content: isContentValid, calories: isCaloriesValid } = formState;

  const contentRef = useRef();
  const caloriesRef = useRef();
  const mealRef = useRef();

  // const isFormValid =
  //   mealRecord.date && mealRecord.content && mealRecord.calories > 0;

  useEffect(() => {
    if (!isContentValid) contentRef.current.focus();

    setIsFormValid(isDateValid && isContentValid && isCaloriesValid);
  }, [isDateValid, isContentValid, isCaloriesValid]);

  const onDateChange = (event) => {
    setCurrentDate(event.target.value);
  };

  const onMealBlur = (event) => {
    dispatchFn({
      key: "meal",
      value: event.target.value,
    });
  };

  const onContentBlur = (event) => {
    dispatchFn({
      key: "content",
      value: event.target.value,
      auxVal: Number(caloriesRef.current.value),
    });
  };

  const onCaloriesBlur = (event) => {
    dispatchFn({
      key: "calories",
      value: Number(event.target.value),
      auxVal: contentRef.current.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit({
      date: currentDate,
      meal: mealRef.current.value,
      content: contentRef.current.value,
      calories: caloriesRef.current.value,
    });
  };

  const onCancelHandler = useCallback(() => {
    if (isFormValid) props.onCancel();
  }, [isFormValid]);

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <p className={styles.warning}>You have spent {calories} calories</p>
      <FormInput
        label="Date"
        type="date"
        id="date"
        value={currentDateString}
        onChange={onDateChange}
        isValid={isDateValid}
      />

      <FormInput
        label="Meal"
        id="meal"
        onBlur={onMealBlur}
        ref={mealRef}
        type="select"
        isValid
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </FormInput>

      <FormInput
        label="Content"
        type="text"
        id="content"
        onBlur={onContentBlur}
        isValid={isContentValid}
        ref={contentRef}
      />

      <FormInput
        label="Calories"
        type="number"
        id="calories"
        onBlur={onCaloriesBlur}
        isValid={isCaloriesValid}
        ref={caloriesRef}
      />

      <div className={styles.footer}>
        <Button variant="primary" disabled={!isFormValid}>
          Add Record
        </Button>
        <Button type="button" variant="secondary" onClick={onCancelHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
