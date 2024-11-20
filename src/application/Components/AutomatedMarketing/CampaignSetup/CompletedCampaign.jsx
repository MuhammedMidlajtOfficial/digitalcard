import { Card, Divider, Dropdown, Menu } from "antd";
import React from "react";
import { CiUser } from "react-icons/ci";
import { RxDotsVertical } from "react-icons/rx";

const CompletedCampaign = () => {
  const actionMenu = (
    <Menu>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );
  const campaigns = [
    {
      id: 1,
      title: "Customer feed back request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
      stats: {
        delivered: "15.2k",
        opened: "75.12%",
        clicked: "22.44%",
        converted: "5.02%",
      },
      icon: (
        <CiUser
          className="ActiveCompaign-icons"
          style={{ backgroundColor: "#E34A72" }}
        />
      ),
    },
  ];
  return (
    <div>
      <h6>{campaigns.length} Campaigns</h6>
      <div className="row mb-4">
        {campaigns.map((campaign) => (
          <Card className="col-lg-12 mt-4" key={campaign.id}>
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                {campaign.icon}
                <div className="">
                  <p className="CampaignSetup-card-headline">
                    {campaign.title}
                  </p>
                  <p className="CampaignSetup-card-description">
                    {campaign.description}
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 activeCompaign-status-div">
                <p className="activeCompaign-status-p mb-0">Running</p>
                <div>
                  <Dropdown overlay={actionMenu} trigger={["click"]}>
                    <span style={{ cursor: "pointer" }}>
                      <RxDotsVertical />
                    </span>
                  </Dropdown>
                </div>
              </div>
            </div>

            <Divider style={{ margin: "0px" }} />
            <div className="row">
              <div className="d-flex justify-content-around col-lg-3 activeCampaign-4divs">
                <div className="mb-0">
                  <p className="CampaignSetup-card-description mb-0">
                    {campaign.stats.delivered}
                  </p>
                  <p className="CampaignSetup-card-description mb-0">
                    Delivered
                  </p>
                </div>
                <Divider
                  className="activeCampaign-vertical-divider"
                  type="vertical"
                />
              </div>
              <div className="d-flex justify-content-around col-lg-3 activeCampaign-4divs">
                <div className="mb-0">
                  <p className="CampaignSetup-card-description mb-0">
                    {campaign.stats.opened}
                  </p>
                  <p className="CampaignSetup-card-description mb-0">Opened</p>
                </div>
                <Divider
                  className="activeCampaign-vertical-divider"
                  type="vertical"
                />
              </div>
              <div className="d-flex justify-content-around col-lg-3 activeCampaign-4divs">
                <div className="mb-0">
                  <p className="CampaignSetup-card-description mb-0">
                    {campaign.stats.clicked}
                  </p>
                  <p className="CampaignSetup-card-description mb-0">Clicked</p>
                </div>
                <Divider
                  className="activeCampaign-vertical-divider"
                  type="vertical"
                />
              </div>
              <div className="col-lg-3 activeCampaign-4divs">
                <div className="mb-0">
                  <p className="CampaignSetup-card-description mb-0">
                    {campaign.stats.converted}
                  </p>
                  <p className="CampaignSetup-card-description mb-0">
                    Converted
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompletedCampaign;
