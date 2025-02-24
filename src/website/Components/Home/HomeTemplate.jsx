import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import template1 from "../../Assets/image/home/template-1.png";
import template2 from "../../Assets/image/home/template-2.png";
import ScrollAnimation from "../../../ScrollAnimation";
import { useNavigate } from "react-router-dom";
const HomeTemplate = () => {
  const navigate = useNavigate();
  return (
    <div className="home-template">
      <div className="container">
        <ScrollAnimation animationClass="animate__fadeInDown">
          <div className="template-tag">Templates</div>
          <h2>Make a Lasting Impression with Customizable Templates</h2>
          <p className="subtitle">
            Select from a variety of professional templates and customize them
            to suit your style and needs. Whether you prefer vertical or
            horizontal layouts, KC (Know Connections) ensures your business card stands out.
          </p>

          {/* <div className="button-group">
            <button className="explore-button">Vertical</button>
            <button className="learn-more-btn">Horizontal</button>
          </div> */}
        </ScrollAnimation>

        <div className="template-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="template1-card">
                <div className="template-card-img-bg verticle-img">
                  <img src={template1} alt="template-1" />
                </div>
                <div className="home-template-content">
                  <div>
                    <h3>Vertical Templates</h3>
                    <p>
                      Choose clean, modern designs for a sleek presentation.
                    </p>
                  </div>
                  {/* <div className="arrow-template">
                    <span className="arrow-icon">↗</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="template-card">
                <div className="template-card-img-bg horizontal-img">
                  <img src={template2} alt="template-1" />
                </div>
                <div className="home-template-content">
                  <div>
                    <h3>Horizontal Templates</h3>
                    <p>
                      Opt for a more traditional look with professional
                      horizontal layouts.
                    </p>
                  </div>
                  {/* <div className="arrow-template">
                    <span className="arrow-icon">↗</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button
            className="explore-button"
            onClick={() =>
              window.open("https://play.google.com/store/apps", "_blank")
            }
          >
            Create Own Design
          </button>
          <button
            className="learn-more-btn"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            onClick={() => navigate("/resources")}
          >
            Browse all Templates <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
