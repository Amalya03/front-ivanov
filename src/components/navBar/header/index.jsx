import { useState } from "react";
import styles from "./header.module.css";
import SideBar from "../../sideBar";
import Search from "../../search";
import Image from "../../image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScrollAndMenu = () => {
    window.scrollTo(0, 0);
    setShowMenu(true);
  };

  return (
    <>
      <Search
        status={showSearch}
        onHide={() => {
          setShowSearch(false);
        }}
      />
      <div className={`${styles.logoSection} d_flex`}>
        <Image
          src="/assets/navBar/menu.svg"
          imgStyle={styles.menu}
          alt="logo"
          onClick={handleScrollAndMenu}
        />
        <div className={styles.logo}>
          <img src={"/assets/logo.svg"} alt="logo" />
        </div>
        <img
          src={"/assets/navBar/searchIcon.svg"}
          alt="logo"
          onClick={() => setShowSearch(true)}
        />
      </div>
      <SideBar onHide={() => setShowMenu(false)} showMenu={showMenu} />
    </>
  );
};

export default Header;
