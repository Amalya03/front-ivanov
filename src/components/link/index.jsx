import React from "react";
import styles from "./link.module.css";

const Link = ({ item, className, onClick }) => {
  return (
    <div className={`${styles.link} ${className} d_flex align_center`} onClick={onClick}>
      <span className={styles.text}>{item.name}</span>
      <img src="./assets/navBar/menuItem.svg" alt="menu" />
    </div>
  );
};

export default Link;
