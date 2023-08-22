import classes from "./Prototype.module.css";
import prototypeImage from "../../../assets/prototype.png";
import Image from "next/image";

const Prototype = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={prototypeImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Proposed <br />user flow  </div>
          </div>
          <div className={classes.text}>
            Based on research, I analyzed and optimized the user flow to enhance the overall user experience, streamline interactions, and ensure users can <span>accomplish their goals</span> efficiently and with minimal effort.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prototype;