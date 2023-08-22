import classes from "./OtherScreens.module.css";
import otherScreensImage from "../../../assets/other-screens.png";
import otherScreens1 from "../../../assets/other-screens-1.png";
import otherScreens2 from "../../../assets/other-screens-2.png";
import Image from "next/image";

const OtherScreens = () => {
  return (
    <div className={classes.container}>
      <Image src={otherScreensImage} alt="" />
      <Image src={otherScreens1} alt="" />
      <Image src={otherScreens2} alt="" />
    </div>
  );
};

export default OtherScreens;
