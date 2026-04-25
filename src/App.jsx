import CalorieRecord from "./components/CalorieRecord";

function App() {
  return (
    <>
      <CalorieRecord
        date={new Date(2026, 3, 1)}
        meal={"Breakfast"}
        content={"Omlette + bread"}
        calories={600}
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2026, 3, 5)}
        meal={"Lunch"}
        content={"Kabsa"}
        calories={1000}
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2026, 3, 20)}
        meal={"Dinner"}
        content={"Yoghurt"}
        calories={200}
      ></CalorieRecord>
    </>
  );
}

export default App;
