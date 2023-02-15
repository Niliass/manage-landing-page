import React, { useState } from "react";
import Data from "../data-testimonial";

const Testimonial = () => {
  const [data, setData] = useState(Data);
  return (
    <div className="testimonial">
      <h2 className="testimonial__title">What they’ve said</h2>
      <div className="testimonial__content">
        {data &&
          data.map((box, idx) => {
            return (
              <div className="box" key={idx}>
                <img src={box.img} className="box__img" />
                <h3 className="box__title">{box.name}</h3>
                <q className="box__quote">{box.quote}</q>
              </div>
            );
          })}
      </div>
      <div className="three__dots">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <button className="testimonial__btn primary__btn">Get Started</button>
    </div>
  );
};

export default Testimonial;
