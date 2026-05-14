import { useEffect, useState } from "react";
import { getDateFromString } from "../utils";

export function useLoadData(apiURL, type = "multiple") {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [records, setRecords] = useState([]);

  async function loadFromDB() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiURL);
      if (response.status === 404)
        throw new Error("Error : Data not found 404");
      if (!response.ok) throw new Error("Unknown error occurred");
      const data = await response.json();
      const result = type === "single" ? [data] : data;
      setRecords(
        result.map((record) => ({
          ...record,
          date: getDateFromString(record.date),
        })),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFromDB();
  }, []);

  return [type === "single" ? records[0] : records, loading, error, loadFromDB];
}
