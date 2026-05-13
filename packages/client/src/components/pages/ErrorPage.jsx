import { Link } from "react-router-dom";
import { useRedirectAfterCountDown } from "../../utils/hooks";

const HOME_LINK = "/";

export const ErrorPage = () => {
  const counter = useRedirectAfterCountDown(10, HOME_LINK);
  return (
    <>
      <p>Something went wrong</p>
      <p>Redirecting to home page in {counter}s</p>
      <p>
        Or click <Link to={HOME_LINK}>here</Link> to redirect to Home Page
      </p>
    </>
  );
};
