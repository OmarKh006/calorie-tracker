import { useState } from "react";

import styles from "./CalorieRecord.module.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  const [currentCalories, setCurrentCalories] = useState(props.record.calories);
  const calorieIncrement = () => {
    setCurrentCalories(currentCalories + 10);
  };
  return (
    <>
      <ul className={styles.record}>
        <li>
          <DateRecord date={props.record.date} />
        </li>
        {currentCalories > 0 ? (
          <>
            <li>{props.record.meal}</li>
            <li>{props.record.content}</li>
            <li
              className={styles["record-calories"]}
              onClick={calorieIncrement}
            >
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
