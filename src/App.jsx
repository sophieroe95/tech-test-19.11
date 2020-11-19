import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Navigation from "./components/Navigation";
import Routes from './containers/Routes/Routes';

const App = () => {
 
  return (
  <section className={styles.page}>
      <Navigation />
 
    <section> 
      <Routes/>
    </section>
    </section>);
}

export default App;

