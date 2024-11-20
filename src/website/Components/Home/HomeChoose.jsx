import React from 'react';
import choose from '../../Assets/image/home/home-choose.svg';
import about from "../../Assets/image/home/Icons/star.svg";

const HomeChoose = () => {
    return (
        <div className="home-choose">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="left-section">
                            <img src={choose} alt="Diskuss app" className="phone-image-choose" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-section">
                            <div className="why-choose">
                                <span className="star-icon"><img src={about} alt="about" /></span> Why Choose
                            </div>
                            <h2>Why Choose Diskuss?</h2>
                            <p>
                                Diskuss is a powerful business contact management system designed
                                to streamline your networking experience. Whether you're an
                                entrepreneur, sales professional, or corporate leader, Diskuss makes
                                managing, organizing, and accessing your contacts seamless. Say
                                goodbye to messy spreadsheets and hello to a smart, intuitive platform
                                that keeps your business relationships at your fingertips.
                            </p>
                            <button className="explore-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeChoose;