import React from "react";
import styles from "./MyModal.module.css";
const MyModal = ({ children, toggleModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.myModal__content}>
        <form action="">{children}</form>

        <button
          className={styles.button}
          onClick={() => {
            toggleModal(false);
          }}
        >
          Confirm
        </button>
        <button
          className={styles.button}
          onClick={() => {
            toggleModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default MyModal;
