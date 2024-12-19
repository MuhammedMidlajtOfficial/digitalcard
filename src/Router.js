import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

// website routes
import Home from "./website/Page/Home";
import Header from "./website/Layouts/Header";
import Footer from "./website/Layouts/Footer";
import About from "./website/Page/About";
import Features from "./website/Page/Features";
import Pricing from "./website/Page/Pricing";
import Resources from "./website/Page/Resources";
import ScrollToTop from "./ScrollToTop";
import Contact from "./website/Page/Contact";
import EmpPage from "./website/Page/employeePage" 

// application routes
import Login from "./application/Auth/Login";
import Signup from "./application/Auth/Signup";
import ForgotPassword from "./application/Auth/ForgotPassword";
import OtpScreen from "./application/Auth/OtpScreen";
import ConfirmPassword from "./application/Auth/ConfirmPassword";
import DashboardPage from "./application/Page/Dashboard/Index";
import TicketPage from "./application/Page/SupportTicketing/index";
import UserStaticPage from "./application/Page/Dashboard/UserStatic";
import CardSharesPage from "./application/Page/Dashboard/CardShares";
import RecentActivitiesPage from "./application/Page/Dashboard/RecentActivites";
import AllUsersPage from "./application/Page/UserManagement/AllUsers";
import UserEditPage from "./application/Page/UserManagement/UserProfile";
import DeleteUsersPage from "./application/Page/UserManagement/DeleteUserProfile";
import AddUsersPage from "./application/Page/UserManagement/AddUsers";
import CreateNewCardPage from "./application/Page/CardsManagement/CreateNewCard";
import EditExistingCardsPage from "./application/Page/CardsManagement/EditExistingCards";
import DeleteCardsPage from "./application/Page/CardsManagement/DeleteCards";
import CardTemplatePage from "./application/Page/CardsManagement/CardTemplate";
import ShareCardsPage from "./application/Page/CardsManagement/ShareCards";
import ViewCardDataPage from "./application/Page/CardsManagement/ViewCardData";
import ViewOrdersPage from "./application/Page/OrdersManagement/ViewOrders";
import ProcessOrdersPage from "./application/Page/OrdersManagement/ProcessOrder";
import PaymentVerificationPage from "./application/Page/OrdersManagement/PaymentVerification";
import UserActivityReportsPage from "./application/Page/AnalyticsDashboard/UserActivityReports";
import CardShareReportPage from "./application/Page/AnalyticsDashboard/CardShareReport";
import CustomReportsPage from "./application/Page/AnalyticsDashboard/CustomReports";
import ManagePaymentsPage from "./application/Page/PaymentManagment/ManagePayments";
import ViewPayersInfoPage from "./application/Page/PaymentManagment/ViewPayersInfo";
import BillingHistoryPage from "./application/Page/PaymentManagment/GenerateInvoice";
import SettingsPage from "./application/Page/Settings/SettingsPage";
import UserViewPage from "./application/Page/UserManagement/UserView";
import ReferralTrackingPage from "./application/Page/ReferenceInformation/ReferralTracking";
import ViewReferralUserPage from "./application/Page/ReferenceInformation/ViewReferralUser";
import IncentiveManagementPage from "./application/Page/ReferenceInformation/IncentiveManagement";
import OpenTickets from "./application/Page/SupportTicketing/Opentickets";
import AssignTickets from "./application/Page/SupportTicketing/AssignTickets";
import ManageEnterpriseUserPage from "./application/Page/UserManagement/ManageEnterpriseUser";
import CompanyUsersPage from "./application/Page/UserManagement/CompanyUsers";
import EditCompanyUsersPage from "./application/Page/UserManagement/EditCompanyUsers";
import StatusCategoriesPage from "./application/Page/UserManagement/StatusCategories";
import TicketCategory from "./application/Page/SupportTicketing/TicketCategory";
import IncentiveReferralViewPage from "./application/Page/ReferenceInformation/IncentiveReferralView";
import SubscriptionPlanPage from "./application/Page/ContentManagement/SubscriptionPlanPage";
import UserCategorizationPage from "./application/Page/UserManagement/UserCategorization";
import SlaTracking from "./application/Page/SupportTicketing/SlaTracking";
import TicketPrioritisation from "./application/Page/SupportTicketing/TicketPrioritisation";
import RollCreation from "./application/Page/RollBasesAccesses/RollCreation";
import RBACPermissions from "./application/Page/RollBasesAccesses/RBACPermissions";
import UserNotificationsPage from "./application/Page/NotificationSystem/UserNotificationsPage";
import AdminNotifications from "./application/Page/NotificationSystem/AdminNotifications";
import CustomizableAlerts from "./application/Page/NotificationSystem/CustomizableAlerts";
import SurveyListPage from "./application/Page/UserFeedBack/SurveyListPage";
import CreateSurveyPage from "./application/Page/UserFeedBack/CreateSurveyPage";
import OrderAnalysticsPage from "./application/Page/OrdersManagement/OrderAnalystics";
import OrderStatusPage from "./application/Page/OrdersManagement/OrderStatus";
import AllUsersViewPage from "./application/Page/AnalyticsDashboard/AllUsersView";
import UniqueVisitorsPage from "./application/Page/AnalyticsDashboard/UniqueVisitors";
import NumberOfSharesPage from "./application/Page/AnalyticsDashboard/NumberOfShares";
import ReceivedSurveyListPage from "./application/Page/UserFeedBack/ReceivedSurveyListPage";
import ViewReceivedSurveyPage from "./application/Page/UserFeedBack/ViewReceivedSurveyPage";
import FeedBackListPage from "./application/Page/UserFeedBack/ResponseListPage";
import ViewFeedbackPage from "./application/Page/UserFeedBack/ViewFeedbackPage";
import UserNegativeFeedbackPage from "./application/Page/UserFeedBack/UserNegativeFeedBackPage";

