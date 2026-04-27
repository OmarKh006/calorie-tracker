import "./CaloriesRecordEdit.css";

export default function CaloriesRecordEdit() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({
      date: event.target[0].value,
      meal: event.target[1].value,
      content: event.target[2].value,
      calories: event.target[3].value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" id="date" />

      <label htmlFor="meal">Meal: </label>
      <select name="meal" id="meal">
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input type="text" name="content" id="content" />

      <label htmlFor="calories">Calories: </label>
      <input type="number" name="calories" id="calories" />

      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
