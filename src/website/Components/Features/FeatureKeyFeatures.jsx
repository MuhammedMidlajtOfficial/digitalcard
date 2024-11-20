import React from 'react';
import phoneImage from '../../Assets/image/feature/feature-key-feature.svg';

const FeatureKeyFeatures = () => {
    const features = [
        {
            title: "Real-time Updates",
            description: "Organize, tag, and search your contacts effortlessly.",
            className: "primary"
        },
        {
            title: "Seamless Integrations",
            description: "Connect Diskuss with your favorite CRMs, email platforms, and more.",
        },
        {
            title: "Real-time Analytics",
            description: "Get insights on how your contacts interact with your shared business cards.",
        },
        {
            title: "NFC & QR Code Sharing",
            description: "Instantly share your contact information with a tap or scan.",
        },
        {
            title: "Customizable Business Cards",
            description: "Personalize your digital business cards with themes, colors, and logos.",
        },
        {
            title: "Geolocation Tagging",
            description: "Track where your cards are being shared and viewed.",
        },
        {
            title: "Referral Program",
            description: "Earn rewards by referring others to Diskuss.",
        },
        {
            title: "Virtual Meeting Integration",
            description: "Schedule and manage meetings directly within Diskuss.",
        },
    ];

    return (
        <div className="feature-key-feature">
            <div className="container">
                <h2>Key Features of Diskuss</h2>
                <p className="subtitles">Diskuss offers features that streamline managing your business contacts, whether you're <br /> a solo professional or part of a larger organization.</p>

                <div className="features-grids-feature">
                    <div className="features-left">
                        {features.slice(0, 4).map((feature, index) => (
                            <div className={`feature-cards-feature ${feature.className || ''}`} key={index}>
                                <div className="d-flex align-items-center">
                                    <h3>{feature.title}</h3>
                                </div>
                                <div>
                                    <span>{feature.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="phone-container-feature">
                        <img src={phoneImage} alt="Diskuss App Interface" className="phone-image-feature" />
                    </div>

                    <div className="features-right">
                        {features.slice(4, 8).map((feature, index) => (
                            <div className={`feature-cards-feature ${feature.className || ''}`} key={index}>
                                <div className="d-flex align-items-center">
                                    <h3>{feature.title}</h3>
                                </div>
                                <div>
                                    <span>{feature.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureKeyFeatures;
