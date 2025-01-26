import React from "react";
import styles from "./menu.module.css";

const MenuList = ({ menuItems, status }) => {
  return (
    <div className={`${status ? styles.animated : ""} ${styles.menuList}`}>
      {status && menuItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.menuItem} d_flex just_between align_center`}
        >
          <span>{item.label}</span>
          <img src="./assets/action.svg" alt="" />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
