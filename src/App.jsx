import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import rightArrow from "./assets/images/icon-angle-right.svg";
import leftArrow from "./assets/images/icon-angle-left.svg";
import arrow from "./assets/images/icon-arrow.svg";
import darkImg from "./assets/images/image-about-dark.jpg";
import lightImg from "./assets/images/image-about-light.jpg";

function App() {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  function useBreakpoint() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const resizeListener = () => setWidth(window.innerWidth);
      window.addEventListener("resize", resizeListener);
      return () => window.removeEventListener("resize", resizeListener);
    }, []);

    return width;
  }
  const width = useBreakpoint();

  // const imageUrl = width < 768 ? images.mobile : images.desktop;
  async function fetchItems() {
    const res = await fetch("data.json");
    const data = await res.json();
    console.log(data);

    if (data) {
      setItems(data);
    }
  }

  function handlePrev() {
    if (currentSlide == 0) {
      setCurrentSlide(items.length - 1);
    } else setCurrentSlide(currentSlide - 1);
  }

  function handleNext() {
    if (currentSlide == items.length - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide(currentSlide + 1);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {items.map((item, index) => {
        return (
          <div
            className={
              currentSlide == index
                ? "visible product-catalogue"
                : "invisible product-catalogue "
            }
            key={item.id}
          >
            <div className="slider-img">
              <Header width={width} />

              <img
                src={width < 768 ? item.image.mobile : item.image.desktop}
                alt=""
                className={
                  width < 768 ? "hero-img hero-mobile" : "hero-img hero-desktop"
                }
              />

              <div className="slider-container">
                <div className="left-arrow">
                  <img
                    src={leftArrow}
                    alt=""
                    className="arrow "
                    onClick={handlePrev}
                  />
                </div>
                <div className="right-arrow">
                  <img
                    src={rightArrow}
                    alt=""
                    className="arrow "
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>

            <div className="product-info">
              <h1 className="product-header">{item.header}</h1>

              <p className="product-description">{item.description}</p>

              <button className="shop-btn">
                Shop now <img src={arrow} alt="" className="shop-img" />
              </button>
            </div>
          </div>
        );
      })}

      <div className="company-summary">
        <img src={darkImg} alt="" className="about-img-dark" />

        <div className="about-info">
          <h1 className="about-header">About our furniture</h1>

          <p className="about-description">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img src={lightImg} alt="" className="about-img-light" />
      </div>
    </>
  );
}

export default App;
