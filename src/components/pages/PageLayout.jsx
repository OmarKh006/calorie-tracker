import { Outlet } from "react-router-dom";
import SideNav from "../common/SideNav";
import styles from "./PageLayout.module.css";

export const PageLayout = () => {
  return (
    <div className={styles.layout}>
      <SideNav />
      <div className={styles["content-wrapper"]}>
        <Outlet />
      </div>
    </div>
  );
};
