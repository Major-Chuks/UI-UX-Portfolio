import classes from "./AboutProject.module.css";
import ViewArrow from "../../../assets/arrow-view.svg";

const AboutProject = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>About the project </div>
      <div className={classes.divider}>
        <div className={classes.left}>
          <div className={classes.description}>Designing a No-code toolkit that helps NFT artists create and  deploy unique generative NFT collections easily. </div>
          <div>
            <div className={classes.text}>
              Creeo is an NFT toolkit that enables creators to <span>generate unique NFT collections</span> by uploading multiple layers of art, which are then dynamically matched by the system. Additionally, Creeo enables creators to add traits and attributes to their hand-drawn artwork and conveniently <span>download metadata ready for minting</span>. Creeo equally empowers creators to <span>effortlessly deploy and manage NFT drops</span> via a user-friendly admin dashboard.
            </div>
            <div className={classes.text}>
              As a Product Designer at Creeo, my task was to lead and execute the UX strategy, design user-friendly web experiences, develop a strong brand identity, intuitive visuals, and account for usability through conducting usability tests, and making research-based iterations.
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.topic}>Role </div>
          <div>User Research</div>
          <div>Ui/UX Design</div>
          <div>Motion graphics</div>
          <div>Modelled 3D assets</div>
          <div>Illustrations</div>
          <div className={classes.topic}>Client </div>
          <div>Creeo Co.</div>
          <div className={classes.topic}>Timeline</div>
          <div>May - August 2022</div>
        </div>
      </div>
      <div className={classes.viewBtn}>
        <div>Visit website</div>
        <ViewArrow />
      </div>
    </div>
  )
}

export default AboutProject;