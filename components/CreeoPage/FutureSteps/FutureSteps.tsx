import classes from "./FutureSteps.module.css";

const FutureSteps = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.topic}>Future steps</div>
        <div className={classes.title}>
          I am proud of what I have created, but Creeo is no where near
          finished.
        </div>
        <div className={classes.box}>
          <div className={classes.title}>Project collaboration:</div>
          <div className={classes.text}>
            Foster collaborations between artists. Introduce features that allow
            artists to collaborate on joint projects. This encourages a sense of
            community and facilitates diverse collaborations within the
            platform.
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.title}>Expanded Blockchain Integration:</div>
          <div className={classes.text}>
            Explore the integration of additional blockchain platforms to offer
            creators more options for deploying their NFT collections. Consider
            supporting emerging blockchain technologies that prioritize
            scalability, low transaction fees, and environmental sustainability.{" "}
          </div>
        </div>

        <div className={classes.box}>
          <div className={classes.title}>Continuous Improvement:</div>
          <div className={classes.text}>
            Regularly gather user feedback and conduct usability testing to
            identify areas for improvement. Use this feedback to enhance the
            user experience, address any issues or pain points, and refine the
            website&apos;s features and functionality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSteps;
