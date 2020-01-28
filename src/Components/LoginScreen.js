import styles from "../CSS/LoginScreen.module.css";
import { Link } from "@reach/router";
import React, { Component } from "react";

class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <center>
        <div className={styles.titleArea}>
          <img
            className={styles.logo}
            src="https://cdn.clipart.email/28563f3feec14804cb009791e42fd5c6_headphones-png-images-transparent-free-download-pngmartcom_2400-2000.png"
            alt="headphones"
          />
          <form>
            <p className={styles.userLogin}>User Login</p>
            <label className={styles.userLogin}>
              Username:
              <input
                htmlFor="Username"
                className={styles.inputBox}
                type="text"
              ></input>
            </label>
            <label className={styles.userLogin}>
              Password:
              <input
                htmlFor="Password"
                className={styles.inputBox}
                type="password"
              ></input>
            </label>
            <button className={styles.submitBtn}>Submit</button>
            <Link to="/signup">
              <p className={styles.createAccount}>Create an account</p>
            </Link>
          </form>
        </div>
      </center>
    );
  }
}

export default LoginScreen;
