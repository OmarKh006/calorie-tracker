import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";

function ListingSection(props) {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calories, setCalories] = useState(0);

  const filterDate = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const filteredRecords = allRecords.filter(filterDate);

  const onDateChangeHandler = (event) => {
    let sum = 0;
    setCurrentDate(new Date(event.target.value));

    filteredRecords.forEach((record) => {
      sum += record.calories;
    });

    setCalories(sum);
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
