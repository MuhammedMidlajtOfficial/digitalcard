import React, { useState } from 'react';

const faqData = [
    { question: "How do I share my digital business card with others?", answer: "With Diskuss, you can share your digital business card effortlessly using our unique in-app dial pad feature. No need to rely solely on NFC, QR codes, or WhatsApp like other apps. Simply enter the recipient's number directly in the Diskuss dial pad and share instantly. Of course, you can still use NFC, QR code, or share via WhatsApp for added flexibility." },
    { question: "Can I customize my contact card?", answer: "Absolutely! Diskuss offers a variety of templates and customizable fields to make your card uniquely yours." },
    { question: "Is Diskuss suitable for large teams?", answer: "Yes, Diskuss offers enterprise-level features, including team management and analytics, designed for larger organizations." },
    { question: "How secure is the data I store in Diskuss?", answer: "Diskuss ensures top-level security and privacy, with encrypted data storage and role-based access for enterprise users." },
    { question: "What’s the difference between an Individual and an Enterprise account?", answer: "Individual accounts focus on personal networking, while Enterprise accounts provide tools for managing multiple team members and advanced analytics." },
];

const HomeFAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="home-faq-section">
            <div className="container">
                <div className="faq-header">
                <div className="faq-tag">WE'VE GOT YOU COVERED</div>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openFAQ === index ? 'open' : ''} mb-2` }>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className={`toggle-icon ${openFAQ === index ? 'open' : ''}`}>+</span>
                            </div>
                            <div className="faq-answer">
                                <hr />
                                {faq.answer}
                            </div>
                        </div>

                    ))}
                </div>

                {/* <div className="download-section">
                    <div className="download-content">
                        <h3>Download Now for Smart Business <br /> Card Management!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className='download-button-section'>
                        <div className="download-stats">
                            <div className="user-icons-section">
                                <div className="user-icons user-icons-3"><FaUser /></div>
                                <div className="user-icons user-icons-2"><FaUser /></div>
                                <div className="user-icons user-icons-1"><FaUser /></div>
                            </div>
                            <div className="stat">
                                <div className="stat-info">
                                    <strong>400K+</strong>
                                    <br />
                                    <span>Active Users</span>
                                </div>
                            </div>
                            <div className="vertical-stat-line"></div>
                            <div className="stat">
                                <strong>600K+</strong>
                                <br />
                                <span>Downloads</span>
                            </div>
                        </div>
                        <button className="download-btn">Download App &nbsp; <FaDownload /></button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default HomeFAQ;
