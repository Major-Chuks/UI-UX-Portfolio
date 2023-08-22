import Image from "next/image";
import classes from "./HiFidelity.module.css";
import highFidelityImage from "../../../assets/hi-fidelity.png";
import fidelity1 from "../../../assets/fidelity-1.png";
import fidelity2 from "../../../assets/fidelity-2.png";
import fidelity3 from "../../../assets/fidelity-3.png";
import fidelity4 from "../../../assets/fidelity-4.png";
import fidelity5 from "../../../assets/fidelity-5.png";
import fidelity6 from "../../../assets/fidelity-6.png";
import fidelityBg from "../../../assets/fidelity-bg.png";
import PlayIcon from "../../../assets/play.svg";

const HiFidelity = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={highFidelityImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              Hi-fidelity <br />
              Designs
            </div>
          </div>
          <div className={classes.text}>
            During this phase, I designed with a high level of detail and
            realism ensuring visual consistency and optimizing the interface and
            interactions to support the core functionalities. As an additional
            challenge, I decided to design the web app to have a look and feel
            of a native application that users are already familiar with.{" "}
          </div>
        </div>
        <div className={classes.fidelityContainer}>
          <div className={`${classes.fidelity} ${classes._1}`}>
            <Image src={fidelity1} alt="" />
            <div className={classes.textContainer}>
              <div className={classes.title}>
                Making it easy to generate NFTs
              </div>
              <div className={classes.text}>
                Helping new users get familiar with the UI by providing virtual
                tour, and resources.
              </div>
              <div className={classes.playContainer}>
                <PlayIcon />
                <div>Play</div>
              </div>
            </div>
            <div className={classes.offset}></div>
          </div>
          <div className={`${classes.fidelity} ${classes._2}`}>
            <div className={classes.textContainer}>
              <div className={classes.title}>One click files upload</div>
              <div className={classes.text}>
                Users can upload all their art layers on the app with one single
                click
              </div>
              <div className={classes.playContainer}>
                <PlayIcon />
                <div>Play</div>
              </div>
            </div>
            <Image src={fidelity2} alt="" />
          </div>
          <div className={classes.wrapper}>
            <div className={`${classes.fidelity} ${classes._3}`}>
              <div className={classes.textContainer}>
                <div className={classes.title}>Search and filter traits</div>
                <div className={classes.text}>
                  Search and filter to help users select and filter through
                  traits easily.
                </div>
                <div className={classes.playContainer}>
                  <PlayIcon />
                  <div>Play</div>
                </div>
              </div>
              <Image src={fidelity3} alt="" />
            </div>
            <Image className={classes.fidelityBg} src={fidelityBg} alt="" />
          </div>
        </div>
        <div className={classes.fidelity_2}>
          <div className={classes.innerF}>
            <Image src={fidelity4} alt="" />
            <div className={classes.text}>
              Rules to help users seamlessly control what traits can be combined
              with another and how often.
            </div>
          </div>
          <div className={classes.innerF}>
            <Image src={fidelity5} alt="" />
            <div className={classes.text}>
              One click to start contract deployment to the blockchain after
              generating artworks.
            </div>
          </div>
        </div>
        <div className={classes.fidelity_3}>
          <Image src={fidelity6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HiFidelity;
