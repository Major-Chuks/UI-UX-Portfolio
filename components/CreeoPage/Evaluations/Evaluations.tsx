import Image from "next/image";
import classes from "./Evaluations.module.css";
import before from "../../../assets/before.png";
import after from "../../../assets/after.png";

const Evaluations = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.topic}>Evaluation</div>
        <div className={classes.text}>
          One of the most frequent operations in Creeo when generating artwork
          is user inputting a desired amount of artwork to generate. During the
          evaluations, I was observed that the user sometimes inputs an amount
          to generate larger than the available combinations, and often gets a
          warning message when it happens.
        </div>
        <br />
        <div className={classes.text}>
          Therefore, my original design was not supporting this use case because
          there was no visual representation of how much artwork a user can
          generate based off the total combination of the individual art layers
          uploaded. My solution was to place the available combination next to
          the generate amount input, that way users can see the number of
          possible combination to generate from.
        </div>
        <div className={classes.evaluations}>
          <div className={classes.evaluation}>
            <div className={classes.title}>Before</div>
            <Image src={before} alt="" />
          </div>
          <div className={classes.evaluation}>
            <div className={classes.title}>After</div>
            <Image src={after} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
