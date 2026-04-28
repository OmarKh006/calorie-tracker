import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: #d4e0ff;
  padding: 20px;
  border-radius: 10px;

  .footer {
    display: flex;
  }

  .footer button {
    background-color: white;
    color: #012367;
    display: block;
    border: 3px solid #012367;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    flex-grow: 1;
  }
`;

const Label = styled.label`
  color: #333;
  margin-right: 30px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  &[type="number"],
  &[type="date"],
  &[type="text"] {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    min-width: 255px;
    margin-bottom: 20px;
    font-size: 16px;
    display: block;
    box-sizing: border-box;
  }

  &#calories {
    border: ${(props) => props.caloriesCount < 0 && "2px solid red"};
    background-color: ${(props) => props.caloriesCount < 0 && "white"};
    color: ${(props) => props.caloriesCount < 0 && "red"};
  }
`;

const Select = styled.select`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  min-width: 255px;
  margin-bottom: 20px;
  display: block;
  box-sizing: border-box;
`;

export default function CaloriesRecordEdit(props) {
  const DEFAULT_VALUE = {
    date: "",
    meal: "",
    content: "",
    calories: 0,
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);

  const onDateChange = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };

  const onMealChange = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };

  const onContentChange = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };

  const onCaloriesChange = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: parseInt(event.target.value),
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Label htmlFor="date">Date: </Label>
      <Input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChange}
      />

      <Label htmlFor="meal">Meal: </Label>
      <Select id="meal" value={mealRecord.meal} onChange={onMealChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </Select>

      <Label htmlFor="content">Content: </Label>
      <Input
        type="text"
        id="content"
        value={mealRecord.content}
        onChange={onContentChange}
      />

      <Label htmlFor="calories">Calories: </Label>
      <Input
        type="number"
        id="calories"
        $caloriesCount={mealRecord.calories}
        value={mealRecord.calories}
        onChange={onCaloriesChange}
        className={mealRecord.calories < 0 ? "error" : ""}
      />

      <div className="footer">
        <button>Add Record</button>
      </div>
    </Form>
  );
}
