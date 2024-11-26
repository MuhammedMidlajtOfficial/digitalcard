import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdOutlinePendingActions } from "react-icons/md";
import axiosInstance from "../../../../AxiosConfig";

const ReferralCards = () => {
    const [referralCounts, setReferralCounts] = useState({
        total: 0,
        success: 0,
        pending: 0,
    });

    const fetchReferral = async () => {
        try {
            const url = "/referal/details";
            const response = await axiosInstance.get(url, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                const data = response.data;

                const totalReferrals = data.length;
                const successReferrals = data.filter(
                    (referral) => referral.status === "Success"
                ).length;
                const pendingReferrals = data.filter(
                    (referral) => referral.status === "Pending"
                ).length;

                setReferralCounts({
                    total: totalReferrals,
                    success: successReferrals,
                    pending: pendingReferrals,
                });
            }
        } catch (error) {
            console.error("Error fetching referral data", error);
        }
    };

    useEffect(() => {
        fetchReferral();
    }, []);

    const cardData = [
        {
            icon: FiUsers,
            title: "Total Referral",
            value: referralCounts.total,
            bgColor: "#afa8ff",
            textColor: "#ffffff",
        },
        {
            icon: SiTicktick,
            title: "Success Referral",
            value: referralCounts.success,
            bgColor: "#ffa0a9",
            textColor: "#ffffff",
        },
        {
            icon: MdOutlinePendingActions,
            title: "Pending Referral",
            value: referralCounts.pending,
            bgColor: "#ffcb64",
            textColor: "#ffffff",
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                {cardData.map(
                    (
                        { icon: Icon, title, value, bgColor, textColor },
                        index
                    ) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="application-dashboard-card">
                                <div className="card-body d-flex align-items-center">
                                    <div
                                        className="icon-wrapper p-2 rounded-circle me-3"
                                        style={{
                                            backgroundColor: bgColor,
                                            color: textColor,
                                        }}
                                    >
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h6 className="cards-subtitle mb-2">
                                            {title}
                                        </h6>
                                        <h2 className="cards-title mb-0">
                                            {value}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ReferralCards;
