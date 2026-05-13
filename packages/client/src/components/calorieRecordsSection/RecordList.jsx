import { useContext } from "react";
import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export default function RecordList(props) {
  // const totalCalories = (props.records ?? []).reduce(
  //   (sum, record) => sum + Number(record.calories),
  //   0,
  // );

  const { calories } = useContext(AppContext);

  if (!props.records?.length)
    return <div className={styles.placeholder}>No Records To Display</div>;

  return (
    <>
      <ul className={styles["record-list"]}>
        {props.records.map((record) => (
          <li className={styles["list-item"]} key={record.id}>
            <Link to={`${record.id}`}>
              <CalorieRecord record={record} />
            </Link>
          </li>
        ))}
      </ul>
      <label>Total calories : {calories}</label>
    </>
  );
}
