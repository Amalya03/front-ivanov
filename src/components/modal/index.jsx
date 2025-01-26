import Image from "../image";
import styles from "./modal.module.css";

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={`${styles.modal} d_flex`} onClick={closeModal}>
      <div className={`${styles.modalContent} just_center d_flex flex_wrap`} onClick={(e) => e.stopPropagation()}>
        <Image
          src="./assets/sideBar/close.svg"
          alt="close"
          imgStyle={styles.close}
          containerStyle={`w_full just_end d_flex ${styles.close}`}
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
