import React from "react";
import styles from "../CSS/Signup.module.css";

function Signup() {
  return (
    <div>
      <p className={styles.createAccountText}>Create your account</p>
      <div className={styles.userArea}>
        <center>
          <img
            className={styles.userImg}
            src="https://www.iconninja.com/files/256/659/581/unknown-head-default-anonym-avatar-user-person-icon.png"
            alt="avatar"
          />
        </center>
        <center>
          <form className={styles.formLayout}>
            <p className={styles.userLogin}>My login information</p>
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
          </form>
        </center>
      </div>
    </div>
  );
}

export default Signup;
