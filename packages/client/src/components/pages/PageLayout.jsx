import { Outlet } from "react-router-dom";
import SideNav from "../common/SideNav";
import styles from "./PageLayout.module.css";
import AppContextProvider from "../../AppContext";
import { useEffect } from "react";

export const PageLayout = () => {
  useEffect(() => {
    fetch("/api/check")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <AppContextProvider>
      <div className={styles.layout}>
        <SideNav />
        <div className={styles["content-wrapper"]}>
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
};
