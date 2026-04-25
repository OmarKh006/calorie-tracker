import "./CalorieRecord.css";

function CalorieRecord(props) {
  const formatDate = (inputDate) => {
    return inputDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <ul className="record">
        <li>{formatDate(props.date)}</li>
        <li>{props.meal}</li>
        <li>{props.content}</li>
        <li className="record-calories">{props.calories}</li>
      </ul>
    </>
  );
}

export default CalorieRecord;
