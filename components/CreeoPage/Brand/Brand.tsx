import Image from "next/image";
import classes from "./Brand.module.css";
import brand1 from "../../../assets/brand-1.png";
import brand2 from "../../../assets/brand-2.png";
import brand3 from "../../../assets/brand-3.png";
import brand4 from "../../../assets/brand-4.png";
import brand5 from "../../../assets/brand-5.png";
import brand6 from "../../../assets/brand-6.png";
import brand7 from "../../../assets/brand-7.png";

const Brand = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              Brand & <br /> 3D design
            </div>
          </div>
          <div className={classes.text}>
            Digital wireframes provides more accurate depictions of the
            interface’s layout without going into much details. They show a
            glimpse of how the final product will look{" "}
          </div>
        </div>
        <div className={classes.brandA}>
          <Image src={brand1} alt="" />
          <Image src={brand2} alt="" />
          <Image src={brand3} alt="" />
          <Image src={brand4} alt="" />
          <Image src={brand5} alt="" />
        </div>
        <div className={classes.brandB}>
          <Image src={brand6} alt="" />
          <Image src={brand7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
