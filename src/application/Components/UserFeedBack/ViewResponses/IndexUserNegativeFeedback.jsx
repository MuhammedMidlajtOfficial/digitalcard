import { Tabs } from "antd";
import { useSearchParams } from "react-router-dom";
import AllUserNegativeFeedback from "./AllUserNegativeFeedback";
import SolvedUserNegativeFeedback from "./SolvedUserNegativeFeedback";
import UnsolvedUserNegativeFeedback from "./UnsolvedUserNegativeFeedback";

const { TabPane } = Tabs;

const IndexUserNegativeFeedback = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("tab");
  return (
    <>
    <div className='container'>
      <div className="bg-whiteText min-h-screen mx-auto">
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-3">
            <div className="bg-whiteText mt-4 rounded-lg project-card xl:col-span-2">
              <Tabs defaultActiveKey={page || "1"}>
                <TabPane tab="All" key="1">
                  <AllUserNegativeFeedback />
                </TabPane>
                <TabPane tab="Solved" key="2">
                  <SolvedUserNegativeFeedback />
                </TabPane>
                <TabPane tab="UnSolved" key="3">
                  <UnsolvedUserNegativeFeedback/>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default IndexUserNegativeFeedback;

