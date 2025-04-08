import { useState, useEffect } from "react";
import "./CountDown.css";
import { Helmet } from "react-helmet";
import logoo from "../../Assets/image/countdownlogo.png";
const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 31,
    seconds: 27,
  });

  useEffect(() => {
    // Set the target date (4 days, 14 hours, 31 minutes, 27 seconds from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(targetDate.getHours() + 14);
    targetDate.setMinutes(targetDate.getMinutes() + 31);
    targetDate.setSeconds(targetDate.getSeconds() + 27);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

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
        <div className="container ">
          <div className="m-auto">
            <div className="countdown-logo">
              <img src={logoo} alt="" />
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
