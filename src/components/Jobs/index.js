import React from "react";
import OpportunityCard from "../../micro-components/OpportunityCard/OpportunityCard";
import styles from "./Jobs.module.scss";

const Jobs = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.heading}>Available Opportunities</h2>
      <OpportunityCard
        role="Mobile App Developer"
        company="Entro Labs"
        location="Hyderabad, India"
        skill1="Flutter"
        skill2="Django"
        stipend="$1k-1.5k"
        duration="3 months"
        offer="7-12 LPA"
      />
      <OpportunityCard
        role="Front End Developer"
        company="Aviate Jobs"
        location="Goa, India"
        skill1="ReactJs"
        skill2="NextJs"
        stipend="$1k-1.5k"
        duration="3 months"
        offer="7-12 LPA"
      />
      <OpportunityCard
        role="Backend Developer"
        company="Grafite Labs"
        location="Bangalore, India"
        skill1="NodeJs"
        skill2="Express"
        stipend="$1k-1.5k"
        duration="3 months"
        offer="9-12 LPA"
      />
    </div>
  );
};

export default Jobs;
