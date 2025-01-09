import React from 'react'
import icon1 from "../../Assets/image/feature/icons/chip.svg"
import icon2 from "../../Assets/image/feature/icons/qrcode.svg"
import icon3 from "../../Assets/image/feature/icons/ios.svg"
import icon4 from "../../Assets/image/feature/icons/plugandplay.svg"
import ScrollAnimation from '../../../ScrollAnimation'


export const FeaturesCards = () => {
  return (
    <div className='features-card-section'>
        <div className='container'>
            <div className='row'>
                <ScrollAnimation animationClass="animate__fadeInDown" className='features-cards-div'>
                    <h2>Enhance Networking with Insights, Security, and Seamless Integrations Today! </h2>
                    <p>Leverage advanced analytics, robust security, and seamless integrations to optimize your networking experience and strengthen your professional connections effortlessly. </p>

                </ScrollAnimation>

            </div>
            <div className='row mt-5'>
              <div className='col-lg-6 mb-4'>
                <div className='feature-features-card'>
                    <img src={icon2} alt="" />
                    <h4>Advanced Analytics & Reporting</h4>
                    <p>Diskuss offers analytics and reporting to help you understand contact engagement and interaction trends. </p>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='feature-features-card'>
                    <img src={icon3} alt="" />
                    <h4>Secure Data and Privacy Controls</h4>
                    <p>Diskuss prioritizes data privacy with industry-standard encryption and access controls, ensuring that your information is stored. </p>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='feature-features-card'>
                    <img src={icon4} alt="" />
                    <h4>Highlight Unique Software</h4>
                    <p>Diskuss integrates with essential apps to streamline your workflow. </p>
                </div>
              </div>
              <div className='col-lg-6 mb-4'>
                <div className='feature-features-card'>
                    <img src={icon1} alt="" />
                    <h4>Device Support</h4>
                    <p>Works on all smartphones running both
                    Android or iOS.</p>
                </div>
                
              </div>


            </div>

        </div>

    </div>
  )
}
