import { Tabs } from "antd";
import { useSearchParams } from "react-router-dom";
import ActiveCustomizableAlerts from "./ActiveCustomizableAlerts";
import CompletedCustomizableAlerts from "./CompletedCustomizableAlerts";
import DraftCustomizableAlerts from "./DraftCustomizableAlerts";


const { TabPane } = Tabs;

const IndexAlerts = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("tab");
  return (
    <>
        <div className="bg-whiteText min-h-screen mx-auto">
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-3">
              <div className="bg-whiteText mt-4 rounded-lg project-card xl:col-span-2">
                <Tabs defaultActiveKey={page || "1"}>
                  <TabPane tab="Active" key="1">
                    <ActiveCustomizableAlerts />
                  </TabPane>
                  <TabPane tab="Completed" key="2">
                    <CompletedCustomizableAlerts />
                  </TabPane>
                  <TabPane tab="Draft" key="3">
                    <DraftCustomizableAlerts />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default IndexAlerts;



