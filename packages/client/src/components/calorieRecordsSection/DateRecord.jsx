import styles from "./DateRecord.module.css";
import StyledRecordCell from "../common/StyledRecordCell";

function DateRecord(props) {
  const formatDate = (inputDate) => {
    return {
      day: inputDate.getDate(),
      month: inputDate.toLocaleDateString(undefined, { month: "short" }),
      year: inputDate.getFullYear(),
    };
  };

  return (
    <StyledRecordCell>
      <div className={styles["record-date-month"]}>
        {formatDate(props.date).month}
      </div>
      <div className={styles["record-date-day"]}>
        {formatDate(props.date).day}
      </div>
      <div className={styles["record-date-year"]}>
        {formatDate(props.date).year}
      </div>
    </StyledRecordCell>
  );
}

export default DateRecord;
