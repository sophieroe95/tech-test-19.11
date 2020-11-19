import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
      <section className={styles.navigation}>
        <p>Sophie Roe Tech Test</p>
         <Link to ="/">
        <section className={styles.link}>
           home
        </section>
        </Link>
        <Link to ="/weatherappmain">
        <section className={styles.link}>
           weather
        </section>
        </Link>
        <Link to ="/quiz">
        <section className={styles.link}>
           quiz
        </section>
        </Link>
        <Link to ="/football">
        <section className={styles.link}>
           football
        </section>
        </Link>
        </section>
  );
};

export default Navigation;
