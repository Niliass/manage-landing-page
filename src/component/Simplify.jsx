import React from "react";

const Simplify = () => {
  return (
    <div className="simplify">
      <div className="container">
        <h2 className="simplify__title">Simplify how your team works today.</h2>
        <button className="simplify__btn">Get Started</button>
      </div>
      <div className="simplify__bg">
        <img
          src="./images/bg-simplify-desk.svg"
          className="simplify__bg--desk"
        />
        <img src="./images/bg-simplify-mob.svg" className="simplify__bg--mob" />
      </div>
    </div>
  );
};

export default Simplify;
