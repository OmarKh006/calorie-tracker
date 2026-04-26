import "./CalorieRecord.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "./StyledRecordCell";

function CalorieRecord(props) {
  return (
    <>
      <ul className="record">
        <li>
          <DateRecord date={props.date} />
        </li>
        <li>{props.meal}</li>
        <li>{props.content}</li>
        <li className="record-calories">
          <StyledRecordCell>{props.calories}</StyledRecordCell>
        </li>
      </ul>
    </>
  );
}

export default CalorieRecord;
