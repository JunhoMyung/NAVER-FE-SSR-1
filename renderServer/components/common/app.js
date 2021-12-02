import React from "react";
import styles from "./app.module.scss";
import Header from "./header/index";
import MainCard from "./mainCard/index";
import View from "../view/index";
import News from "../news/index";
import Influencer from "../influencer/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodybackground}>
        <MainCard mainCard={props[0].mainCard} />
        {props[0].mainCard.title.type === "동물" && (
          <>
          <View view={props[0].view} />
          <Influencer influencer={props[0].influencer}/>
          </>
        )}
        <News />
      </div>
    </div>
  );
}

export default App;
