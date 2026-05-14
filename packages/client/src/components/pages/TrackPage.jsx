import ListingSection from "../calorieRecordsSection/ListingSection";
import styles from "./TrackPage.module.css";
import { useLoadData } from "../../utils/hooks";
import { Link } from "react-router-dom";

export function TrackPage() {
  const [records, loading, error, refreshData] = useLoadData("/api/calories");

  return (
    <>
      <h1 className={styles.title}>Calories Tracker</h1>
      {records && (
        <ListingSection allRecords={records} isLoading={loading} err={error} />
      )}
      <Link className={styles["open-modal-button"]} to="create">
        Track Food
      </Link>
    </>
  );
}
