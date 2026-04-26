import "./CalorieRecord.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  return (
    <>
      <ul className="record">
        <li>
          <DateRecord date={props.record.date} />
        </li>
        <li>{props.record.meal}</li>
        <li>{props.record.content}</li>
        <li className="record-calories">
          <StyledRecordCell>{props.record.calories}</StyledRecordCell>
        </li>
      </ul>
    </>
  );
}

export default CalorieRecord;
