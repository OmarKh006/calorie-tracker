import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useContext } from "react";
import AppContext from "../../app-context";
// import { useState } from "react";

function ListingSection(props) {
  const { allRecords } = props;
  const { currentDate, setCurrentDate } = useContext(AppContext);

  // const [filteredRecords, setFilteredRecords] = useState([]);

  const filterDate = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const filteredRecords = (allRecords ?? []).filter(filterDate);

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
      <RecordList records={filteredRecords} />
    </>
  );
}

export default ListingSection;
