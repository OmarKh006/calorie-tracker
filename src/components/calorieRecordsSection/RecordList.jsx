import { useEffect } from "react";
import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";

export default function RecordList(props) {
  const totalCalories = (props.records ?? []).reduce(
    (sum, record) => sum + Number(record.calories),
    0,
  );

  useEffect(() => {
    props.setCalories(totalCalories);
  }, [totalCalories]);

  if (!props.records?.length)
    return <div className={styles.placeholder}>No Records To Display</div>;

  return (
    <>
      <ul className={styles["record-list"]}>
        {props.records.map((record) => (
          <li className={styles["list-item"]} key={record.id}>
            <CalorieRecord
              record={record}
              calories={props.calories}
              setCalories={props.setCalories}
            />
          </li>
        ))}
      </ul>
      <label>Total calories : {props.calories}</label>
    </>
  );
}
