import { useState } from "react";
import RecordList from "./components/calorieRecordsSection/RecordList";
import CaloriesRecordEdit from "./components/edit/CaloriesRecordEdit";

const INITIAL_RECORDS = [
  {
    id: 0,
    date: new Date(2026, 3, 1),
    meal: "Breakfast",
    content: "Omlette",
    calories: -300,
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

  const formSubmit = (record) => {
    const formattedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextID,
    };
    setRecords((prevRecord) => [formattedRecord, ...prevRecord]);
    setNextID((previous) => previous + 1);
    console.log(record);
  };

  return (
    <>
      <CaloriesRecordEdit onFormSubmit={formSubmit} />
      <RecordList records={records}></RecordList>
    </>
  );
}

export default App;
