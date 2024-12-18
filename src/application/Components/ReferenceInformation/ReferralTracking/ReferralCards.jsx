import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { SiTicktick } from "react-icons/si";
import { MdOutlinePendingActions } from "react-icons/md";
// import axiosInstance from "../../../../AxiosConfig";

const ReferralCards = () => {
    const [referralCounts, setReferralCounts] = useState({
        "totalReferrals": 0,
        "cardCreated": 0,
        "registered": 0,
        "invited": 0,
        "referralCode": "",
        "totalCoins": 0,
        "invitedUsers": [],
    });

    // const fetchReferral2 = async () => {
    //     try {
    //         const url = "/referal/details";
    //         const response = await axiosInstance.get(url, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (response.status === 200) {
    //             const data = response.data;

    //             const totalReferrals = data.length;
    //             const successReferrals = data.filter(
    //                 (referral) =>
    //                     referral.status === "Card Created" ||
    //                     referral.status === "Registered"
    //             ).length;
    //             const pendingReferrals = data.filter(
    //                 (referral) => referral.status === "Invited"

    //             ).length;

    //             setReferralCounts({
    //                 total: totalReferrals,
    //                 success: successReferrals,
    //                 pending: pendingReferrals,
    //             });
    //         }
    //     } catch (error) {
    //         console.error("Error fetching referral data", error);
    //     }
    // };
    const fetchReferral = async () => {
        try {
            let userId =  "6731e31c1637d690957d8e69";
            const url = `https://diskuss-1mv4.onrender.com/api/v1/referral/details/${userId}`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log("data ::: ", response);
            setReferralCounts(data);

            // console.log("referralCounts : ", referralCounts);
        } catch (error) {
            console.error("Error fetching referral data: ", error);
        }
    }

    useEffect(() => {
        
        fetchReferral();
        console.log("referralCounts", referralCounts);

    }, []);

    const cardData = [
        {
            icon: FiUsers,
            title: "Total Referral",
            value: referralCounts.totalReferrals,
            bgColor: "#afa8ff",
            textColor: "#ffffff",
        },
        {
            icon: SiTicktick,
            title: "Card Referral",
            value: referralCounts.cardCreated,
            bgColor: "#ffa0a9",
            textColor: "#ffffff",
        },
        {
            icon: MdOutlinePendingActions,
            title: "Registered Referral",
            value: referralCounts.registered,
            bgColor: "#ffcb64",
            textColor: "#ffffff",
        },
        {
            icon: MdOutlinePendingActions,
            title: "Pending Referral",
            value: referralCounts.invited,
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
                        <div key={index} className="col-lg-3 mb-4">
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
