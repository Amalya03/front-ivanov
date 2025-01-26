import React from "react";
import styles from "./searchInput.module.css"

const SearchInput = ({onChange, filteredData}) => {
    
  return (
    <div className={`w_full ${styles.padding_50}`}>
      <img src="./assets/logo.svg" alt="logo_search" />
      <div className="w_full">
        <input
          className={styles.input}
          placeholder="Search..."
          onChange={onChange}
        />
        <img
          src="./assets/navBar/searchIcon.svg"
          alt="logo_search"
          onClick={filteredData}
        />
      </div>
    </div>
  );
};

export default SearchInput;
