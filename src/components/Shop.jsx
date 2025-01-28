import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa"; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const addToWishList = (product) => {
  const wishList = JSON.parse(localStorage.getItem("WishList")) || [];
  const isProductInWishList = wishList.some((item) => item.id === product.id);

  if (!isProductInWishList) {
    wishList.push(product);
    localStorage.setItem("WishList", JSON.stringify(wishList));
    toast.success("Product added to wish list");
  } else {
    toast.info("Product already in wish list");
  }
};

const removeFromWishList = (product) => {
  let wishList = JSON.parse(localStorage.getItem("WishList")) || [];
  wishList = wishList.filter((item) => item.id !== product.id);
  localStorage.setItem("WishList", JSON.stringify(wishList));
  toast.warning("Product removed from wish list");
};

const addToCart = (product) => {
  const cartArray = JSON.parse(localStorage.getItem("Product")) || [];
  const isProductInCart = cartArray.some((item) => item.id === product.id);

  if (!isProductInCart) {
    cartArray.push(product);
    localStorage.setItem("Product", JSON.stringify(cartArray));
    toast.success("Product added to cart");
  } else {
    toast.info("Product already added to cart");
  }
};

const removeItem = (product) => {
  let cartArray = JSON.parse(localStorage.getItem("Product")) || [];
  cartArray = cartArray.filter((item) => item.id !== product.id);
  localStorage.setItem("Product", JSON.stringify(cartArray));
  toast.warning("Product removed from cart");
};

const addOrRemove = (product) => {
  let cartArray = JSON.parse(localStorage.getItem("Product")) || [];
  if (cartArray.some((item) => item.id === product.id)) {
    removeItem(product);
  } else {
    addToCart(product);
  }
};

export default function Shop({ products }) {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("WishList")) || []
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleWishList = (product) => {
    const isInWishList = wishList.some((item) => item.id === product.id);

    if (isInWishList) {
      removeFromWishList(product);
      setWishList(wishList.filter((item) => item.id !== product.id));
    } else {
      addToWishList(product);
      setWishList([...wishList, product]);
    }
  };

  return (
    <div className="card-container">
      <div className={styles.card}>
        {products.map((product) => (
          <div className={styles.cards} key={product.id}>
            <div
              className="card"
              data-aos="flip-left"
              style={{ width: 450, height: 450 }}
            >
              <img
                src={product.im || "/default-image.jpg"}
                className="card-img-top"
                style={{
                  width: 200,
                  height: 200,
                  margin: "auto",
                  border: "1px transparent",
                  borderRadius: 20,
                }}
                alt={product.name}
              />
              <button
                className={styles.cart}
                onClick={() => handleWishList(product)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "transparent",
                  border: "none",
                  fontSize: "24px",
                  color: wishList.some((item) => item.id === product.id)
                    ? "red"
                    : "gray",
                }}
              >
                <CiHeart />
              </button>

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>

                <div className={styles.btn}>
                 
                  <button
                    className={styles.cart}
                    onClick={() => addToCart(product)}
                  >
                    <FaShoppingCart /> Add to cart 
                  </button>

                  <button
                    className={styles.cart}
                    onClick={() => removeItem(product)}
                  >
                    Remove
                  </button>

                  <button
                    className={styles.cart}
                    onClick={() => addOrRemove(product)}
                  >
                    Add or Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
