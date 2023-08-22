
import Image from "next/image";
import classes from "./StyleGuide.module.css";
import styleGuideImage from "../../../assets/style-guide.png";
import styleGuideDesign from "../../../assets/style-guide-design.png";

const StyleGuide = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={styleGuideImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Digital <br />Wireframes </div>
          </div>
          <div className={classes.text}>
            Digital wireframes provides more accurate depictions of the interface’s layout without going into much details. They show a glimpse of how the final product will look          </div>
        </div>
      </div>
      <Image src={styleGuideDesign} alt="" />
    </div>
  )
}

export default StyleGuide