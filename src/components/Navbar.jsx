import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CiInstagram } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

export default function Navbar({ logo }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg color shadow-lg p-2 mb-5 bg-light fs-4 rounded position-fixed start-0 end-0 top-0  z-2 ">
        <div class="container-fluid ">
        <Link to="/" class={`navbar-brand fs-2 fw-normal ${styles.col} `}>
          MEUBLE
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className={`nav-item ${styles.menu}`}>
                <Link to="/" className="nav-link  px-4">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.menu}`}>
                <Link
                  to="/about"
                  className="nav-link px-4"
                >
                  About
                </Link>
              </li>
              <li className={`nav-item ${styles.menu}`}>
                <Link to="/shop" className="nav-link text-danger-emphasis px-4">
                  Shop
                </Link>
              </li>
              <li className={`nav-item ${styles.menu}`}>
                <Link
                  to="/contactus"
                  className="nav-link text-danger-emphasis px-4"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav me-1 mb-2 mb-lg-0 ">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiInstagram className={styles.icons} />
              </a>

              <Link to="/login">
                <IoIosContact className={styles.icons} />
              </Link>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className={styles.icons}  />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
