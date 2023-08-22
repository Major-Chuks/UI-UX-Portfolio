import classes from "./Prototype.module.css";
import prototypeImage from "../../../assets/prototype.png";
import Image from "next/image";
import prototype1 from "../../../assets/prototype-1.png";

const Prototype = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={prototypeImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.prototype1}>
          <div className={classes.left}>
            <div className={classes.topic}>
              Proposed <br />
              user flow{" "}
            </div>
            <div className={classes.text}>
              Here, I used Adobe after effects to create micro animations for
              some illustrations I designed. This was intended to give the
              entire landing page more character and vibe.
            </div>
          </div>
          <Image src={prototype1} alt="" />
        </div>
        <div className={classes.prototype2}>
          <div className={classes.left}>
            <div className={classes.topic}>
              Interactive <br />
              prototype{" "}
            </div>
            <div className={classes.text}>
              Here I completed the prototype for the core functionality and have
              users test and give feedback. I also made changes based on user
              insights and feedback.{" "}
            </div>
          </div>
          <div className={classes.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;