import AuditTrails from "./application/Page/RollBasesAccesses/AuditTrails";
import CampaignSetup from "./application/Page/AutomatedMarketing/CampaignSetup";
import ExportReportsPage from "./application/Page/AnalyticsDashboard/ExportReports";
import ManageSubscriptionPage from "./application/Page/PaymentManagment/ManageSubscriptionPlans";
import AddInvoicePage from "./application/Page/PaymentManagment/AddInvoice";
import ResponseAnalyticsPage from "./application/Page/UserFeedBack/ResponseAnalyticsPage";
import EmailSMSTemplate from "./application/Page/AutomatedMarketing/EmailSMSTemplate";
import ViewInvoicePage from "./application/Page/PaymentManagment/ViewInvoice";
import RenewalAndRemindersPage from "./application/Page/PaymentManagment/RenewalAndReminders";
import PaymentGatewayPage from "./application/Page/PaymentManagment/PaymentGateway";
import CampaignAnalytics from "./application/Page/AutomatedMarketing/CampaignAnalytics";
import AutomatedTriggers from "./application/Page/AutomatedMarketing/AutomatedTriggers";
import RefundProcessingPage from "./application/Page/PaymentManagment/RefundProcessing";
import CustomerRefundInfoPage from "./application/Page/PaymentManagment/CustomerRefundInfo";
import PrivacyPolicy from "./website/Page/PolicyPages/PrivacyPolicy";
import TermsAndConditions from "./website/Page/PolicyPages/TermsAndConditions";
import CancellationPolicy from "./website/Page/PolicyPages/CancellationPolicy";
import ShippingPolicy from "./website/Page/PolicyPages/ShippingPolicy";
import GetNotifications from "./application/Page/NotificationSystem/GetNotification";
import SendNotifications from "./application/Page/NotificationSystem/SendNotification";
import AuthProvider from "./application/Context/AuthContext";
import PrivateRoute from "./application/PrivateRoute";

const Loader = () => {
  return <div className="loader"></div>;
};

const MainContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // <Route path="/admin/dashboard/overview" element={<DashboardPage />} />;
  const applicationRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/otp-verification",
    "/create-password",
    "/admin",
    "/admin/dashboard/overview",
    "/admin/dashboard/userstatic",
    "/admin/dashboard/cardshares",
    "/admin/dashboard/recentactivities",
    "/admin/usermanagement/viewallusers",
    "/admin/usermanagement/editusers/:userId",
    "/admin/usermanagement/deleteusers",
    "/admin/usermanagement/addusers",
    "/admin/cardmanagement/deletecards",
    "/admin/cardmanagement/cardtemplates",
    "/admin/cardmanagement/sharecards",
    "/admin/ordermanagement/vieworders",
    "/admin/ordermanagement/processorders",
    "/admin/ordermanagement/orderstatus",
    "/admin/ordermanagement/paymentverification",
    "/admin/analyticsdashboad/useractivityreport",
    "/admin/analyticsdashboad/cardsharereport",
    "/admin/analyticsdashboad/exportreports",
    "/admin/analyticsdashboad/customreports",
    "/admin/paymentmanagement/managesubscriptionplan",
    "/admin/paymentmanagement/viewpayments",
    "/admin/paymentmanagement/viewpayments/viewpayerinfo",
    "/admin/paymentmanagement/invoicelist",
    "/admin/settings",
    "/admin/cardmanagement/viewcardsdata",
    "/admin/cardmanagement/createcard",
    "/admin/cardmanagement/editcard",
    "/admin/usermanagement/viewallusers/userview",
    "/admin/usermanagement/entepriseusers",
    "/admin/usermanagement/entepriseusers/companyusers/:userId",
    "/admin/usermanagement/companyusers/edit",
    "/admin/usermanagement/statuscategories",
    "/admin/supportticketsystem/viewandrespondticket",
    "/admin/supportticketsystem/viewandrespondticket/open-ticket",
    "/admin/supportticketsystem/assign-ticket",
    "/admin/supportticketsystem/ticket-categories",
    "/admin/supportticketsystem/sla-tracking",
    "/admin/supportticketsystem/ticket-prioritisation",
    "/admin/rollbasedaccess/rollcreation",
    "/admin/rollbasedaccess/rbac-permission",
    "/admin/rollbasedaccess/audit-trails",
    "/admin/automatedmarketing/campaign-setup",
    "/admin/automatedmarketing/email-sms-template",
    "/admin/automatedmarketing/campaignanalytics",
    "/admin/automatedmarketing/automated-triggers",
    "/admin/userfeedback/surveylist",
    "/admin/userfeedback/create-survey",
    "/admin/userfeedback/view-response",
    "/admin/userfeedback/received-surveys",
    "/admin/userfeedback/view-received-surveys",
    "/admin/userfeedback/view-feedback",
    "/admin/userfeedback/negative-feedbacks",
    "/admin/userfeedback/responseanalytics",
    "/admin/referenceinformation/referraltracking",
    "/admin/referenceinformation/viewreferraluser",
    "/admin/referenceinformation/incentivemanagement",
    "/admin/incentivemanagement/incentivereferralview",
    "/admin/contentmanagemnt/subscriptionplanpage",
    "/admin/notificationsystem/usernotificationpage",
    "/admin/notificationsystem/adminnotifications",
    "/admin/notificationsystem/customizablealerts",
    "/admin/usermanagement/usercategorization",
    "/admin/ordermanagement/orderanalystics",
    "/admin/analyticsdashboad/allusersview",
    "/admin/analyticsdashboad/uniquevisitors",
    "/admin/analyticsdashboad/numberofshares",
    "/admin/paymentmanagement/invoicelist/addinvoice",
    "/admin/paymentmanagement/invoicelist/viewinvoice",
    "/admin/paymentmanagement/renewal-reminders",
    "/admin/paymentmanagement/paymentgateway",
    "/admin/paymentmanagement/refundprocess",
    "/admin/paymentmanagement/customerrefundinfo",
    "/admin/notificationsystem/sendnotifications",
  ];

  const isApplicationRoute = applicationRoutes.some(route => location.pathname.startsWith(route));

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {/* Show header only if it's not an application route */}
          {!isApplicationRoute && <Header />}
          <Routes>
            {/* website routes */}
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="cancellation-policy"
              element={<CancellationPolicy />}
            />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="employee" element={<EmpPage />} />

            {/* application routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verification" element={<OtpScreen />} />
            <Route path="/create-password" element={<ConfirmPassword />} />

            
            <Route
              path="/admin/dashboard/overview"
              element={<PrivateRoute element={DashboardPage} />}
            />
            <Route
              path="/admin/supportticketsystem/viewandrespondticket"
              element={<PrivateRoute element={TicketPage} />}
            />
            <Route
              path="/admin/supportticketsystem/viewandrespondticket/open-ticket"
              element={<PrivateRoute element={OpenTickets} />}
            />
            <Route
              path="/admin/supportticketsystem/assign-ticket"
              element={<PrivateRoute element={AssignTickets} />}
            />
            <Route
              path="/admin/supportticketsystem/ticket-categories"
              element={<PrivateRoute element={TicketCategory} />}
            />
            <Route
              path="/admin/dashboard/userstatic"
              element={<PrivateRoute element={UserStaticPage} />}
            />
            <Route
              path="/admin/dashboard/cardshares"
              element={<PrivateRoute element={CardSharesPage} />}
            />
            <Route
              path="/admin/dashboard/recentactivities"
              element={<PrivateRoute element={RecentActivitiesPage} />}
            />
            <Route
              path="/admin/usermanagement/viewallusers"
              element={<PrivateRoute element={AllUsersPage} />}
            />
            <Route
              path="/admin/usermanagement/editusers/:userId"
              element={<PrivateRoute element={UserEditPage} />}
            />
            <Route
              path="/admin/usermanagement/deleteusers"
              element={<PrivateRoute element={DeleteUsersPage} />}
            />
            <Route
              path="/admin/usermanagement/addusers"
              element={<PrivateRoute element={AddUsersPage} />}
            />
            <Route
              path="/admin/cardmanagement/createcard"
              element={<PrivateRoute element={CreateNewCardPage} />}
            />
            <Route
              path="/admin/cardmanagement/editcard"
              element={<PrivateRoute element={EditExistingCardsPage} />}
            />
            <Route
              path="/admin/cardmanagement/deletecards"
              element={<PrivateRoute element={DeleteCardsPage} />}
            />
            <Route
              path="/admin/cardmanagement/cardtemplates"
              element={<PrivateRoute element={CardTemplatePage} />}
            />
            <Route
              path="/admin/cardmanagement/sharecards"
              element={<PrivateRoute element={ShareCardsPage} />}
            />
            <Route
              path="/admin/cardmanagement/viewcardsdata"
              element={<PrivateRoute element={ViewCardDataPage} />}
            />
            <Route
              path="/admin/ordermanagement/vieworders"
              element={<PrivateRoute element={ViewOrdersPage} />}
            />
            <Route
              path="/admin/ordermanagement/processorders"
              element={<PrivateRoute element={ProcessOrdersPage} />}
            />
            <Route
              path="/admin/ordermanagement/orderstatus"
              element={<PrivateRoute element={OrderStatusPage} />}
            />
            <Route
              path="/admin/ordermanagement/paymentverification"
              element={<PrivateRoute element={PaymentVerificationPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/useractivityreport"
              element={<PrivateRoute element={UserActivityReportsPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/cardsharereport"
              element={<PrivateRoute element={CardShareReportPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/exportreports"
              element={<PrivateRoute element={ExportReportsPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/customreports"
              element={<PrivateRoute element={CustomReportsPage} />}
            />
            <Route
              path="/admin/paymentmanagement/managesubscriptionplan"
              element={<PrivateRoute element={ManageSubscriptionPage} />}
            />
            <Route
              path="/admin/paymentmanagement/viewpayments"
              element={<PrivateRoute element={ManagePaymentsPage} />}
            />
            <Route
              path="/admin/paymentmanagement/viewpayments/viewpayerinfo"
              element={<PrivateRoute element={ViewPayersInfoPage} />}
            />
            <Route
              path="/admin/paymentmanagement/invoicelist"
              element={<PrivateRoute element={BillingHistoryPage} />}
            />
            <Route
              path="/admin/settings"
              element={<PrivateRoute element={SettingsPage} />}
            />
            <Route
              path="/admin/usermanagement/viewallusers/userview"
              element={<PrivateRoute element={UserViewPage} />}
            />
            <Route
              path="/admin/usermanagement/entepriseusers"
              element={<PrivateRoute element={ManageEnterpriseUserPage} />}
            />
            <Route
              path="/admin/usermanagement/entepriseusers/companyusers/:userId"
              element={<PrivateRoute element={CompanyUsersPage} />}
            />
            <Route
              path="/admin/usermanagement/companyusers/edit"
              element={<PrivateRoute element={EditCompanyUsersPage} />}
            />
            <Route
              path="/admin/usermanagement/statuscategories"
              element={<PrivateRoute element={StatusCategoriesPage} />}
            />
            <Route
              path="/admin/referenceinformation/referraltracking"
              element={<PrivateRoute element={ReferralTrackingPage} />}
            />
            <Route
              path="/admin/referenceinformation/viewreferraluser"
              element={<PrivateRoute element={ViewReferralUserPage} />}
            />
            <Route
              path="/admin/referenceinformation/incentivemanagement"
              element={<PrivateRoute element={IncentiveManagementPage} />}
            />
            <Route
              path="/admin/incentivemanagement/incentivereferralview"
              element={<PrivateRoute element={IncentiveReferralViewPage} />}
            />
            <Route
              path="/admin/contentmanagemnt/subscriptionplanpage"
              element={<PrivateRoute element={SubscriptionPlanPage} />}
            />
            <Route
              path="/admin/usermanagement/usercategorization"
              element={<PrivateRoute element={UserCategorizationPage} />}
            />
            <Route
              path="/admin/ordermanagement/orderanalystics"
              element={<PrivateRoute element={OrderAnalysticsPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/allusersview"
              element={<PrivateRoute element={AllUsersViewPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/uniquevisitors"
              element={<PrivateRoute element={UniqueVisitorsPage} />}
            />
            <Route
              path="/admin/analyticsdashboad/numberofshares"
              element={<PrivateRoute element={NumberOfSharesPage} />}
            />
            <Route
              path="/admin/notificationsystem/usernotificationpage"
              element={<PrivateRoute element={UserNotificationsPage} />}
            />
            <Route
              path="/admin/notificationsystem/adminnotifications"
              element={<PrivateRoute element={AdminNotifications} />}
            />
            <Route
              path="/admin/notificationsystem/customizablealerts"
              element={<PrivateRoute element={CustomizableAlerts} />}
            />
            <Route
              path="/admin/notificationsystem/sendnotifications"
              element={<PrivateRoute element={SendNotifications} />}
            />
            <Route
              path="/admin/notificationsystem/getnotifications"
              element={<PrivateRoute element={GetNotifications} />}
            />
            <Route
              path="/admin/userfeedback/surveylist"
              element={<PrivateRoute element={SurveyListPage} />}
            />
            <Route
              path="/admin/userfeedback/create-survey"
              element={<PrivateRoute element={CreateSurveyPage} />}
            />
            <Route
              path="/admin/userfeedback/view-response"
              element={<PrivateRoute element={FeedBackListPage} />}
            />
            <Route
              path="/admin/userfeedback/received-surveys"
              element={<PrivateRoute element={ReceivedSurveyListPage} />}
            />
            <Route
              path="/admin/userfeedback/view-received-surveys"
              element={<PrivateRoute element={ViewReceivedSurveyPage} />}
            />
            <Route
              path="/admin/userfeedback/view-feedback"
              element={<PrivateRoute element={ViewFeedbackPage} />}
            />
            <Route
              path="/admin/userfeedback/negative-feedbacks"
              element={<PrivateRoute element={UserNegativeFeedbackPage} />}
            />
            <Route
              path="/admin/supportticketsystem/sla-tracking"
              element={<PrivateRoute element={SlaTracking} />}
            />
            <Route
              path="/admin/supportticketsystem/ticket-prioritisation"
              element={<PrivateRoute element={TicketPrioritisation} />}
            />
            <Route
              path="/admin/rollbasedaccess/rollcreation"
              element={<PrivateRoute element={RollCreation} />}
            />
            <Route
              path="/admin/rollbasedaccess/rbac-permission"
              element={<PrivateRoute element={RBACPermissions} />}
            />
            <Route
              path="/admin/rollbasedaccess/audit-trails"
              element={<PrivateRoute element={AuditTrails} />}
            />
            <Route
              path="/admin/automatedmarketing/campaign-setup"
              element={<PrivateRoute element={CampaignSetup} />}
            />
            <Route
              path="/admin/paymentmanagement/invoicelist/addinvoice"
              element={<PrivateRoute element={AddInvoicePage} />}
            />
            <Route
              path="/admin/userfeedback/responseanalytics"
              element={<PrivateRoute element={ResponseAnalyticsPage} />}
            />
            <Route
              path="/admin/automatedmarketing/email-sms-template"
              element={<PrivateRoute element={EmailSMSTemplate} />}
            />
            <Route
              path="/admin/paymentmanagement/invoicelist/viewinvoice"
              element={<PrivateRoute element={ViewInvoicePage} />}
            />
            <Route
              path="/admin/paymentmanagement/renewal-reminders"
              element={<PrivateRoute element={RenewalAndRemindersPage} />}
            />
          </Routes>

          {/* Show footer only if it's not an application route  */}
          {!isApplicationRoute && <Footer />}
        </>
      )}
    </>
  );
};

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MainContent />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
