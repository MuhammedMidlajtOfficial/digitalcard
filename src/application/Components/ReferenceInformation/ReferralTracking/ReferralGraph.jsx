import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import axiosInstance from "../../../../AxiosConfig";

const ReferralGraph = () => {
    const [referralData, setReferralData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [manualYear, setManualYear] = useState(new Date().getFullYear());
    const [graphData, setGraphData] = useState([]);

    // Fetch referral data from API
    const fetchReferralData = async () => {
        try {
            const response = await axiosInstance.get("/referal/details");
            if (response.status === 200) {
                setReferralData(
                    response.data.map((item) => ({
                        createdAt: new Date(item.createdAt),
                    }))
                );
            }
        } catch (error) {
            console.error("Error fetching referral data", error);
        }
    };

    // Aggregate data by month for the selected year
    const processGraphData = () => {
        const monthlyData = Array(12).fill(0); // Initialize array for 12 months
        referralData.forEach(({ createdAt }) => {
            if (createdAt.getFullYear() === selectedYear) {
                const month = createdAt.getMonth(); // Get month index (0-11)
                monthlyData[month] += 1; // Increment count for the month
            }
        });

        const formattedData = monthlyData.map((count, index) => ({
            month: new Date(2024, index).toLocaleString("default", {
                month: "short",
            }),
            referrals: count,
        }));

        setGraphData(formattedData);
    };

    useEffect(() => {
        fetchReferralData();
    }, []);

    useEffect(() => {
        processGraphData();
    }, [referralData, selectedYear]);

    const handleYearInputChange = (e) => {
        setManualYear(e.target.value);
    };

    const handleSearchYear = () => {
        const parsedYear = parseInt(manualYear, 10);
        if (!isNaN(parsedYear)) {
            setSelectedYear(parsedYear);
        }
    };

    return (
        <div className="container mt-5">
            <div className="referral-graph-main">
                <div className="graph-header d-flex justify-content-between align-items-center mb-4">
                    <h6 className="fs-20 fw-bold">Overview</h6>
                    <div className="year-controls d-flex align-items-center gap-2">
                        {/* Previous Year Button */}
                        {/* <button
                            className="arrow-button"
                            onClick={() => setSelectedYear(selectedYear - 1)}
                        >
                            &lt;
                        </button> */}

                        {/* Selected Year Button */}
                        {/* <button
                            className="referral-graph-button active"
                            style={{
                                backgroundColor: "#4285F4",
                                color: "#ffffff",
                                border: "none",
                            }}
                        >
                            {selectedYear}
                        </button> */}

                        {/* Next Year Button */}
                        {/* <button
                            className="arrow-button"
                            onClick={() => setSelectedYear(selectedYear + 1)}
                        >
                            &gt;
                        </button> */}

                        {/* Manual Year Input */}
                        <div className="manual-year-input d-flex align-items-center gap-2">
                            <input
                                type="number"
                                className="year-input"
                                value={manualYear}
                                onChange={handleYearInputChange}
                                placeholder="Year"
                                style={{
                                    width: "80px",
                                    padding: "5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                }}
                            />
                            <button
                                className="search-button"
                                onClick={handleSearchYear}
                                style={{
                                    backgroundColor: "#4285F4",
                                    color: "#ffffff",
                                    border: "none",
                                    padding: "6px 10px",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Graph */}
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={graphData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="referrals"
                            stroke="#4285F4"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ReferralGraph;
