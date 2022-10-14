import React from "react";
import styles from "./EmployerCard.module.scss";

const EmployerCard = ({name,profession}) => {
  return (
    <div className={styles.background}>
      <div className={styles.imgbg1}></div>
      <div className={styles.col}>
        <h2>{name}</h2>
        <h4>{profession}</h4>
      </div>
      <div className={styles.checkbtn}>Check out</div>
    </div>
  );
};

export default EmployerCard;
