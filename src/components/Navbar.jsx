import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CiInstagram } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

export default function Navbar({ logo }) {
  return (
    <div>
      <nav className=" fixed-top fs-4 ">
        <div className={styles.navcolor}>
          <div className=" navbar container-fluid navbar-expand-lg px-2 ">
            <a className="navbar-brand px-1" href="#">
              <img src={logo} alt="meuble" className={styles.navlogosize} />
            </a>
            <button
              className="navbar-toggler w-20 px-2 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className={styles.toggle}>
                <span className="navbar-toggler-icon"></span>
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {" "}
              <div className="d-flex justify-content-around align-items-center w-100 my-1">
                <div className={styles.listitems}>
                  <ul className="navbar-nav  fw-bold text-danger-emphasis  ">
                    <li className="nav-item ">
                      <Link
                        to="/"
                        className="nav-link text-danger-emphasis px-4"
                      >
                        <div className={styles.navlist}> Home</div>
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <Link
                        to="/about"
                        className="nav-link text-danger-emphasis px-4"
                      >
                        <div className={styles.navlist}> About</div>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link
                        to="/shop"
                        className="nav-link text-danger-emphasis  px-4"
                      >
                        <div className={styles.navlist}> Shop</div>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link
                        to="/contactus"
                        className="nav-link text-danger-emphasis px-4"
                      >
                        <div className={styles.navlist}>Contact us</div>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.icons}>
                  <a href="https://www.instagram.com" target="_blank">
                   
                    <CiInstagram className={styles.icon} />
                  </a>

                  <Link to="/Login">
                    <IoIosContact className={styles.icon} />
                  </Link>


                  <a href="https://www.facebook.com" target="_blank">
                    <FaFacebook className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
