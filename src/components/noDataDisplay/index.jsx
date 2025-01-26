import React from "react";

import styles from "./NoDataDisplay.module.css";

const NoDataDisplay = () => {
  return (
    <div
      className={`w_full d_flex just_center align_center ${styles.noDataContainer}`}
    >
      <img src="./assets/smile.svg" alt="" />
      <span>No Data</span>
    </div>
  );
};

export default NoDataDisplay;
