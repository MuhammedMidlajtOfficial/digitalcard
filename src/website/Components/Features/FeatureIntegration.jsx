import React from "react";
import gmail from "../../Assets/image/feature/icons/gmail.svg";
import todoist from "../../Assets/image/feature/icons/todoist.svg";
import slack from "../../Assets/image/feature/icons/slack.svg";
import notion from "../../Assets/image/feature/icons/notion.svg";
import asana from "../../Assets/image/feature/icons/asana.svg";
import trello from "../../Assets/image/feature/icons/trello.svg";

const FeatureIntegration = () => {
  const integrationsOne = [
    {
      name: "Todoist",
      logo: todoist,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Slack",
      logo: slack,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  const integrationsTwo = [
    {
      name: "Gmail",
      logo: gmail,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Notion",
      logo: notion,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Asana",
      logo: asana,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Trello",
      logo: trello,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div className="feature-integration-section">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="integration-header">
              <span className="tag">Integrations</span>
              <h2>Unlock Synergy, Seamless Integrations with Diskuss</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>

            <div className="integrations-grid">
              {integrationsOne.map((integrate, index) => (
                <div key={index} className="integration-card">
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      src={integrate.logo}
                      alt={integrate.name}
                      className="integration-logo"
                    />
                    <div>
                      <a href="/" className="visit-website">
                        Visit Website →
                      </a>
                    </div>
                  </div>
                  <div className="integration-content">
                    <h3>{integrate.name}</h3>
                    <p>{integrate.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="integrations-grid">
              {integrationsTwo.map((integration, index) => (
                <div key={index} className="integration-card">
                  <div className="d-flex align-items-center justify-content-between">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="integration-logo"
                    />
                    <div>
                      <a href="/" className="visit-website">
                        Visit Website →
                      </a>
                    </div>
                  </div>
                  <div className="integration-content">
                    <h3>{integration.name}</h3>
                    <p>{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureIntegration;
