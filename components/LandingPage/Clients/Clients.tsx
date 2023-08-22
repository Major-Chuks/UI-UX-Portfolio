import classes from "./Clients.module.css";
import happyClients from "../../../assets/happy-clients.png";
import Image from "next/image";
import Creeo from "../../../assets/creeo.svg";
import Bleuwater from "../../../assets/bleuwater.svg";
import Upwork from "../../../assets/upwork.svg";
import Genadrop from "../../../assets/genadrop.svg";
import workspace from "../../../assets/workspace.png";

const Clients = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={happyClients} alt="" />
      <div className={classes.description}>
        <div>
          I have worked for different startups, helping them launch their MVPs
        </div>
      </div>
      <div className={classes.clientContainer}>
        <div className={classes.client}>
          <Creeo />
        </div>
        <div className={classes.client}>
          <Bleuwater />
        </div>
        <div className={classes.client}>
          <Genadrop />
        </div>
        <div className={classes.client}>
          <Upwork />
        </div>
      </div>
      <div className={classes.workspace}>
        <Image src={workspace} alt="" />
      </div>
      <div className={classes.sticky}>
        Based in Nigeria, Available worldwide
      </div>
      <div className={classes.salutation}>
        <div className={classes.text}>
          Happy to work with you, send a message
        </div>
        <div className={classes.greeting}>Hello@Buchidesign.me</div>
      </div>
    </div>
  );
};

export default Clients;
