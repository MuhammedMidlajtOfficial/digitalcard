import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaRegRectangleList } from 'react-icons/fa6';
import home1 from "../../Assets/image/home/home-testimonial-1.svg";
import home2 from "../../Assets/image/home/home-testimonial-2.svg";
import home3 from "../../Assets/image/home/home-testimonial-3.svg";

const testimonials = [
    {
        image: home1,
        text: 'KC (Know Connections) has completely changed the way I manage my contacts. Its so easy to use, and the integration with my CRM is seamless.',
        name: 'Jane Smith',
        role: 'Entrepreneur'
    },
    {
        image: home2,
        text: 'The real-time updates and analytics have given us incredible insights into our networking efforts. KC (Know Connections) is a game-changer!',
        name: 'John Doe',
        role: 'Sales Manager'
    },
    {
        image: home3,
        text: 'The real-time updates and analytics have given us incredible insights into our networking efforts. KC (Know Connections) is a game-changer!',
        name: 'Jane Smith',
        role: 'Entrepreneur'
    },
    {
        image: home1,
        text: 'KC (Know Connections) has completely changed the way I manage my contacts. Its so easy to use, and the integration with my CRM is seamless.',
        name: 'Jane Smith',
        role: 'Entrepreneur'
    }
];

const HomeTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); 

        return () => clearInterval(interval);
    }, [totalSlides]);

    const getVisibleTestimonials = () => {
        const firstIndex = currentIndex % totalSlides;
        const secondIndex = (currentIndex + 1) % totalSlides;
        const thirdIndex = (currentIndex + 2) % totalSlides;

        return [
            testimonials[firstIndex],
            testimonials[secondIndex],
            testimonials[thirdIndex],
        ];
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="home-testimonial-section">
            <div className="container">
                <center>
                    <div className="section-header">
                        <FaRegRectangleList /> Testimonials
                    </div>
                    <h2>What Our Users Say</h2>
                    <p className="subtitle">
                        Hear from professionals who have transformed their business networking with KC (Know Connections).
                    </p>
                </center>
                <div className="testimonial-grid">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} />
                            <p>{testimonial.text}</p>
                            <div className="testimonial-author">
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={currentIndex === index ? 'active' : ''}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
                <button className="view-all">View All <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default HomeTestimonial;
