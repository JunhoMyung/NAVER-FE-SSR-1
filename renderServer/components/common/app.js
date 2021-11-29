import React from "react";
import styles from "./app.module.scss";
import Header from "./header/index";
import MainCard from "./mainCard/index";
import View from "../view/index";
import News from "../news/index";
import Error from "../error/index";

function App(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodybackground}>
        <MainCard mainCard={props[0].mainCard} />
        {/* {props[0].mainCard.title.type === "동물" && (
          <View view={props[0].view} />
        )}
        {/* <MainCard mainCard={props[2].mainCard} /> */}
        {/* {props[2].mainCard.title.type === "웹툰" && (
            <News news={props[2].view} />
        )} */}
        <News />
      </div>
    </div>
  );
}

export default App;
