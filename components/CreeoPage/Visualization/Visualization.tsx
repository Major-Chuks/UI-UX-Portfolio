import classes from "./Visualization.module.css";
import VisualizationImage from "../../../assets/visualization.png";
import Image from "next/image";
import creeoVisual from "../../../assets/creeo-visual.png";
import processMap from "../../../assets/process-map.png";
import process from "../../../assets/process.png";
import ideas from "../../../assets/ideas.png";
import stickyNotes from "../../../assets/notes.png";

const Visualization = () => {
  return (
    <div className={classes.container}>
      <Image className={classes.heading} src={VisualizationImage} alt="" />
      <Image className={classes.image} src={creeoVisual} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              The <br />
              Challenge{" "}
            </div>
          </div>
          <div className={classes.text}>
            NFT creators find it difficult hand-drawing{" "}
            <span>thousands of unique NFT</span> artworks for their projects.
            <span>Non-technical</span> artists find it daunting to create,
            deploy and manage their NFT smart contracts. Creators often rely on
            the collaboration of a software developer to{" "}
            <span>generate metadata</span> which slows down the creative
            process.
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage2}`}>
          <div className={classes.left}>
            <div className={classes.topic}>
              The <br />
              Goal{" "}
            </div>
          </div>
          <div className={classes.textBox}>
            <div className={classes.text}>
              NFT creators find it difficult hand-drawing{" "}
              <span>thousands of unique NFT</span> artworks for their projects.
              <span>Non-technical</span> artists find it daunting to create,
              deploy and manage their NFT smart contracts. Creators often rely
              on the collaboration of a software developer to{" "}
              <span>generate metadata</span> which slows down the creative
              process.
            </div>
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage3}`}>
          <div className={classes.left}>
            <div className={classes.topic}>
              The <br />
              Process{" "}
            </div>
          </div>
          <div className={classes.processMap}>
            <Image src={processMap} alt="" />
          </div>
        </div>

        <div className={`${classes.stage} ${classes.stage4}`}>
          <div className={classes.left}>
            <Image src={process} alt="" />
          </div>
          <div className={classes.right}>
            <div className={classes.text}>
              <div className={classes.title}>
                User Research objectives for Creeo web application.
              </div>
              <ul>
                <li>
                  Understand the processes and emotions that people experience
                  around the problem Creeo is trying to solve
                </li>
                <li>
                  Identify common user behaviours and experiences with tasks
                  that Creeo is trying to solve
                </li>
                <li>
                  Understand user needs and frustrations as they relate to Art
                  and NFT creation
                </li>
                <li>
                  Identify and understand scenarios that make users want to use
                  Creeo
                </li>
                <li>
                  Understand what culminates in a happy user experience for
                  Creeo users
                </li>
              </ul>
            </div>

            <div className={classes.text}>
              <div className={classes.title}>User Research summery</div>I needed
              to understand how artists create and deploy these thousands of PFP
              artworks as NFTs, and what their creative process looks like for
              such quantity of art.So, I reached out to four random NFT artists
              on twitter with some questions and found out that most of their
              processes were highly <span>repetitive</span>.
            </div>
            <br />
            <div className={classes.text}>
              I didn’t stop there, I conducted proper <span>user research</span>{" "}
              this time including more artists and NFT creators, I also sent out{" "}
              <span>questionnaires</span> to help me uncover more user pain
              points.
            </div>
            <div className={classes.link}>Link to full user Research here.</div>

            <div className={classes.designImages}>
              <Image src={stickyNotes} alt="" />
              <Image src={ideas} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
