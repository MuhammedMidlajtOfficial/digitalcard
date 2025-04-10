import { useState, useEffect } from "react";
import "./CountDown.css";
import { Helmet } from "react-helmet";
import logoo from "../../Assets/image/countdownlogo.png";
import { useNavigate } from "react-router-dom"; 

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  useEffect(() => {
    const targetDate = new Date("2025-04-10T16:00:00");
 
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
 
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        navigate("/home");
        return;
      }
 
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
 
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
 
    return () => clearInterval(interval);
  }, []);
 
  const formatTime = (time) => (time < 10 ? `0${time}` : time);
 
  return (
    <>
      <Helmet>
        <title>
          KC (Know Connections) - Innovative Features for Creating Digital Cards
        </title>
        <meta
          name="description"
          content="Explore KC (Know Connections)' powerful features, including 1000+ digital card designs, customizable templates, user-friendly design tools, and seamless sharing options. Elevate your card-making experience with KC (Know Connections)."
        />
        <meta
          name="keywords"
          content="KC (Know Connections) features, digital card features, customizable card templates, card design tools, online card creator, user-friendly design, card sharing options, innovative digital card platform"
        />
      </Helmet>
 
      <div className="countdown-page">
        <div className="container">
          <div className="m-auto">
            <div className="countdown-logo">
              <img src={logoo} alt="KC Logo" />
            </div>
 
            <h1 className="countdown-heading">
              We are Launching Soon! Stay Tuned for Updates!
            </h1>
 
            <div className="countdown-container">
              <div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {formatTime(timeLeft.days)}
                  </div>
                </div>
                <div className="countdown-label">Days</div>
              </div>
              <div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {formatTime(timeLeft.hours)}
                  </div>
                </div>
                <div className="countdown-label">Hours</div>
              </div>
              <div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {formatTime(timeLeft.minutes)}
                  </div>
                </div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div>
                <div className="countdown-item">
                  <div className="countdown-value">
                    {formatTime(timeLeft.seconds)}
                  </div>
                </div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
 
          <div className="countdown-footer">
            Copyright © 2025 | KC | All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};
 
export default CountdownPage;