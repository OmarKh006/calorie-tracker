import { useState } from "react";
import "./CaloriesRecordEdit.css";

export default function CaloriesRecordEdit() {
  const [mealRecord, setMealRecord] = useState({});

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
