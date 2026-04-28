import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";

export default function RecordList(props) {
  if (!props.records?.length)
    return <div className={styles.placeholder}>No Records To Display</div>;

  return (
    <ul className={styles["record-list"]}>
      {props.records.map((record) => {
        return (
          <li className={styles["list-item"]} key={record.id}>
            <CalorieRecord record={record}></CalorieRecord>
          </li>
        );
      })}
    </ul>
  );
}
