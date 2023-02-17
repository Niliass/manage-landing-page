import React, { useState, useEffect } from "react";
import Data from "../data-testimonial";

const Testimonial = () => {
  const [data, setData] = useState(Data);
  const [translate, setTranslate] = useState(0);
  const circles = [...document.querySelectorAll(".circle")];
  let sliderContainer = document.querySelector(".slider__container");
  useEffect(() => {
    sliderContainer = document.querySelector(".slider__container");
  }, []);

  const activeCircle = (idx) => {
    circles.forEach((circle) => {
      circle.classList.remove("active");
    });
    circles[idx].classList.add("active");
  };

  const handleMobSlider = (e) => {
    let curIdx = circles.indexOf(e.currentTarget);
    activeCircle(curIdx);
    sliderContainer.style.setProperty("--slider", `-${curIdx * 100}vw`);
  };
  const handleDeskSlider = (dir) => {
    let pos;
    if (dir === "left") {
      pos = translate <= 0 ? 300 : translate - 100;
    } else {
      pos = translate >= 300 ? 0 : translate + 100;
    }
    sliderContainer.style.setProperty("--slider", `-${pos}vw`);
    setTranslate(pos);
    activeCircle(pos / 100);
  };
  return (
    <div className="testimonial">
      <h2 className="testimonial__title">What they’ve said</h2>
      <div className="testimonial__content">
        <div className="slider__container">
          {data &&
            data.map((box, idx) => {
              return (
                <div className="slider__item" key={idx}>
                  <div className="box">
                    <img src={box.img} className="box__img" />
                    <h3 className="box__title">{box.name}</h3>
                    <q className="box__quote">{box.quote}</q>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="slider__arrow slider__arrow--left"
          onClick={() => handleDeskSlider("left")}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="slider__arrow slider__arrow--right"
          onClick={() => handleDeskSlider("right")}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="three__dots">
        <button className="circle active" onClick={handleMobSlider}></button>
        <button className="circle" onClick={handleMobSlider}></button>
        <button className="circle" onClick={handleMobSlider}></button>
        <button className="circle" onClick={handleMobSlider}></button>
      </div>
      <button className="testimonial__btn primary__btn">Get Started</button>
      <div className="testimonial__bg">
        <img
          src="./images/bg-tablet-pattern.svg"
          className="testimonial__bg__img"
        />
      </div>
    </div>
  );
};

export default Testimonial;
