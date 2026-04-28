import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";

export default function RecordList(props) {
  return (
    <ul className={styles.recordList}>
      {props.records.map((record) => {
        return (
          <li className={styles.listItem} key={record.id}>
            <CalorieRecord record={record}></CalorieRecord>
          </li>
        );
      })}
    </ul>
  );
}
