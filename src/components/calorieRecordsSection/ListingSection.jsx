import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";

function ListingSection(props) {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  const filterDate = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const filteredRecords = (allRecords ?? []).filter(filterDate);
  const calories = filteredRecords.reduce((sum, r) => sum + r.calories, 0);

  const onDateChangeHandler = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">
        Select Date:
      </label>
      <input
        className={styles["listing-picker-input"]}
        type="date"
        id="listingDate"
        value={currentDate.toISOString().split("T")[0]}
        onChange={onDateChangeHandler}
      />
      <label className={`${styles["listing-picker-label"]}`}>
        Total Calories : {calories}
      </label>
      <RecordList records={filteredRecords} />
    </>
  );
}

export default ListingSection;
