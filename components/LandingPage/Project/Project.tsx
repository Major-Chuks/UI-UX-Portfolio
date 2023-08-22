import Image from "next/image";
import { Project } from "../Work/Work";
import classes from "./Project.module.css";
import { useRouter } from "next/router";

interface ProjectProps {
  data: Project;
  id: number
}

const ProjectPage = ({ data, id }: ProjectProps) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(data.link)} className={classes.container}>
      <div className={classes.image}>
        <Image src={data.image} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.name}>{data.name}</div>
        <div className={`${classes.description} ${classes[`_${id}`]}`}>{data.description}</div>
        <div className={classes.date}>{data.date}</div>
      </div>
    </div>
  )
}

export default ProjectPage;