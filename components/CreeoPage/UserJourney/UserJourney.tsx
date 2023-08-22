import Image from "next/image";
import classes from "./UserJourney.module.css";
import userJourneyImage from "../../../assets/user-journey.png";

const UserJourney = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={`${classes.stage} ${classes.stage3}`}>
          <div className={classes.left}>
            <div className={classes.topic}>User <br /> Journey  </div>
          </div>
          <div className={classes.text}>
            A user journey through a more or less positive route for users generating NFT art collection
          </div>
        </div>
        <Image src={userJourneyImage} alt="" />
        <div className={classes.link}>Click to expand image</div>
      </div>
    </div>
  )
}

export default UserJourney;