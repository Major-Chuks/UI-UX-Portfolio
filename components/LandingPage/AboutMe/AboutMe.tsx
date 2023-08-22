import classes from "./AboutMe.module.css";
import aboutMe from "../../../assets/about-me.png";
import Image from "next/image";
import buchi from "../../../assets/buchi.png";
import X from "../../../assets/x.svg";
import IG from "../../../assets/ig.svg";
import Dribble from "../../../assets/dribble.svg";
import DownloadIcon from "../../../assets/download-icon.svg";

const AboutMe = () => {
  const coreValues = ["Human,", "Creative,", "Collaborative,", "Working next to a developer,", "Good communicator,", "Always learning"];

  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={aboutMe} alt="" />

      <div className={classes.description}>Hi there! I’m Buchi, <span>a product designer</span>, snooker magician,  fashion lover, and a dang skillful soccer player.  </div>

      <div className={classes.details}>
        <Image className={classes.photo} src={buchi} alt="" />
        <div>
          <div className={classes.textContainer}>
            <div>
              <div className={classes.text}>I am a Nigerian-based multidisciplinary Product Designer with 4+ years of design experience. My focus  is on merging strategy, user-centric design, and intuitive visuals to create impactful digital experience. <span>I am passionate about building solution-based products from ideation all the way through to the final execution.</span></div>
              <div className={classes.text}>I was most recently working at <span>Creeo</span>, where I have been responsible for designing the user interface & experience, conducting usability tests, gathered feedback, and iterated on designs to ensure that the final product met the needs and expectation of our users.</div>
            </div>
            <div className={classes.text}>Before Creeo - I was the first design-hire at an NFT project, <span>Bleuwater</span>. I led all of Bleuwater design output. From digital products, to marketing visuals. I have also freelanced for several startups <span>Genadrop</span>, assisting them in developing their initial product offering.</div>
            <div className={classes.text}>Currently on the market for new opportunities. Got a project idea on your mind? Or perhaps you need a creative and devoted product designer for your team? I’m one email away from building with you.</div>
            <div className={classes.text}>I’m always eager to contribute to team success through hard work, attention to details, and excellent organizational skills. Motivated to learn, grow and excel in UX Design.</div>
          </div>

          <div className={classes.linkContainer}>
            <div className={classes.socialLinks}>
              <div className={classes.icon}>
                <X />
              </div>
              <div className={classes.icon}>
                <IG />
              </div>
              <div className={classes.icon}>
                <Dribble />
              </div>
            </div>
            <div className={classes.downloadContainer}>
              <div className={classes.text}>Download my Resume</div>
              <DownloadIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.coreValues}>
        {
          [...Array(2)].map((el, idx) => (
            <div key={idx} className={classes.values}>
              {coreValues.map((value, idx) => (
                <div key={idx} className={classes.value}>{value}</div>
              ))}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AboutMe;