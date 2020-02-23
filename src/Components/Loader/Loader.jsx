import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
        <Loader
          type="Bars"
          color="#adadad"
          height={100}
          width={100}
          timeout={3000}
          className={styles.Loader}
        />
      </div>
    );
  }
}
