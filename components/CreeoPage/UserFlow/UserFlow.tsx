import classes from "./UserFlow.module.css";
import userflow from "../../../assets/userflow.png";
import Image from "next/image";

const UserFlow = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Proposed <br />user flow  </div>
          </div>
          <div className={classes.text}>
            Based on research, I analyzed and optimized the user flow to enhance the overall user experience, streamline interactions, and ensure users can <span>accomplish their goals</span> efficiently and with minimal effort.
          </div>
        </div>
        <Image src={userflow} alt="" />
      </div>
    </div>
  )
}

export default UserFlow;