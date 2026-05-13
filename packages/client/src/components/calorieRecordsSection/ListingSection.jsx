import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import TextContent from "../common/TextContent";
// import { useState } from "react";

function ListingSection(props) {
  const { allRecords, isLoading } = props;
  const { currentDate, currentDateString, setCurrentDate } =
    useContext(AppContext);

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
    setCurrentDate(event.target.value);
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
        value={currentDateString}
        onChange={onDateChangeHandler}
      />
      {isLoading && <TextContent value="Loading..." />}
      {!isLoading && <RecordList records={filteredRecords} />}
    </>
  );
}

export default ListingSection;
