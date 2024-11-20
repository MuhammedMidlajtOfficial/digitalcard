import React, { useState, useRef } from "react";
import {
  FaIdCard,
  FaNetworkWired,
  FaClipboardList,
  FaPlay,
  FaPause,
  FaAngleRight,
  FaCreativeCommonsShare,
} from "react-icons/fa6";

const HomeHowUse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const tutorials = [
    {
      id: 1,
      title: "Download the Diskuss app",
      icon: <FaIdCard />,
      content:
        "Begin your journey by downloading the Diskuss app from your device's app store. It's available for both iOS and Android, ensuring you can access it wherever you go.",
    },
    {
      id: 2,
      title: "Sign up and provide essential details",
      icon: <FaNetworkWired />,
      content:
        "Once the app is installed, open it and sign up by creating your account.",
    },
    {
      id: 3,
      title: "Choose your user type – Individual or Enterprise",
      icon: <FaClipboardList />,
      content:
        "After signing up, you'll be prompted to choose your user type.",
    },
    {
      id: 4,
      title: "Start your trial and begin sharing contacts with ease",
      icon: <FaCreativeCommonsShare />,
      content:
        "After choosing your user type,start your trail and begin sharing contacts with ease",
    },
  ];
  const [activeTab, setActiveTab] = useState(tutorials[0].title);

  const handlePlayPauseVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="home-how-to-use">
        <div className="container">
          <center>
            <div className="section-tag">How It Works</div>
            <h2>A Simple Start to Seamless Networking</h2>
            <p className="subtitle">
            Getting started with Diskuss is quick and easy.
            </p>
          </center>
          <div className="tutorials-container">
            <div className="tutorials-nav">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className={`tutorial-nav-item ${activeTab === tutorial.title ? "active" : ""
                    }`}
                  onClick={() => setActiveTab(tutorial.title)}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        {tutorial.icon}
                        <span>{tutorial.title}</span>
                      </div>
                      <div>
                        <FaAngleRight />
                      </div>
                    </div>
                    <p>{tutorial.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="tutorial-content">
              <h3>{activeTab}</h3>
              <p>{tutorials.find((t) => t.title === activeTab)?.content}</p>
              <div className="tutorial-video">
                <video ref={videoRef}>
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <button className="play-button" onClick={handlePlayPauseVideo}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHowUse;
