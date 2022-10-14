import React from "react";
import styles from "./App.module.scss";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Dashboard from "./components/Dashboard";
import NotYet from "./components/NotYet";
import Jobs from "./components/Jobs";

function App() {
  const [tabs, setTabs] = React.useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.leftBar}>
        <div className={styles.head}>
          <FlightTakeoffIcon className={styles.logo} />
          <h1 className={styles.heading}>Aviate</h1>
        </div>
        <div className={styles.spacing} />
        <div
          className={tabs === 0 ? styles.selected : styles.tab}
          onClick={() => setTabs(0)}
        >
          <DashboardIcon className={styles.option} />
          <h3 className={styles.heading}>Dashboard</h3>
        </div>
        <div
          className={tabs === 1 ? styles.selected : styles.tab}
          onClick={() => setTabs(1)}
        >
          <WorkIcon className={styles.option} />
          <h3 className={styles.heading}>Jobs </h3>
        </div>
        <div
          className={tabs === 2 ? styles.selected : styles.tab}
          onClick={() => setTabs(2)}
        >
          <PeopleAltIcon className={styles.option} />
          <h3 className={styles.heading}>Candidates </h3>
        </div>
        <div
          className={tabs === 3 ? styles.selected : styles.tab}
          onClick={() => setTabs(3)}
        >
          <NotificationsActiveIcon className={styles.option} />
          <h3 className={styles.heading}>Notifications </h3>
        </div>
        <div
          className={tabs === 4 ? styles.selected : styles.tab}
          onClick={() => setTabs(4)}
        >
          <SettingsIcon className={styles.option} />
          <h3 className={styles.heading}>Settings </h3>
        </div>
        <hr />
        <div className={styles.tab}>
          <AccountCircleIcon className={styles.option} />
          <h3 className={styles.heading}>My Account </h3>
        </div>
      </div>
      {tabs === 0 && <Dashboard />}
      {tabs === 1 && <Jobs />}
      {tabs === 2 && <NotYet />}
      {tabs === 3 && <NotYet />}
      {tabs === 4 && <NotYet />}
    </div>
  );
}

export default App;
