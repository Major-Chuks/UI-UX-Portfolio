import classes from "./Navbar.module.css";
import StatusIcon from "../../../assets/StatusIcon.svg";
import avatar from "../../../assets/buchi-avatar.png";
import Image from "next/image";
import { useState } from "react";

type ActiveNav = "Work" | "Playground" | "About" | "Contact me"

export function Navbar() {
  const [activeNav, setActiveNav] = useState<ActiveNav>("Work")
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <div className={classes.avatar}>
          <Image src={avatar} alt="" />
        </div>
        <div className={classes.statusContainer}>
          <div className={classes.status}>
            <span>Open to new roles</span>
            <StatusIcon />
          </div>
          <div className={classes.timezone}>Timezone: <span>GMT +1</span> | 09:50:16 PM</div>
        </div>
      </div>


      <div className={classes.navContainer}>
        <div className={classes.nav}>
          <div onClick={() => setActiveNav("Work")} className={`${classes.navItem} ${activeNav === "Work" && classes.active}`}>Work</div>
          <div onClick={() => setActiveNav("Playground")} className={`${classes.navItem} ${activeNav === "Playground" && classes.active}`}>Playground</div>
          <div onClick={() => setActiveNav("About")} className={`${classes.navItem} ${activeNav === "About" && classes.active}`}>About</div>
          <div onClick={() => setActiveNav("Contact me")} className={`${classes.navItem} ${activeNav === "Contact me" && classes.active}`}>Contact me</div>
        </div>
      </div>
    </div>
  )
}