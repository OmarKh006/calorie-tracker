import "./DateRecord.css";

function DateRecord(props) {
  const formatDate = (inputDate) => {
    return {
      day: inputDate.getDate(),
      month: inputDate.toLocaleDateString(undefined, { month: "short" }),
      year: inputDate.getFullYear(),
    };
  };

  return (
    <div className="record-date">
      <div className="record-date-month">{formatDate(props.date).month}</div>
      <div className="record-date-day">{formatDate(props.date).day}</div>
      <div className="record-date-year">{formatDate(props.date).year}</div>
    </div>
  );
}

export default DateRecord;
