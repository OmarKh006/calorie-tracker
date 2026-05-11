import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <p>Something went wrong</p>
      <Link to="/">Redirect to HomePage</Link>
    </>
  );
};
