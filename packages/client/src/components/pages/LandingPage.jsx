import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <p>Welcome to calorie tracker app</p>
      <p>
        <Link to="track">Get Started</Link>
      </p>
    </>
  );
};
