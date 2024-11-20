import React from "react";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,Area
} from "recharts";
export const ResponseDashboardFeedBack = () => {
  const navigate=useNavigate();
  const data = [
    { name: "1 / 12", value: 100 },
    { name: "2 / 12", value: 120 },
    { name: "3 / 12", value: 150 },
    { name: "4 / 12", value: 180 },
    { name: "5 / 12", value: 220 },
    { name: "6 / 12", value: 350 },
    { name: "7 / 12", value: 400 },
    { name: "8 / 12", value: 450 },
    { name: "9 / 12", value: 500 },
    { name: "10 / 12", value: 600 },
    { name: "11 / 12", value: 650 },
    { name: "12 / 12", value: 750 },
  ];
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="response-feedback-card">
          <h4>Negative FeedBacks</h4>
          <p className="mt-2">
            <FaRegCommentDots /> Not Working Properly
          </p>
          <p>
            <FaRegCommentDots /> Can't Connect to website
          </p>
          <p>
            <FaRegCommentDots /> App Issues
          </p>
          <p className="mt-2">
            <FaRegCommentDots /> Not Working Properly
          </p>
          <button className="create-survey-button" onClick={()=>navigate("/admin/userfeedback/negative-feedbacks")}>
            View <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="response-feedback-card">
          <h4>Monthly FeedBacks</h4>
          <div className="d-flex gap-2 flex-column flex-lg-row flex-xl-row">
            <div>
              <h2>5244</h2>
              <h3>Last 60 days</h3>
              <ul>
                <li>
                  You gave a 15% growth<br/>comparing to previous month.
                </li>
              </ul>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="1 1" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis
                    label={{
                     
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fontWeight: 500,
                        fontSize: "16px",
                        fill: "black",
                      },
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#7f56d9"
                    fill="#7f56d9"
                    strokeOpacity={1}
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
