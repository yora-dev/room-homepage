import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);

    if (data) {
      setItems(data);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="product-catalogue">
        <div className="slider-img">
          <img
            src="./src/assets/images/mobile-image-hero-1.jpg"
            alt=""
            className="hero-img"
          />
          <div className="slider-container">
            <img
              src="./src/assets/images/icon-angle-left.svg"
              alt=""
              className="arrow left-arrow"
            />
            <img
              src=" ./src/assets/images/icon-angle-right.svg"
              alt=""
              className="arrow right-arrow"
            />
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-header">
            Discover innovative ways to decorate
          </h1>

          <p className="product-description">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>

          <button className="shop-btn">
            Shop now{" "}
            <img
              src=" ./src/assets/images/icon-arrow.svg"
              alt=""
              className="shop-img"
            />
          </button>
        </div>
      </div>

      <div className="company-summary"></div>
    </>
  );
}

export default App;
