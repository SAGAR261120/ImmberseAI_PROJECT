import React from "react";
import headerrightimage from "../../assets/Image/headerrightimage.png";
import Group1 from "../../assets/Image/Group1.png";
import vrImage1 from "../../assets/Image/Vector1.png";
import vrImage2 from "../../assets/Image/Vector2.png";
import background from "../../assets/Image/Vector5.png";
import group35 from "../../assets/Image/Group35.png";
import group37 from "../../assets/Image/Group37.png";
import group44 from "../../assets/Image/Group44.png";
import group46 from "../../assets/Image/Group46.png";
import group47 from "../../assets/Image/Group47.png";
import Ellipse11 from "../../assets/Image/Ellipse11.png";
import Ellipse12 from "../../assets/Image/Ellipse12.png";
import Ellipse13 from "../../assets/Image/Ellipse13.png";

const Home = () => {
  return (
    <div>
      <section
        className="hero-section mb-4 mt-4 text-light text-center d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center p-3 justify-content-center text-center text-lg-start">
            {/* Left Section */}
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Let's Explore Three-Dimensional Visual
              </h1>
              <p className="lead">
                With virtual technology, you can see the digital world feel more
                real and you can play the game with a new style.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
                <a
                  className="btn gradient-bg text-white me-sm-3 mb-2 mb-sm-0"
                  href="#"
                >
                  Get it Now
                </a>
                <a className="btn text-white " href="#">
                  Explore Device
                </a>
              </div>

              <div className="mt-4 d-flex flex-column flex-sm-row align-items-center">
                <img
                  src={Group1}
                  className="me-sm-2 mb-2 mb-sm-0"
                  alt="Online Users"
                  style={{ width: "150px" }}
                />
                <a className="btn text-white " href="#">
                  400k people online
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6 text-center">
              <img
                src={headerrightimage}
                className="img-fluid"
                alt="Header Right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 mb-4 vr-experience-section text-light d-flex align-items-center justify-content-center position-relative">
        <div className="gradient-half-circle-left"></div>
        <div className="gradient-half-circle-right"></div>

        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="image-group d-flex position-relative">
                <div
                  className="vr-image-container position-relative "
                  style={{ marginTop: "-30px" }}
                >
                  <img
                    src={vrImage1}
                    className="vr-image img-fluid"
                    alt="VR Woman"
                    loading="lazy"
                  />
                </div>
                <div className="vr-image-container ms-3">
                  <img
                    src={vrImage2}
                    className="vr-image img-fluid"
                    alt="VR Man"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Text Section */}
            <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
              <h2 className="vr-heading">New Experience In Playing Game</h2>
              <p className="vr-description">
                You can try playing the game with a new style and of course a
                more real feel, like you are the main character in your game and
                adventure in this new digital world.
              </p>
              <button className="btn gradient-bg text-white">Get it Now</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-4 mb-4 vr-experience-section text-light d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-12 col-md-5 text-center text-md-start">
              <h2 className="vr-heading" style={{ fontSize: "28px" }}>
                Awesome experiences with virtual reality world
              </h2>
            </div>
            {/* Image Section */}
            <div className="col-12 col-md-7 d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
              <div className="image-group d-flex position-relative">
                <div className="vr-image-container p-3">
                  <img
                    src={group35}
                    className="img-fluid"
                    style={{ maxHeight: "150px" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-4 mb-4  vr-experience-grid container py-5 position-relative">
        <div className="gradient-half-circle-left2"></div>

        <div className="row g-4">
          <div className="col-lg-6 col-lg-6">
            <div className=" d-flex justify-content-center p-3 rounded text-white">
              <img src={group46} className="img-fluid rounded mb-3" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-6">
            <div className=" d-flex justify-content-center p-3 rounded text-white">
              <img src={group44} className="img-fluid rounded mb-3" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-6">
            <div className=" d-flex justify-content-center p-3 rounded text-white">
              <img src={group37} className="img-fluid rounded mb-3" />
            </div>
          </div>
          <div className="col-lg-6 col-lg-6">
            <div className=" d-flex justify-content-center p-3 rounded text-white">
              <img src={group47} className="img-fluid rounded mb-3" />
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-4 mb-4  testimonials-section text-center py-5 text-white">
        <div className="container">
          <h2 className="fw-bold text-white">What our clients say</h2>
          <p className=" text-light ">
            See what our customers say about us. It really matters to us. How
            good or bad we will make it for evaluation to make EhyaLive better.
          </p>
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-4 mb-3 ">
              <div className="testimonial-card p-4 rounded shadow testimonial-section">
                <p className="text-light text-start font-bold">
                  {" "}
                  <span style={{ color: "#F7B603" }}>starstar</span>star
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <p className="mb-0 text-light h-100">
                      “I know in real-time where the money is spent,and I don’t
                      have to lend out the company’s credit card anymore. What a
                      relief!”
                    </p>
                    <small className="text-warning"></small>
                  </div>
                </div>
                <div className="d-flex text-start mt-3">
                  <div>
                    <img
                      src={Ellipse11}
                      className="rounded-circle me-3"
                      style={{ height: "25px" }}
                    />
                    <p className="text-white mb-0">Denny Hilguston</p>
                    <p style={{ color: "#EB4468" }}>@denny.hill</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3 ">
              <div className="testimonial-card p-4 rounded shadow testimonial-section">
                <p className="text-light text-start font-bold">
                  {" "}
                  <span style={{ color: "#F7B603" }}>starstar</span>star
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <p className="mb-0 text-light h-100">
                      VISUALS are much better. The improvements in optics and
                      resolution and much more than a modern console generation
                      leap.
                    </p>
                    <small className="text-warning"></small>
                  </div>
                </div>
                <div className="d-flex text-start mt-3">
                  <div>
                    <img
                      src={Ellipse12}
                      className="rounded-circle me-3"
                      style={{ height: "25px" }}
                    />
                    <p className="text-white mb-0">Vani Pandey</p>
                    <p style={{ color: "#EB4468" }}>@vani.pandey</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3 ">
              <div className="testimonial-card p-4 rounded shadow testimonial-section">
                <p className="text-light text-start font-bold">
                  {" "}
                  <span style={{ color: "#F7B603" }}>starstar</span>star
                </p>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <p className="mb-0 text-light h-100">
                      I can actually see the improvement in the graphics, not
                      having the external sensors is a big plus.
                    </p>
                    <small className="text-warning"></small>
                  </div>
                </div>
                <div className="d-flex text-start mt-3">
                  <div>
                    <img
                      src={Ellipse13}
                      className="rounded-circle me-3"
                      style={{ height: "25px" }}
                    />
                    <p className="text-white mb-0">milly Singh</p>
                    <p style={{ color: "#EB4468" }}>@milly.Singh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
