import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const REDIRECT_COUNT = 10;
const COUNT_DOWN_INTERVAL = 1000;
const HOME_LINK = "/";

export const ErrorPage = () => {
  const [counter, setCounter] = useState(REDIRECT_COUNT);
  const intervalHandler = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    intervalHandler.current = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, COUNT_DOWN_INTERVAL);

    return () => clearInterval(intervalHandler.current);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(intervalHandler.current);
      navigate(HOME_LINK);
    }
  }, [counter]);

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
