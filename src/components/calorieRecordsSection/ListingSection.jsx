import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
// import { useState } from "react";

function ListingSection(props) {
  const { allRecords } = props;

  // const [filteredRecords, setFilteredRecords] = useState([]);

  const filterDate = (record) => {
    return (
      record.date.getDate() === props.currentDate.getDate() &&
      record.date.getMonth() === props.currentDate.getMonth() &&
      record.date.getFullYear() === props.currentDate.getFullYear()
    );
  };

  const filteredRecords = (allRecords ?? []).filter(filterDate);

  const onDateChangeHandler = (event) => {
    props.setCurrentDate(new Date(event.target.value));
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
        value={props.currentDate.toISOString().split("T")[0]}
        onChange={onDateChangeHandler}
      />
      <RecordList
        records={filteredRecords}
        setCalories={props.setCalories}
        calories={props.calories}
      />
    </>
  );
}

export default ListingSection;
