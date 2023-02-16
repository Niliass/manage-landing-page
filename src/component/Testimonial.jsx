import React, { useState } from "react";
import Data from "../data-testimonial";

const Testimonial = () => {
  const [data, setData] = useState(Data);
  const [curIndex, setCurIndex] = useState(0);
  const [translate, setTranslate] = useState({ transform: "translate(0px)" });
  const handleSilder = (e) => {
    let curEl = e.currentTarget;
    let circles = [...document.querySelectorAll(".circle")];
    let curIdx = circles.indexOf(curEl);
    setCurIndex(curIdx);
    setTranslate({
      transform: `translateX(${curIdx * -97}vw)`,
    });
    circles.forEach((circle) => {
      circle.classList.remove("active");
    });
    circles[curIdx].classList.add("active");
  };
  const handleMouseDown = (e) => {
    e.currentTarget.addEventListener("mousemove", mousePosition);
  };
  const handleMouseUp = (e) => {
    e.currentTarget.removeEventListener("mousemove", mousePosition);
  };
  const mousePosition = (e) => {
    console.log(e);
  };
  return (
    <div className="testimonial">
      <h2 className="testimonial__title">What they’ve said</h2>
      <div className="testimonial__content">
        <div
          className="slider__container"
          style={translate}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
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
      </div>
      <div className="three__dots">
        <button className="circle active" onClick={handleSilder}></button>
        <button className="circle" onClick={handleSilder}></button>
        <button className="circle" onClick={handleSilder}></button>
        <button className="circle" onClick={handleSilder}></button>
      </div>
      <button className="testimonial__btn primary__btn">Get Started</button>
    </div>
  );
};

export default Testimonial;
