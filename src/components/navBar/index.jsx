import styles from "./navBar.module.css";
import Header from "./header";
import SiteSections from "./siteSections";
import { useEffect, useState } from "react";
import { handleScroll } from "../../helpers/utils/scroll";

const NavBar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      handleScroll(setScrollingDown, setScrollY)
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll(setScrollingDown, setScrollY)
      );
    };
  }, []);

  return (
    <nav
      className={`${styles.navBar} ${scrollingDown ? styles.hide : ""} ${
        scrollY > 0 ? styles.fixed : ""
      }`}
    >
      <Header />
      <SiteSections />
    </nav>
  );
};

export default NavBar;
