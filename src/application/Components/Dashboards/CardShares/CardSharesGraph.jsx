

import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area, CartesianGrid } from 'recharts';

const CardSharesGraph = () => {
    const clientStatusData = [
        { month: 'Jan', value: 150 },
        { month: 'Feb', value: 200 },
        { month: 'Mar', value: 250 },
        { month: 'Apr', value: 370 },
        { month: 'May', value: 420 },
        { month: 'Jun', value: 500 },
        { month: 'Jul', value: 400 },
        { month: 'Aug', value: 450 },
        { month: 'Sep', value: 380 },
        { month: 'Oct', value: 470 },
        { month: 'Nov', value: 420 },
        { month: 'Dec', value: 500 },
    ];

    const period = (
        <Menu>
            <Menu.Item key="1">This Year</Menu.Item>
            <Menu.Item key="2">Last Year</Menu.Item>
        </Menu>
    );

    return (
        <>
              <div className="container">

            <div className="row mb-4">
                <div className="col-lg-12">
                    <div className="application-dashboard-graph">
                        <div className="d-flex justify-content-between admin-dashboard-content">
                            <div className="application-user-static-section mb-4">
                                <h2>Card Analytics</h2>
                            </div>
                            <div className="">
                                <Dropdown overlay={period} placement="bottomLeft">
                                    <Button>
                                        <Space>
                                            Sales Overview
                                            <FaAngleDown />
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="card-body">
                            <ResponsiveContainer width="100%" height={250}>
                                <AreaChart data={clientStatusData}>
                                <CartesianGrid strokeDasharray="1 1" vertical={false} />
                                    <XAxis dataKey="month" />
                                    <YAxis 
									label={{
										value: "Active Users",
										angle: -90,
										position: "insideLeft",
										style: {
										  textAnchor: "middle",
										  fontWeight: 500,
										  fontSize: "16px",
										  fill: "black",
										},
									  }}/>

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

        </>
    );
}

export default CardSharesGraph;
