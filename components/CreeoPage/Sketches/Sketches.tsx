import Image from "next/image";
import classes from "./Sketches.module.css";
import sketchImage from "../../../assets/sketches.png";
import sketch1 from "../../../assets/sketch1.png";
import sketch2 from "../../../assets/sketch2.png";
import sketch3 from "../../../assets/sketch3.png";

const Sketches = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={sketchImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Sketches </div>
          </div>
          <div className={classes.text}>
            Entering the design phase, I kept in mind all the information I
            gathered, including personas, their challenges, and the proposed
            user flows. I started visualizing ideas by making rough{" "}
            <span>sketches</span>. I sought feedback from my peers to evaluate
            the usability of the concepts before starting high-fidelity design.
          </div>
        </div>
        <div className={classes.sketches}>
          <Image src={sketch1} alt="" />
          <Image src={sketch2} alt="" />
          <Image src={sketch3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sketches;
