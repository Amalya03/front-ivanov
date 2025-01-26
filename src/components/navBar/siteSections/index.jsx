import { useState } from "react";
import { siteSections } from "../../../helpers/utils/links";
import Link from "../../link";
import MenuList from "../../menu";
import styles from "./navLIniks.module.css";

const SiteSections = () => {
  const [selectedItem, setSelectedItem] = useState({
    index: null,
    status: false,
  });

  return (
    <div className={`${styles.links} d_flex just_center`}>
      {siteSections.map((item, index) => (
        <Link
          item={item}
          key={`${item}_${index}`}
          onClick={() =>
            setSelectedItem({ index, status: !selectedItem.status })
          }
        />
      ))}
      {selectedItem.index && siteSections[selectedItem.index].links !== "" && (
        <MenuList
          menuItems={siteSections[selectedItem.index].links}
          status={selectedItem.status}
        />
      )}
    </div>
  );
};

export default SiteSections;
