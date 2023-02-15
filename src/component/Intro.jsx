import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container container-max-width">
        <img
          src="./images/illustration-intro.svg"
          alt="intro image"
          className="intro__img"
        />
        <div className="intro__info">
          <h1 className="intro__title">
            Bring everyone <br /> together to build <br /> better products.
          </h1>
          <p className="intro__desc">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="intro__btn primary__btn">Get Started</button>
        </div>
      </div>
      <div className="intro__bg">
        <img src="./images/bg-tablet-pattern.svg" alt="intro background" />
      </div>
      <img src="./images/bg-tablet-pattern.svg" className="intro__small__bg" />
    </div>
  );
};

export default Intro;
