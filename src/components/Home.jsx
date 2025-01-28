import styles from "./Home.module.css";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Home({ carousel, carouselone, carouseltwo,products }) {
  useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
    
    const text =
      "We are more than just a furniture company—we are a community of people who value the importance of home. Join our growing family of satisfied customers and transform your living space today. If you have any questions or need assistance in finding the perfect furniture, our team is here to help. Don't hesitate to";
  
  const textone=".......Transform your space into a haven. The perfect pieces are just a click away! ....Your dream home is only a few steps away—find the furniture that speaks to you!......."
  return (
    <div>
      <div className="carouseltop">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carousel}
                className="d-block w-100"
                alt="..."
                style={{ height: "550px", objectFit: "fill" }} 
              ></img>
               <Link to="/shop">
              <button className={styles.btn}>Shop now</button>
              </Link>
            </div>
            <div className="carousel-item">
              <img
                src={carouselone}
                className="d-block w-100"
                style={{ height: "550px", objectFit: "fill" }}
                alt="..."
                
              />
              <Link to="/shop">
              <button className={styles.btn}>Shop now</button>
              </Link>
            </div>
            <div className="carousel-item">
              <img
                src={carouseltwo}
                className="d-block w-100"
                style={{ height: "550px", objectFit: "cover" }}
                alt="..."
              />
              <Link to="/shop">
              <button className={styles.btn}>Shop now</button>
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

      <div className={styles.title}>
        <div className={styles.marquetext}>
          <h2 className="fs-4 text-white m-3">90 ਸਾਲਾਂ ਦਾ ਭਰੋਸਾ {textone}</h2>
        </div>
      </div>

   

      


  <div className="card-container">
        <div className={styles.card}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className={styles.cards} key={product.id}>
                <div className="card" data-aos="zoom-in" style={{ width: 450, height: 450 }}>
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
                    <button className={styles.btnbtn}>Explore now!</button>
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
