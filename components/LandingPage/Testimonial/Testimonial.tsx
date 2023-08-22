import classes from "./Testimonial.module.css";
import testimonial from "../../../assets/testimonial.png";
import Image from "next/image";
import Love from "../../../assets/love.svg";

const Testimonial = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={testimonial} alt="" />
      <div className={classes.description}>These guys trust your project will be in good hands, you should too.</div>
      <div className={classes.section1}>
        <div className={classes.left}>
          <div className={classes.loveContainer}>
            <Love />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.number}>01</div>
          <div className={classes.name}>Micheal Adewale</div>
          <div className={classes.role}>Product designer, Genadrop</div>
          <div className={classes.review}>Buchi is one of the brightest minds I have ever had the privilege to work with. He is extremely creative and his ability to consistently produce better work has always impressed me. He is an excellent Designer and will make an excellent addition to any team.</div>
        </div>
      </div>

      <div className={classes.section2}>
        <div className={classes.left}>
          <div className={classes.number}>02</div>
          <div className={classes.name}>Micheal Adewale</div>
          <div className={classes.role}>Product designer, Genadrop</div>
          <div className={classes.review}>Buchi is one of the brightest minds I have ever had the privilege to work with. He is extremely creative and his ability to consistently produce better work has always impressed me. He is an excellent Designer and will make an excellent addition to any team.</div>
        </div>
        <div className={classes.right}>
          <div className={classes.number}>03</div>
          <div className={classes.name}>Micheal Adewale</div>
          <div className={classes.role}>Product designer, Genadrop</div>
          <div className={classes.review}>Buchi is one of the brightest minds I have ever had the privilege to work with. He is extremely creative and his ability to consistently produce better work has always impressed me. He is an excellent Designer and will make an excellent addition to any team.</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;