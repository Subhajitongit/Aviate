import React from "react";
import styles from "./NotYet.module.scss";

const NotYet = () => {
  return (
    <div className={styles.body}>
      <div className={styles.construction}></div>
      <div className={styles.main}>This is under construction!</div>
    </div>
  );
};

export default NotYet;
