import React from "react";
import Image from "../../image";
import styles from "./header.module.css";

const Header = ({ onHide }) => {
  return (
    <div className={`${styles.header} d_flex align_center just_around`}>
      <img src={"/assets/logo.svg"} alt="logo" className={styles.menu} />
      <Image
        src="/assets/sideBar/cancel.svg"
        alt="close"
        imgStyle={styles.cancel}
        onClick={onHide}
      />
    </div>
  );
};

export default Header;
