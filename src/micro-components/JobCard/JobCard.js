import React from "react";
import styles from "./JobCard.module.scss";
import WorkIcon from "@mui/icons-material/Work";

const JobCard = ({ name , number}) => {
  return (
    <div className={styles.background}>
      <div className={styles.imgbg1}>
        <WorkIcon className={styles.icon} />
      </div>
      <div className={styles.col}>
        <h1>{number}</h1>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default JobCard;
