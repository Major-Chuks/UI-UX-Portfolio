import classes from "./Header.module.css";

export function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.mainText}>Hi, I’m Buchi - a skilled</div>
      <div className={`${classes.mainText} ${classes.accent}`}>UX Designer</div>
      <div className={classes.description}>
        Helping teams design functional, appealing, and user-centric web and
        mobile apps that solve complex user problems, one thoughtful pixel at a
        time.{" "}
      </div>
      <div className={classes.socialLinks}>
        {[...Array(3)].map((el, idx) => (
          <div key={idx} className={classes.link}>
            <div className={classes.textContainer}>
              <div className={classes.text}>icon text</div>
            </div>
            <div className={classes.iconContainer}>
              <div className={classes.icon}></div>
            </div>
          </div>
        ))}
        <div className={classes.line}></div>
        <div className={classes.knob}></div>
      </div>
    </div>
  );
}
