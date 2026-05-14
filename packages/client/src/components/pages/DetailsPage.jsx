import { Link, useParams } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import TextContent from "../common/TextContent";
import { useLoadData } from "../../utils/hooks";

export const DetailsPage = () => {
  const params = useParams();
  const [details, _, err] = useLoadData(
    `/api/calories/record/${params.id}`,
    "single",
  );

  return err ? (
    <TextContent value={err} />
  ) : (
    details && (
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Date:</p>
          <p>{details.date.toLocaleDateString()}</p>
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
