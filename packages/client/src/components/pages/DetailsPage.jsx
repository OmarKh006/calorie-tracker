import { Link, useParams } from "react-router-dom";

export const DetailsPage = () => {
  const params = useParams();
  return (
    <>
      <p>id {params.id}</p>
      <Link to=".." relative="path">
        Go back to records
      </Link>
    </>
  );
};
