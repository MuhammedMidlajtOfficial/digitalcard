import React from "react";
import user3 from "../../../Assets/Images/user3.png";
import { TbProgress } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import { PiHandWithdraw } from "react-icons/pi";
import { PiHandCoins } from "react-icons/pi";
import { Avatar } from "antd";
import { IncentiveViewReferralUser } from "./IncentiveViewReferralUser";
import { IncentiveViewWithdrawHistory } from "./IncentiveViewWithdrawHistory";

const IncentiveReferralView = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row view-referral-user-head">
          <div className="col-12 col-lg-4 d-flex gap-2 align-items-center mb-3 mb-lg-0">
            <div className="view-referral-user-image">
              <Avatar size={64} src={user3} />
            </div>
            <div className="view-referral-user-h6">
              <h6>Siddu M</h6>
              <h6>UI/UX Designers</h6>
            </div>
          </div>

          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="view-referral-user-progress text-center">
              <h6>
                <TbProgress />
              </h6>
              <h6>6</h6>
              <h6>In progress</h6>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="view-referral-user-rejected text-center">
              <h6>
                <RxCrossCircled />
              </h6>
              <h6>1</h6>
              <h6>Rejected</h6>
            </div>
          </div>
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="view-referral-user-withdraw text-center">
              <h6>
                <PiHandWithdraw />
              </h6>
              <h6>₹1000</h6>
              <h6>Withdraw</h6>
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="view-referral-user-earn text-center">
              <h6>
                <PiHandCoins />
              </h6>
              <h6>₹2340</h6>
              <h6>Total earned</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <IncentiveViewReferralUser />
      </div>
      <div className="mt-3">
        <IncentiveViewWithdrawHistory />
      </div>
    </>
  );
};

export default IncentiveReferralView;
