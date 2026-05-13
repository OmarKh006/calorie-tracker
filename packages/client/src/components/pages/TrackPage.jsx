import { useEffect, useState } from "react";
import CaloriesRecordEdit from "../edit/CaloriesRecordEdit";
import ListingSection from "../calorieRecordsSection/ListingSection";
import styles from "./TrackPage.module.css";
import ReactModal from "react-modal";
import { getDateFromString } from "../../utils/utils";

export function TrackPage() {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "var(--form-border-radius)",
      padding: "0px",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };

  async function saveToDB(record) {
    try {
      const response = await fetch("/api/calories", {
        method: "POST",
        body: JSON.stringify(record),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to add new record");
      loadFromDB();
    } catch (err) {
      setError(err.message);
    }
  }

  async function loadFromDB() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/calories");
      if (response.status === 404)
        throw new Error("Error : Data not found 404");
      if (!response.ok) throw new Error("Unknown error occurred");
      const data = await response.json();
      setRecords(
        data.map((record) => ({
          ...record,
          date: getDateFromString(record.date),
        })),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmit = (record) => {
    saveToDB(record);
    handleCloseModal();
  };

  useEffect(() => {
    loadFromDB();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Calories Tracker</h1>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="ReactModal"
        style={modalStyles}
      >
        <CaloriesRecordEdit
          onFormSubmit={formSubmit}
          onCancel={handleCloseModal}
        />
      </ReactModal>
      {records && (
        <ListingSection allRecords={records} isLoading={loading} err={error} />
      )}
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </>
  );
}
