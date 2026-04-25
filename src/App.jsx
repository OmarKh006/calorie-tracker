import CalorieRecord from "./components/CalorieRecord";

function App() {
  return (
    <>
      <CalorieRecord
        date={new Date(2026, 3, 1).toLocaleDateString()}
        meal={"Breakfast"}
        content={"Omlette + bread"}
        calories={600}
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2026, 3, 5).toLocaleDateString()}
        meal={"Lucnh"}
        content={"Kabsa"}
        calories={1000}
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2026, 3, 20).toLocaleDateString()}
        meal={"Dinner"}
        content={"Yoghurt"}
        calories={200}
      ></CalorieRecord>
    </>
  );
}

export default App;
