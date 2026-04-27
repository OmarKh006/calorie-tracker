import { useState } from "react";
import "./CaloriesRecordEdit.css";

export default function CaloriesRecordEdit() {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();

  const onDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const onMealChange = (event) => {
    setMealValue(event.target.value);
  };

  const onContentChange = (event) => {
    setContentValue(event.target.value);
  };

  const onCaloriesChange = (event) => {
    setCaloriesValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      dateValue,
      mealValue,
      contentValue,
      caloriesValue,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" onChange={onDateChange} />

      <label htmlFor="meal">Meal: </label>
      <select id="meal" onChange={onMealChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input type="text" id="content" onChange={onContentChange} />

      <label htmlFor="calories">Calories: </label>
      <input type="number" id="calories" onChange={onCaloriesChange} />

      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
