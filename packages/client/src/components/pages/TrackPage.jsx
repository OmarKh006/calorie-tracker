import { useEffect, useState } from "react";
import CaloriesRecordEdit from "../edit/CaloriesRecordEdit";
import ListingSection from "../calorieRecordsSection/ListingSection";
import styles from "./TrackPage.module.css";
import ReactModal from "react-modal";
import { getDateFromString } from "../../utils/utils";

const LOCAL_STORAGE_KEY = "calorieRecords";

export function TrackPage() {
  const [records, setRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  function saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
  }

  async function loadFromDB() {
    const response = await fetch("/api/calories");
    const data = await response.json();
    setRecords(
      data.map((record) => ({
        ...record,
        date: getDateFromString(record.date),
      })),
    );
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formSubmit = (record) => {
    const formattedRecord = {
      ...record,
      date: record.date,
      id: crypto.randomUUID(),
    };
    setRecords((prevRecord) => [formattedRecord, ...(prevRecord ?? [])]);
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
      {records && <ListingSection allRecords={records} />}
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </>
  );
}
