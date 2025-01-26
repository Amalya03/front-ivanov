import React from "react";
import styles from "./backdrop.module.css";

const Backdrop = ({ status, onHide }) => {
  return (
    <div
      className={`${styles.overlay} ${status ? styles.overlayVisible : ""}`}
      onClick={onHide}
    ></div>
  );
};

export default Backdrop;
