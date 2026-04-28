import { useState } from "react";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";
import ListingSection from "./components/calorieRecordsSection/ListingSection";
import styles from "./App.module.css";
import ReactModal from "react-modal";

const INITIAL_RECORDS = [
  {
    id: 0,
    date: new Date(2026, 3, 1),
    meal: "Breakfast",
    content: "Omlette",
    calories: 300,
  },
  {
    id: 1,
    date: new Date(2026, 3, 3),
    meal: "Lunch",
    content: "Chicken",
    calories: 500,
  },
  {
    id: 2,
    date: new Date(2026, 3, 5),
    meal: "Dinner",
    content: "Yoghurt",
    calories: 100,
  },
  {
    id: 3,
    date: new Date(2026, 3, 26),
    meal: "Snacks",
    content: "Banana",
    calories: 300,
  },
];

function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);
  const [nextID, setNextID] = useState(5);
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
      id: nextID,
    };
    setRecords((prevRecord) => [formattedRecord, ...prevRecord]);
    setNextID((previous) => previous + 1);

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
      <ListingSection allRecords={records} />
      <button className={styles["open-modal-button"]} onClick={handleOpenModal}>
        Track Food
      </button>
    </>
  );
}

export default App;
