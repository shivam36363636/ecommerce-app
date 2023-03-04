import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Sutte Aali</h1>
      {/* Search Field */}
      {/* Dropdown */}
      <a href="w">
        Cart<ion-icon name="cart-outline"></ion-icon>
      </a>
    </nav>
  );
}

export default Navbar;
