import styles from "./CalorieRecord.module.css";
import StyledRecordCell from "../common/StyledRecordCell";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import Button from "../common/Button";

function CalorieRecord(props) {
  const { setCalories: addCalories } = useContext(AppContext);

  useEffect(() => {
    addCalories((prev) => prev + props.record.calories);

    return () => {
      addCalories((prev) => prev - props.record.calories);
    };
  }, []);

  async function deleteRecord(e) {
    e.preventDefault();
    const response = await fetch(`/api/calories/${props.record.id}`, {
      method: "DELETE",
    });

    if (response.ok) props.refresh?.();
  }

  return (
    <>
      <ul className={styles.record}>
        <>
          <li>{props.record.meal}</li>
          <li>{props.record.content}</li>
          <li className={styles["record-calories"]}>
            <StyledRecordCell>{props.record.calories}</StyledRecordCell>
          </li>
        </>
        <Button variant="secondary" onClick={deleteRecord}>
          Delete
        </Button>
      </ul>
    </>
  );
}

export default CalorieRecord;
