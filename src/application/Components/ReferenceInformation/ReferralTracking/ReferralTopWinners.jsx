import React from "react";
import admin from "../../../Assets/Images/admin.png";
import medal1 from "../../../Assets/Images/medal1.png";
import medal2 from "../../../Assets/Images/medal2.png";
import medal3 from "../../../Assets/Images/medal3.png";

const ReferralTopWinners = () => {
  return (
    <div className="container">
      <div className="referral-top-winners-heading">Referral Top Winners</div>
      <div className="row">
        <div className="col-lg-4 mt-4">
          <div className="referral-card">
            <div className="d-flex justify-content-between">
              <div className="referral-top d-flex align-items-center">
                <h1 className="referral-numbers">#1</h1>
                <h2 className="referral-numbers-names">First Winner</h2>
              </div>
              <div>
                <img src={medal1} height={"28px"} width={"23px"} />
              </div>
            </div>
            <div>
              <hr style={{ border: "1px solid #474747" }} />
            </div>
            <div className="d-flex">
              <div>
                <img src={admin} alt="admin" height={"40px"} width={"40px"} />
              </div>
              <div className="referral-names">
                <h6>Charan K</h6>
                <h6>UI/UX Designer</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="referral-text">
                <h3>120</h3>
                <h5>Successfully Completed</h5>
              </div>
              <div className="referral-text">
                <h3>₹8000</h3>
                <h5>Rewards Earned</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4">
          <div className="referral-card">
            <div className="d-flex justify-content-between">
              <div className="referral-top d-flex align-items-center">
                <h1 className="referral-numbers">#2</h1>
                <h2 className="referral-numbers-names">Second Winner</h2>
              </div>
              <div>
                <img src={medal2} height={"28px"} width={"23px"} />
              </div>
            </div>
            <div>
              <hr style={{ border: "1px solid #474747" }} />
            </div>
            <div className="d-flex">
              <div>
                <img src={admin} alt="admin" height={"40px"} width={"40px"} />
              </div>
              <div className="referral-names">
                <h6>Alex J</h6>
                <h6>Frontend Developer</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="referral-text">
                <h3>100</h3>
                <h5>Successfully Completed</h5>
              </div>
              <div className="referral-text">
                <h3>₹6000</h3>
                <h5>Rewards Earned</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-4">
          <div className="referral-card">
            <div className="d-flex justify-content-between">
              <div className="referral-top d-flex align-items-center">
                <h1 className="referral-numbers">#3</h1>
                <h2 className="referral-numbers-names">Third Winner</h2>
              </div>
              <div>
                <img src={medal3} height={"28px"} width={"23px"} />
              </div>
            </div>
            <div>
              <hr style={{ border: "1px solid #474747" }} />
            </div>
            <div className="d-flex">
              <div>
                <img src={admin} alt="admin" height={"40px"} width={"40px"} />
              </div>
              <div className="referral-names">
                <h6>Sara L</h6>
                <h6>Backend Developer</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div className="referral-text">
                <h3>90</h3>
                <h5>Successfully Completed</h5>
              </div>
              <div className="referral-text">
                <h3>₹4000</h3>
                <h5>Rewards Earned</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTopWinners;
