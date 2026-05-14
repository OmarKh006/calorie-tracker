import styles from "./TrackPage.module.css";
import { useLoadData } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import RecordList from "../calorieRecordsSection/RecordList";
import TextContent from "../common/TextContent";

export function TrackPage() {
  const { currentDateString, setCurrentDate } = useContext(AppContext);

  const [records, loading, error] = useLoadData(
    `/api/calories/${currentDateString}`,
  );

  const onDateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  let content = <RecordList records={records} />;

  if (error) content = <TextContent value={error} />;

  if (loading) content = <TextContent value="Loading..." />;

  return (
    <>
      <h1 className={styles.title}>Calories Tracker</h1>
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
      {content}
      <Link className={styles["open-modal-button"]} to="create">
        Track Food
      </Link>
    </>
  );
}
