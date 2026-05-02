import styles from "./CalorieRecord.module.css";
import DateRecord from "./DateRecord";
import StyledRecordCell from "../common/StyledRecordCell";

function CalorieRecord(props) {
  return (
    <>
      <ul className={styles.record}>
        <li>
          <DateRecord date={props.record.date} />
        </li>
        {props.record.calories > 0 ? (
          <>
            <li>{props.record.meal}</li>
            <li>{props.record.content}</li>
            <li className={styles["record-calories"]}>
              <StyledRecordCell>{props.record.calories}</StyledRecordCell>
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
