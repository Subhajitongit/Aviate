import React from "react";
import styles from "./OpportunityCard.module.scss";

const OpportunityCard = ({
  role,
  company,
  location,
  skill1,
  skill2,
  stipend,
  duration,
  offer,
}) => {
  return (
    <div className={styles.oppcard}>
      <div className={styles.top}>
        <div className={styles.gola}></div>
        <div className={styles.title}>
          <h3>{role}</h3>
          <h5>
            {company} | {location}
          </h5>
        </div>
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>{skill1}</div>
        <div className={styles.tag}>{skill2}</div>
      </div>
      <div className={styles.details}>
        <div className={styles.stipend}>
          <h4>Stipend</h4>
          <h3>{stipend}</h3>
        </div>
        <div className={styles.duration}>
          <h4>Duration</h4>
          <h3>{duration}</h3>
        </div>
        <div className={styles.start}>
          <h4>Start Date</h4>
          <h3>Immediate</h3>
        </div>
        <div className={styles.offer}>
          <h4>Job Offer</h4>
          <h3>{offer}</h3>
        </div>
        <div className={styles.location}>
          <h4>Location</h4>
          <h3>{location}</h3>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.view}>View Details</div>
        <div className={styles.apply}>Apply Now</div>
      </div>
    </div>
  );
};

export default OpportunityCard;
