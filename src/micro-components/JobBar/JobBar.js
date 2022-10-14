import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import styles from "./JobBar.module.scss";

const JobBar = ({ title, applicants, status, deadline }) => {
  return (
    <div className={styles.jobbar}>
      <h5>{title}</h5>
      <div className={styles.appGol}>
        <div className={styles.gol}></div>
        <div className={styles.gol}></div>
        <div className={styles.gol}></div>
        <div className={styles.gol}></div>
        +{applicants} Applicants
      </div>
      <div className={status === "Active" ? styles.tag : styles.tagStop}>
        <h5>{status}</h5>
      </div>
      <h5>{deadline}</h5>
      <div className={styles.actions}>
        <div className={styles.btn}>
          <ShareIcon />
        </div>
        <div className={styles.btn}>
          <VisibilityIcon />
        </div>
        <div className={styles.btn}>
          <TextSnippetIcon />
        </div>
      </div>
    </div>
  );
};

export default JobBar;
