import React from "react";
import styles from "./info.module.css";

const Info = ({ item }) => {
  const { tags, title, date, views, text, autor } = item;

  return (
    <div className={`${styles.textContainer} d_flex just_start flex_wrap`}>
      <span className={`${styles.tags}`}>{tags}</span>
      <span className={styles.title}>{title}</span>
      <span className={`${styles.date} d_flex align_center`}>
        {autor}
        <span className="d_flex align_center">
          {" "}
          <div /> {date} <div /> {views} Views{" "}
        </span>
      </span>
      <span className={styles.description}>{text}</span>
    </div>
  );
};

export default Info;
