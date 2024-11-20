import React from "react";
import iphoneImage from "../../Assets/image/home/iphone-phone.png";
import androidImage from "../../Assets/image/home/android-phone.png";
import qr from "../../Assets/image/home/qr.svg";
import { FaApple, FaAndroid } from "react-icons/fa6";

const HomeApps = () => {
  return (
    <>
      <div className="app-download-section">
        <div className="container">
          <h2>Get The Diskuss App</h2>
          <p>Download the Diskuss app for innovative digital card solutions</p>
          <div className="get-app-mobile">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="mobile-download-card1 mt-lg-5 mt-xl-5">

                  <div className="row">
                    <div className="col-lg-5">
                      {/* <h3>Download for Iphone</h3>
                      <p>
                        Get the desktop app for SAP's comprehensive project management
                        tools
                      </p> */}
                      <button className="download-button">
                        Download For <FaApple />
                      </button>
                      <div className="qr-section d-flex justify-content-start">
                        <img src={qr} alt="qr-code" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="home-get-phone">
                        <img src={iphoneImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mobile-download-card mt-lg-5 mt-xl-5">
                  <div className="row">
                    <div className="col-lg-5">
                      {/* <h3>Download for Android</h3>
                      <p>
                        Download the ultimate mobile app for SAP's project management
                        on-the-go
                      </p> */}
                      <button className="download-button">
                        Download For <FaAndroid />
                      </button>
                      <div className="qr-section d-flex justify-content-start">
                        <img src={qr} alt="qr-code" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="home-get-phone">
                        <img src={androidImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeApps;
