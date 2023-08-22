
import Image from "next/image";
import classes from "./DigitalWireframe.module.css";
import digitalWireframeImage from "../../../assets/digital-wireframe.png";
import wireframeDesign from "../../../assets/wireframe-design.png";

const DigitalWireframe = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={digitalWireframeImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>Digital <br />Wireframes </div>
          </div>
          <div className={classes.text}>
            Digital wireframes provides more accurate depictions of the interface’s layout without going into much details. They show a glimpse of how the final product will look          </div>
        </div>
      </div>
      <Image src={wireframeDesign} alt="" />
    </div>
  )
}

export default DigitalWireframe