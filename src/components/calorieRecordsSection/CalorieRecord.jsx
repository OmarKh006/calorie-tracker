import "./CalorieRecord.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  let currentCalories = props.record.calories;
  const calorieIncrement = () => {
    console.log("event is working");
    currentCalories += 10;
    console.log(currentCalories);
  };
  return (
    <>
      <ul className="record">
        <li>
          <DateRecord date={props.record.date} />
        </li>
        <li>{props.record.meal}</li>
        <li>{props.record.content}</li>
        <li className="record-calories" onClick={calorieIncrement}>
          <StyledRecordCell>{currentCalories}</StyledRecordCell>
        </li>
      </ul>
    </>
  );
}

export default CalorieRecord;
