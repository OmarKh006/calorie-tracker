import CalorieRecord from "./CalorieRecord";
import "./RecordList.css";

export default function RecordList(props) {
  return (
    <div className="record-list">
      {props.records.map((record) => {
        return <CalorieRecord key={record.id} record={record}></CalorieRecord>;
      })}
    </div>
  );
}
