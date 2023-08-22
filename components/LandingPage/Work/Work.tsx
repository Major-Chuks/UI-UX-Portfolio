import classes from "./Work.module.css";
import featuredWork from "../../../assets/featured-works.png";
import Image from "next/image";
import creeo from "../../../assets/creeo.png";
import commehub from "../../../assets/commehub.png"
import ProjectPage from "../Project/Project";

export interface Project {
  image: any;
  name: string;
  description: string;
  date: string;
  link: string;
}

const projects: Project[] = [
  {
    image: creeo,
    name: "Creeo.",
    description: "Helping NFT creators Generate art, and deploy NFTs",
    date: "2023",
    link: "/projects/creeo"
  },
  {
    image: commehub,
    name: "Commehub.",
    description: "Helping small businesses source and group purchase  goods",
    date: "2023",
    link: "/projects/commehub"
  }
]

export function Work() {
  return (
    <div className={classes.container}>
      <div className={classes.pointer}>
        <div className={classes.line}>
          <div className={classes.indicator}></div>
        </div>
        <div className={classes.text}>
          <div>Featured works</div>
          <div className={classes.dot}></div>
          <div>2020-2023</div>
        </div>
      </div>

      <Image className={classes.heading} src={featuredWork} alt="" />

      <div className={classes.projects}>
        {
          projects.map((project, idx) => (
            <ProjectPage data={project} key={idx} id={idx} />
          ))
        }
      </div>
    </div>
  )
}