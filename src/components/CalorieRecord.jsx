import "./CalorieRecord.css";

function CalorieRecord() {
  const recordDate = new Date();
  const meal = "Breakfast";
  const content = "Molasses and Tahina";
  const calories = 340;
  return (
    <>
      <ul className="record">
        <li>{recordDate.toLocaleDateString()}</li>
        <li>{meal}</li>
        <li>{content}</li>
        <li className="record-calories">{calories}</li>
      </ul>
    </>
  );
}

export default CalorieRecord;
