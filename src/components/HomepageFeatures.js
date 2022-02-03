import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Prehistoric NFTs",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        These NFTs are designed in order to send you back in time as a strong
        and responsible Dinosaur Hodler.
      </>
    ),
  },
  {
    title: "Find a purpose!",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        We create them, you take care of them. History happens, Dinosaurs take
        part in it. Will yours be well prepared?
      </>
    ),
  },
  {
    title: "Powered by Human Intelligence and Love for Mankind",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This is just the beginning of a story as long as time and the cosmos
        itself. Dinos were around a long time ago, but their echos persist until
        today, and on they go.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
