import Image from "../image";
import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import SearchInput from "./searchInput";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../features/dataSlice";
import { getData } from "../../features/getData";

const SearchPanel = ({ status, onHide }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const data = useSelector((state) => state.data.data);

  const filteredData = () => {
    if (text === "") {
      dispatch(getData());
    } else {
      const filteredData = data.filter(
        (item) =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.text.toLowerCase().includes(text.toLowerCase())
      );
      dispatch(filterData(filteredData));
    }
    onHide();
  };

  useEffect(() => {
    if (status) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [status]);

  return (
    <div
      className={`${status ? styles.height_full : ""} ${styles.overlay} d_flex`}
      onClick={onHide}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${status ? styles.top_200 : styles.top_0} ${
          styles.search
        } ${styles.animate}`}
      >
        <Image
          src="./assets/SideBar/close.svg"
          alt="close"
          containerStyle={`${styles.close} d_flex align_center just_end`}
          onClick={onHide}
        />
        <SearchInput
          filteredData={filteredData}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
