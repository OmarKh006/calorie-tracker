import CalorieRecord from "./CalorieRecord";
import "./RecordList.css";

export default function RecordList(props) {
  return (
    <ul className="record-list">
      {props.records.map((record) => {
        return (
          <li key={record.id}>
            <CalorieRecord record={record}></CalorieRecord>
          </li>
        );
      })}
    </ul>
  );
}
