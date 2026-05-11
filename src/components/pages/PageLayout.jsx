import { Outlet } from "react-router-dom";
import SideNav from "../common/SideNav";
import styles from "./PageLayout.module.css";
import AppContextProvider from "../../AppContext";

export const PageLayout = () => {
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
