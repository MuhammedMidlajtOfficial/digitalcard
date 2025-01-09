import React from "react";
import iphoneImage from "../../Assets/image/home/iphone-phone.svg";
import androidImage from "../../Assets/image/home/android-phone.svg";
import qr from "../../Assets/image/home/qr.svg";
import { FaApple, FaAndroid, FaGooglePlay } from "react-icons/fa6";

const HomeApps = () => {
  return (
    <>
      <div className="app-download-section">
        <div className="container">
          <h2>Get The Diskuss App</h2>
          <p>Download the Diskuss app for innovative solutions</p>
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
                      <div className="apple-store-home">
                  <div className="icon-store">
                    <FaApple />
                  </div>
                  <div className="content-store">
                    <span>Download On the</span>
                    <h4>App Store</h4>
                  </div>
                </div>
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
                      <div className="google-playstore-home">
                        <div className="icon-store">
                          <FaGooglePlay />
                        </div>
                        <div className="content-store">
                          <span>Get it On</span>
                          <h4>Google play</h4>
                        </div>
                      </div>
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
