import React, { useState, useEffect } from "react";
import google from "../../Assets/image/home/Icons/google.svg";
import home1 from "../../Assets/image/home/users/jishnuPal.png";
import home2 from "../../Assets/image/home/users/anirudh.png";
import home3 from "../../Assets/image/home/users/manesh.png";
import home4 from "../../Assets/image/home/users/vanitha.png";

import { Avatar, Rate } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const testimonials = [
  {
    image: home2,
    text: "Diskuss has completely changed the way I manage my contacts. Its so easy to use, and the integration with my CRM is seamless.",
    name: "Anirudh Chatanath",
    role: "Business coach",
  },
  {
    image: home1,
    text: "The real-time updates and analytics have given us incredible insights into our networking efforts. Diskuss is a game-changer!",
    name: "Jishnu Pal",
    role: "Customized It Software",
  },
  {
    image: home3,
    text: "The real-time updates and analytics have given us incredible insights into our networking efforts. Diskuss is a game-changer!",
    name: "Manesh C",
    role: "Taxation & Audit",
  },
  {
    image: home4,
    text: "Diskuss has completely changed the way I manage my contacts. Its so easy to use, and the integration with my CRM is seamless.",
    name: "Vanitha S",
    role: "Event Management",
  },
];

const HomeNewTestimonial = () => {
  const [, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // const getVisibleTestimonials = () => {
  //     const firstIndex = currentIndex % totalSlides;
  //     const secondIndex = (currentIndex + 1) % totalSlides;
  //     const thirdIndex = (currentIndex + 2) % totalSlides;

  //     return [
  //         testimonials[firstIndex],
  //         testimonials[secondIndex],
  //         testimonials[thirdIndex],
  //     ];
  // };


  return (
    <div className="home-new-testimonial-section">
      <div className="container" style={{borderBottom:"1px solid var(--silver-tag-color)",paddingBottom:"50px"}}>
        <div className="row ">
          <div className="col-lg-6">
            <div className="home-new-testimonial-div">
              <div className="testimonial-tag">Reviews</div>
              <h4>
                Positive Reviews
                <br />
                <span>of Our Clients</span>
              </h4>
              <div className="d-flex align-items-center gap-2">
                <div>
                  <Rate disabled defaultValue={5} />
                </div>
                <p>4.5 / 5.0 rated on <img src={google} alt="" /> </p>
              </div>
              {/* <p className="mt-3">
                3k <Link to="/" style={{textDecoration:"none"}}><span>Total User Reviews</span> <FaArrowRight /></Link>
              </p> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="home-testimonial-card">
                  <div className="d-flex justify-content-between pb-3 align-items-center">
                    <div className="d-flex gap-2 align-items-center ">
                      <Avatar src={testimonial.image} size={64} />
                      <div className="home-testimonial-author">
                        <strong>{testimonial.name}</strong>
                        <br />
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                    <div>
                      <Rate disabled defaultValue={5} style={{fontSize:"14px"}}/>
                    </div>
                  </div>
                  <p>{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default HomeNewTestimonial;
