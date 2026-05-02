import { useEffect, useState } from "react";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/calorieRecordsSection/ListingSection";
import styles from "./App.module.css";
import ReactModal from "react-modal";

const LOCAL_STORAGE_KEY = "calorieRecords";

function App() {
  const [records, setRecords] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

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

  function loadFromLocalStorage() {
    const loadedRecords = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (loadedRecords != null && loadedRecords !== "undefined")
      setRecords(
        JSON.parse(loadedRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
        })),
      );
    else setRecords([]);
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
      date: new Date(record.date),
      id: crypto.randomUUID(),
    };
    setRecords((prevRecord) => [formattedRecord, ...(prevRecord ?? [])]);
    handleCloseModal();
  };

  useEffect(() => {
    if (!records) loadFromLocalStorage();
    else saveToLocalStorage();
  }, [records]);

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
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      </ReactModal>
      {records && (
        <ListingSection
          allRecords={records}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
        />
      )}
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </>
  );
}

export default App;
