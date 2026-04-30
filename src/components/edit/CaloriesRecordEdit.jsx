import { useState } from "react";
import styles from "./CaloriesRecordEdit.module.css";

export default function CaloriesRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "Breakfast",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  const isFormValid =
    mealRecord.date && mealRecord.content && mealRecord.calories > 0;

  const onDateChange = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
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
  };

  const onCaloriesChange = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: parseInt(event.target.value),
    });
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

  // useEffect(() => {
  //   setIsFormValid(
  //     mealRecord.date && mealRecord.content && mealRecord.calories > 0,
  //   );
  // }, [
  //   mealRecord.date,
  //   mealRecord.content,
  //   mealRecord.calories,
  // ]);

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChange}
      />

      <label htmlFor="meal">Meal:</label>
      <select id="meal" value={mealRecord.meal} onChange={onMealChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">Content:</label>
      <input
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
        className={`${styles["calories-input"]} ${mealRecord.calories < 0 ? styles.error : ""}`}
        min={0}
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
