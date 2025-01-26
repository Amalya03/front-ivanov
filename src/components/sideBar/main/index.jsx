import React from "react";
import Link from "../../link";
import styles from "./main.module.css";
import { siteSections } from "../../../helpers/utils/links";

const Main = () => {
  return (
    <div className={`flex_wrap d_flex just_center`}>
      {siteSections.map((item, index) => (
        <Link item={item} key={`${item}_${index}`} className={styles.item} />
      ))}
    </div>
  );
};

export default Main;
