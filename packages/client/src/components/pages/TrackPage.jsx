import { useState } from "react";
import CaloriesRecordEdit from "../edit/CaloriesRecordEdit";
import ListingSection from "../calorieRecordsSection/ListingSection";
import styles from "./TrackPage.module.css";
import ReactModal from "react-modal";
import { useLoadData } from "../../utils/hooks";

export function TrackPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [records, loading, error, refreshData] = useLoadData("/api/calories");

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
      refreshData();
    } catch (err) {
      console.log(err);
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
