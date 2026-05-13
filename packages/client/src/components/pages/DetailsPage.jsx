import { Link, useParams } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import { useEffect, useState } from "react";
import { getDateFromString } from "../../utils/utils";
import TextContent from "../common/TextContent";

export const DetailsPage = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [err, setErr] = useState();

  async function loadDetails(id) {
    try {
      const response = await fetch(`/api/calories/record/${id}`);
      if (!response.ok) throw new Error("Failed to load record details");
      const data = await response.json();

      setDetails({
        ...data,
        date: getDateFromString(data.date).toLocaleDateString(),
      });
    } catch (err) {
      setErr(err.message);
    }
  }

  useEffect(() => {
    loadDetails(params.id);
  }, []);

  return err ? (
    <TextContent value={err} />
  ) : (
    details && (
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Date:</p>
          <p>{details.date}</p>
        </div>
        <div className={styles.item}>
          <p>Meal:</p>
          <p>{details.meal}</p>
        </div>
        <div className={styles.item}>
          <p>Content:</p>
          <p>{details.content}</p>
        </div>
        <div className={styles.item}>
          <p>Calories:</p>
          <p>{details.calories}</p>
        </div>
        <br />
        <Link to=".." relative="path">
          Go To Track Page
        </Link>
      </div>
    )
  );
};
