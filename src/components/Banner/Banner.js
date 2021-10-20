import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner d-flex align-items-center">
        <div className="container">
          <h2 className="title fs-sm-2">
            Your doctor, <br /> <span className="span">your treatment</span>
          </h2>
          <hr className="hr" />
          <p className="para">
            Proactively envisioned multimedia based expertise and cross-media{" "}
            <br />
            growth strategies. Seamlessly visualize quality intellectual capital{" "}
            <br />
            without superior collaboration and idea-sharing. <br />
          </p>
          <div className="my-5">
            <button className="custom-btn banner-more-btn">
              Discover More
            </button>
            <button className="custom-btn banner-hospital-btn">
              Hospital Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
