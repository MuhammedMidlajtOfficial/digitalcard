import { Tabs } from "antd";
import { useSearchParams } from "react-router-dom";
import UserIndividual from "./UserIndividual";
import UserEnterprises from "./UserEnterprises";

const { TabPane } = Tabs;

const IndexUsers = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("tab");
  return (
    <>
        <div className="bg-whiteText min-h-screen mx-auto">
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-3">
              <div className="bg-whiteText mt-4 rounded-lg project-card xl:col-span-2">
                <Tabs defaultActiveKey={page || "1"}>
                  <TabPane tab="Individual" key="1">
                    <UserIndividual />
                  </TabPane>
                  <TabPane tab="Enterprises" key="2">
                    <UserEnterprises />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default IndexUsers;
