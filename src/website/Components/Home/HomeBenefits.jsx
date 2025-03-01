import React, { useState } from 'react';
import individual from '../../Assets/image/home/individual-benefit.svg';
import enterprise from '../../Assets/image/home/enterprize-benefit1.svg';
import ind from "../../Assets/image/home/Icons/ind.svg";
import ent from "../../Assets/image/home/Icons/ent.svg";
import ScrollAnimation from '../../../ScrollAnimation';
import { useNavigate } from 'react-router-dom';
const HomeBenefits = () => {
    const navigate = useNavigate()
    const [selectedView, setSelectedView] = useState("individual");

    return (
        <div className="home-benefits-section">
            <div className="container">
                <ScrollAnimation animationClass="animate__fadeInDown">
                    <center>
                        <h2 className='benefits-title-tag'>Key benefits</h2>
                        <p className="subtitle">
                        Benefits tailored for individual professionals and enterprises alike.
                        </p>
                    </center>

                    <div className="button-group">
                        <button
                            className={`explore-button ${selectedView === "individual" ? "active" : ""}`}
                            onClick={() => setSelectedView("individual")}
                        >
                            Individual
                        </button>
                        <button
                            className={`learn-more-btn ${selectedView === "enterprise" ? "active" : ""}`}
                            onClick={() => setSelectedView("enterprise")}
                        >
                            Enterprise
                        </button>
                    </div>
                </ScrollAnimation>
                
                {selectedView === "individual" ? (
                    <div className="row align-items-center justify-content-center mt-5">
                        <div className="col-lg-6">
                            <div className="benefits-content">
                                <div className="benefits-tag">
                                    <img src={ind} alt="Individual Icon" />
                                </div>
                                <h2>Key Benefits for Individuals</h2>
                                <p>Effortlessly schedule and join meetings with your contacts from anywhere. Collaborate in real-time with features like screen sharing, whiteboards, and integrated notes. Stay connected and productive on the go.</p>
                                <p>Bring your team together with integrated collaboration tools. Share documents, manage projects, and track progress—all from your mobile device. Experience smooth collaboration, whether you're in the office or on the move.</p>
                                <button className="get-started-benefit-btn" onClick={()=>navigate('/contact')}>Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-images">
                                <img src={individual} alt="Individual Benefits" className="projects-image" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center justify-content-center mt-5">
                        <div className="col-lg-6">
                            <div className="benefits-images">
                                <img src={enterprise} alt="Enterprise Benefits" className="projects-image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="benefits-content">
                                <div className="benefits-tag">
                                    <img src={ent} alt="Enterprise Icon" />
                                </div>
                                <h2>Key Benefits for Enterprise</h2>
                                <p>Streamline your team's contact information into a single, organized database, improving collaboration and communication.</p>
                                <p>Access comprehensive analytics to understand team interactions and enhance overall engagement strategies.</p>
                                <button className="get-started-benefit-btn" onClick={()=>navigate('/contact')}>Get started</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeBenefits;
