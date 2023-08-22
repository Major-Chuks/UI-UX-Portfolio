import classes from "./Footer.module.css";
import Arrow from "../../../assets/arrow-top.svg";
import Love from "../../../assets/love-white.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.wrapper}>
          <div className={classes.letsConnect}>Let’s connect</div>
          <div className={classes.socialLinks}>
            <div className={classes.link}>Instagram</div>
            <div className={classes.link}>Dribble</div>
            <div className={classes.link}>Twitter-X</div>
          </div>
        </div>

        <div className={classes.back}>
          <div>Back to top</div>
          <Arrow />
        </div>
      </div>
      <div className={classes.bottom}>
        <div>
          <span>Designed with</span> <Love /> <span>by</span>{" "}
          <span className={classes.name}>Buchi</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
