
import { Link } from "react-router-dom";
import styles from "./About.module.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({
  carouselab,
  carouseloneab,
  carouseltwoab,
  products,
}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const text =
    "We are more than just a furniture company—we are a community of people who value the importance of home. Join our growing family of satisfied customers and transform your living space today. If you have any questions or need assistance in finding the perfect furniture, our team is here to help. Don't hesitate to";

  return (
    <div>
      <div className="carouseltop">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carouselab}
                className="d-block w-100"
                alt="Carousel image 1"
                style={{ height: "700px", objectFit: "cover" }}
              />
              <Link to="/contact">
                <button className={styles.btn}>
                  <span>{text}</span>
                  <span className={styles.contactus}>Contact us</span>
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <img
                src={carouseloneab}
                className="d-block w-100"
                alt="Carousel image 2"
                style={{ height: "700px", objectFit: "cover:fill" }}
              />
              <Link to="/contact">
                <button className={styles.btn}>
                  <span>{text}</span>
                  <span className={styles.contactus}>Contact us</span>
                </button>
              </Link>
            </div>
            <div className="carousel-item">
              <img
                src={carouseltwoab}
                className="d-block w-100"
                alt="Carousel image 3"
                style={{ height: "700px", objectFit: "cover" }}
              />
              <Link to="/contact">
                <button className={styles.btn}>
                  <span>{text}</span>
                  <span className={styles.contactus}>Contact us</span>
                </button>
              </Link>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="card-container">
        <div className={styles.card}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className={styles.cards} key={product.id}>
                <div className="card" data-aos="flip-up" style={{ width: 450, height: 450 }}>
                  <img
                    src={product.im || "/default-image.jpg"}
                    className="card-img-top"
                    style={{
                      width: 400,
                      height: 400,
                      margin: "auto",
                      border: "1px transparent",
                      borderRadius: 20,
                    }}
                    alt={product.name}
                  />
                  <Link to="/shop">
                    <button className={styles.btnbtn}>Shop now</button>
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>

    
     
    </div>
  );
}
