import React from "react";
import styles from "./Dashboard.module.scss";
import TextField from "@mui/material/TextField";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import JobCard from "../../micro-components/JobCard/JobCard";
import EmployerCard from "../../micro-components/EmployerCard/EmployerCard";
import JobBar from "../../micro-components/JobBar/JobBar";

const Dashboard = () => {
  return (
    <div className={styles.content}>
      <div className={styles.bar}>
        <Button variant="contained" className={styles.btn}>
          View company
        </Button>
        <TextField
          id="standard-size-normal"
          placeholder="Search.."
          className={styles.input}
        />
        <div className={styles.iconbg}>
          <NotificationsIcon className={styles.option} />
        </div>
        <div className={styles.userbg}>
          <h4>Subhajit</h4>
          <ArrowDropDownIcon className={styles.option} />
        </div>
      </div>

      <div className={styles.jobrow}>
        <JobCard name="Active" number="15" />
        <JobCard name="Applied" number="35" />
        <JobCard name="Draft" number="3" />
        <JobCard name="Rejected" number="12" />
      </div>

      <h2 className={styles.titleheading}>Recent Employers</h2>
      <div className={styles.erow}>
        <EmployerCard name="Aayush" profession="Aviate Jobs" />
        <EmployerCard name="Zakir" profession="AIB Marketing" />
        <EmployerCard name="Aadithya" profession="Firestone Corp." />
        <EmployerCard name="Aakarsh" profession="Gradure Inc." />
        <EmployerCard name="Raj" profession="Shamani Corp." />
      </div>

      <h2 className={styles.titleheading}>Recent Activity</h2>
      <div className={styles.erow}>
        <h4 className={styles.rowhead}>Job Title</h4>
        <h4 className={styles.rowhead}>Applicants</h4>
        <h4 className={styles.rowhead}>Status</h4>
        <h4 className={styles.rowhead}>Deadline</h4>
        <h4 className={styles.rowhead}>Actions</h4>
      </div>

      <JobBar
        title="Software Engineer"
        applicants="10"
        status="Active"
        deadline="20th November, 2022"
      />
      <JobBar
        title="Consultant Intern"
        applicants="24"
        status="Paused"
        deadline="22th November, 2022"
      />
      <JobBar
        title="Business Manager"
        applicants="40"
        status="Active"
        deadline="12th November, 2022"
      />
      <JobBar
        title="Graphic Designer"
        applicants="32"
        status="Active"
        deadline="2nd November, 2022"
      />
    </div>
  );
};

export default Dashboard;
