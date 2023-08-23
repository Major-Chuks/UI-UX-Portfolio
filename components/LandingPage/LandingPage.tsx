import AboutMe from "./AboutMe/AboutMe";
import Clients from "./Clients/Clients";
import { Header } from "./Header/Header";
import classes from "./LandingPage.module.css";
import { Navbar } from "./Navbar/Navbar";
import Playground from "./Playground/Playground";
import Testimonial from "./Testimonial/Testimonial";
import { Work } from "./Work/Work";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Header />
      <Work />
      <Playground />
      <AboutMe />
      <Testimonial />
      <Clients />
    </div>
  );
};

export default LandingPage;
