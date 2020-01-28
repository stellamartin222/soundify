import React from "react";
import styles from "../CSS/Header.module.css";
import { Link } from "@reach/router";

function Header() {
  return (
    <div>
      <Link to="/">
        <div className={styles.homeBtnArea}>
          <img
            className={styles.homeBtn}
            src="https://static.thenounproject.com/png/901844-200.png"
          />
        </div>
      </Link>
      <h1 className={styles.title}>Ambiscape</h1>
    </div>
  );
}

export default Header;
