import Image from "../image";
import styles from "./modal.module.css";

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className={`${styles.modal} d_flex`} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Image
          src="/assets/sideBar/cancel.svg"
          alt="close"
          imgStyle={styles.cancel}
          containerStyle={`w_full just_end d_flex ${styles.close}`}
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
