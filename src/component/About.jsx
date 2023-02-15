import React, { useState } from "react";
import Data from "../data-about";

const About = () => {
  const [data, setData] = useState(Data);
  return (
    <div className="about">
      <div className="container container-max-width">
        <div className="about__header">
          <h2 className="about__title">What’s different about Manage?</h2>
          <p className="about__desc">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="about__content">
          {data &&
            data.map((obj, idx) => {
              return (
                <div className="box" key={idx}>
                  <h3 className="box__title" data-order={idx + 1}>
                    {obj.title}
                  </h3>
                  <p className="box__desc">{obj.content}</p>
                </div>
              );
            })}
        </div>
        {/* <div className="about__bg">
          <img
            src="./images/bg-tablet-pattern.svg"
            className="about__bg--desk"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
