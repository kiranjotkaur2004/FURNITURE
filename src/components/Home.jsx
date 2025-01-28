import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ carousel, carouselone, carouseltwo, products }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const text = "We are more than just a furniture company—we are a community of people who value the importance of home. Join our growing family of satisfied customers and transform your living space today. If you have any questions or need assistance in finding the perfect furniture, our team is here to help. Don't hesitate to";
  const textone = ".......Transform your space into a haven. The perfect pieces are just a click away! ....Your dream home is only a few steps away—find the furniture that speaks to you!.......";

  return (
    <div>
      <div className="b-im w-100 vh-100 position-fixed text-light" style={{ zIndex: -10 }}>
        <img src={carousel} className="img-fluid" alt="image not found" />
      </div>

      <section className="introduction-section w-100" style={{ height: "120vh", zIndex: 2 }}>
        <div className="content w-100 vh-100 d-flex flex-column gap-2 justify-content-center align-items-center" data-aos="zoom-in-down" data-aos-duration="2500">
          <h1>MEUBLE</h1>
          <p className="fs-4">
            <Link to="/shop">
              <button className={styles.btnbtn}>Shop now!</button>
            </Link>
          </p>
         
        </div>

        <footer className="mt-40 d-flex flex-column justify-content-center align-items-center color p-3 bg-white" style={{ height: '20vh' }}>
          <div>
            <span className="">
              © Copyright Meuble. All Rights Reserved
              <br />
              <span className="ms-4">
                Designed by kiran kalra<a href="#" className="anc d-inline"></a>
              </span>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
}
