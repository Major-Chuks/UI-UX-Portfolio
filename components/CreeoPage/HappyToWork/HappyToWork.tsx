import classes from "./HappyToWork.module.css";
import Envelop from "../../../assets/envelop.svg";

const HappyToWork = () => {
  return (
    <div className={classes.container}>
      <div>Happy to work with you</div>
      <div>
        I’m one email away. so, go ahead, click and drop me a message. Let’s
        build that awesome project together!
      </div>
      <div>👇</div>

      <div>
        <div>
          <Envelop />
        </div>
        <div>
          <div>Buchi@design.me</div>
          <div>Copy e-mail</div>
        </div>
      </div>
    </div>
  );
};

export default HappyToWork;
