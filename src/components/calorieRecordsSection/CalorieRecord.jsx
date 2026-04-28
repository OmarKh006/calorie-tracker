import { useState } from "react";

import "./CalorieRecord.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  const [currentCalories, setCurrentCalories] = useState(props.record.calories);
  const calorieIncrement = () => {
    setCurrentCalories(currentCalories + 10);
  };
  return (
    <>
      <ul className="record">
        <li>
          <DateRecord date={props.record.date} />
        </li>
        {currentCalories > 0 ? (
          <>
            <li>{props.record.meal}</li>
            <li>{props.record.content}</li>
            <li className="record-calories" onClick={calorieIncrement}>
              <StyledRecordCell>{currentCalories}</StyledRecordCell>
            </li>
          </>
        ) : (
          <li>Invalid Record</li>
        )}
      </ul>
    </>
  );
}

export default CalorieRecord;
