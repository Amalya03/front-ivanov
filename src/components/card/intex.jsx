import Info from "./info";
import Image from "../image";
import styles from "./card.module.css";

const Card = ({ item, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Image src={item.img} srcset={item.img_2x} alt={"card_image"} />
      <Info item={item} />
    </div>
  );
};

export default Card;
