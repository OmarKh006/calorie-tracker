import { useEffect, useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";

export default function CaloriesRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isContentValid, setIsContentValid] = useState(false);
  const [isCaloriesValid, setIsCaloriesValid] = useState(true);

  // const isFormValid =
  //   mealRecord.date && mealRecord.content && mealRecord.calories > 0;

  useEffect(() => {
    console.log({
      isFormValid: isDateValid && isContentValid && isCaloriesValid,
    });

    setIsFormValid(isDateValid && isContentValid && isCaloriesValid);
  }, [isDateValid, isContentValid, isCaloriesValid]);

  const onDateChange = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
    setIsDateValid(!!event.target.value);
  };

  const onMealChange = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };

  const onContentChange = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
    setIsContentValid(!!event.target.value);
  };

  const onCaloriesChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setMealRecord({ ...mealRecord, calories: value });
      setIsCaloriesValid(
        (value >= 0 && mealRecord.content !== "sports") ||
          (value <= 0 && mealRecord.content === "sports"),
      );
    } else {
      setIsCaloriesValid(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);
  };

  const onCancelHandler = () => {
    setMealRecord(DEFAULT_VALUE);
    props.onCancel();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date:</label>
      <input
        className={`${styles["form-input"]} ${!isDateValid ? styles.error : ""}`}
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChange}
      />

      <label htmlFor="meal">Meal:</label>
      <select
        className={styles["form-input"]}
        id="meal"
        value={mealRecord.meal}
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
        value={mealRecord.content}
        onChange={onContentChange}
      />

      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        value={mealRecord.calories}
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
