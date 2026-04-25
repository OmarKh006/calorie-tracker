function DateRecord(props) {
  const formatDate = (inputDate) => {
    return inputDate.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return <div>{formatDate(props.date)}</div>;
}

export default DateRecord;
