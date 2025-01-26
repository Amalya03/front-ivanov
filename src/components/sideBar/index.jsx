import Main from "./main";
import Header from "./header";
import Backdrop from "../backdrop";
import styles from "./sideBar.module.css";

const SideBar = ({ showMenu, onHide }) => {
  return (
    <>
      <div
        className={`${styles.sidebar} ${showMenu ? styles.sidebarOpen : ""}`}
      >
        <Header onHide={onHide} />
        <Main />
      </div>
      <Backdrop onHide={onHide} status={showMenu}/>
    </>
  );
};

export default SideBar;
