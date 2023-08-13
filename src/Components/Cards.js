import React, { useState } from "react";
import Card from "./Card";
import project from "../assets/jpg/project-1.jpg";
import styles from "../Styles/Cards.module.css";
const Cards = () => {
  const [projects, setProjects] = useState([
    {
      img: project,
      title: "Shop Landing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      url: "https://amhb.ir"
    },
    {
      img: project,
      title: "Login",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      url: "https://amhb.ir"
    },
    {
      img: project,
      title: "Silver Home Shop",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      url: "https://amhb.ir"
    },
    {
      img: project,
      title: "silver",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      url: "https://amhb.ir"
    },
  ]);

  return (
    <div className={styles.container}>
      {projects.map((pr) => {
      return <Card img={pr.img} title={pr.title} desc={pr.desc} url={pr.url} />;
      })}
    </div>
  );
};

export default Cards;
