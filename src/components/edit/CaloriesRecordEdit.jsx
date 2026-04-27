import { useState } from "react";
import "./CaloriesRecordEdit.css";

export default function CaloriesRecordEdit() {
  const DEFAULT_VALUE = {
    date: "",
    meal: "",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);

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
      calories: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(mealRecord);
    setMealRecord({
      date: "",
      meal: "",
      content: "",
      calories: 0,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChange}
      />

      <label htmlFor="meal">Meal: </label>
      <select id="meal" value={mealRecord.meal} onChange={onMealChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input
        type="text"
        id="content"
        value={mealRecord.content}
        onChange={onContentChange}
      />

      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        id="calories"
        value={mealRecord.calories}
        onChange={onCaloriesChange}
      />

      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
