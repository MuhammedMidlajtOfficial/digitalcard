import React, { useEffect, useState } from "react";
import admin from "../../../Assets/Images/admin.png";
import medal1 from "../../../Assets/Images/medal1.png";
import medal2 from "../../../Assets/Images/medal2.png";
import medal3 from "../../../Assets/Images/medal3.png";
import axiosInstance from "../../../../AxiosConfig";

const ReferralTopWinners = () => {
    const [topReferrers, setTopReferrers] = useState([]);

    const fetchReferral = async () => {
        try {
            const response = await axiosInstance.get("/referal/top-referrer", {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200 && response.data.topReferrers) {
                setTopReferrers(response.data.topReferrers.slice(0, 3)); // Get top 3 referrers
            }
            console.log('topReferrers--',topReferrers);
        } catch (error) {
            console.error("Error fetching referral data", error);
        }
    };

    useEffect(() => {
        fetchReferral();
    }, []);

    const medalImages = [medal1, medal2, medal3];

    return (
        <div className="container">
            <div className="referral-top-winners-heading">
                Referral Top Winners
            </div>
            <div className="row">
                {topReferrers.map((referrer, index) => {
                    // Set default values in case some data is missing
                    const {
                        username,
                        totalRewardsEarned,
                        referralCount,
                        role,
                    } = referrer;
                    const medal = medalImages[index];

                    return (
                        <div
                            className="col-lg-4 mt-4"
                            key={referrer.id || index}
                        >
                            <div className="referral-card">
                                <div className="d-flex justify-content-between">
                                    <div className="referral-top d-flex align-items-center">
                                        <h1 className="referral-numbers">
                                            #{index + 1}
                                        </h1>
                                        <h2 className="referral-numbers-names">
                                            {index === 0
                                                ? "First Winner"
                                                : index === 1
                                                ? "Second Winner"
                                                : "Third Winner"}
                                        </h2>
                                    </div>
                                    <div>
                                        <img
                                            src={medal}
                                            height={"28px"}
                                            width={"23px"}
                                            alt="medal"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <hr
                                        style={{ border: "1px solid #474747" }}
                                    />
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <img
                                            src={admin}
                                            alt="admin"
                                            height={"40px"}
                                            width={"40px"}
                                        />
                                    </div>
                                    <div className="referral-names">
                                        <h6>{username || "Unknown User"}</h6>
                                        <h6>{role}</h6>{" "}
                                        {/* Replace with actual role if available */}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="referral-text">
                                        <h3>{referralCount || 0}</h3>
                                        <h5>Successfully Completed</h5>
                                    </div>
                                    <div className="referral-text">
                                        <h3>₹{totalRewardsEarned || 0}</h3>
                                        <h5>Rewards Earned</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ReferralTopWinners;
