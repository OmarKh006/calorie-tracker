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

  // useEffect(() => {
  //   const timeoutID = setTimeout(() => {
  //     setFilteredRecords((allRecords ?? []).filter(filterDate));
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeoutID);
  //   };
  // }, [currentDate]);

  const filteredRecords = (allRecords ?? []).filter(filterDate);
  const calories = filteredRecords.reduce((sum, r) => sum + r.calories, 0);

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
      <label className={`${styles["listing-picker-label"]}`}>
        Total Calories : {calories}
      </label>
      <RecordList records={filteredRecords} />
    </>
  );
}

export default ListingSection;
