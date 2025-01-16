export const allAdminRoutes = [
	{
	  title: "Dashboard",
	  description: "Access an overview of system activities and key metrics",
	  keyWords: ["dashboard", "overview", "home"],
	  route: "/admin/dashboard/overview",
	},
	{
	  title: "User Management",
	  description: "Manage user accounts, roles, and permissions",
	  keyWords: ["users", "add users", "manage users"],
	  route: "/admin/usermanagement/viewallusers",
	},
	{
	  title: "Enterprise",
	  description: "Manage enterprise users and their transactions",
	  keyWords: ["enterprise", "add enterprise", "enterprise users"],
	  route: "/admin/usermanagement/entepriseusers",
	},
	{
	  title: "Subscription",
	  description: "Create, manage, and monitor subscription plans",
	  keyWords: ["subscription", "add subscription", "create subscription", "subscription plan"],
	  route: "/admin/paymentmanagement/managesubscriptionplan",
	},
	{
	  title: "Payment",
	  description: "Review and manage payment history and transactions",
	  keyWords: ["payment", "payment history", "transaction history"],
	  route: "/admin/paymentmanagement/viewpayments",
	},
	{
	  title: "Invoice",
	  description: "Generate and view customer invoices",
	  keyWords: ["invoice", "generate invoice", "view invoices"],
	  route: "/admin/paymentmanagement/invoicelist",
	},
	{
	  title: "View Ticket",
	  description: "View and respond to customer support tickets",
	  keyWords: ["view ticket", "support tickets", "customer support"],
	  route: "/admin/supportticketsystem/viewandrespondticket",
	},
	{
	  title: "Assign Ticket",
	  description: "Assign support tickets to team members",
	  keyWords: ["assign", "assign ticket", "support assignment"],
	  route: "/admin/supportticketsystem/assign-ticket",
	},
	{
	  title: "Ticket Categories",
	  description: "Organize and manage ticket categories for support",
	  keyWords: ["categories", "ticket categories", "support categories"],
	  route: "/admin/supportticketsystem/ticket-categories",
	},
	{
	  title: "Notification",
	  description: "Send notifications to users and manage the notification system",
	  keyWords: ["notification", "send notification", "notification system"],
	  route: "/admin/notificationsystem/sendnotifications",
	},
	{
	  title: "Employee Details",
	  description: "View and manage details of employees in the system",
	  keyWords: ["add employee", "employee details", "employee list", "view employee"],
	  route: "/admin/employeeList",
	},
	{
	  title: "Settings",
	  description: "Manage general and account-specific settings",
	  keyWords: ["settings", "account settings", "profile settings"],
	  route: "/settings",
	},
	{
	  title: "Wati List",
	  description: "View and manage the Wati integration list",
	  keyWords: ["wati", "wati list", "wati integration"],
	  route: "/admin/watiList",
	},
	{
	  title: "Logs",
	  description: "View and analyze system activity logs",
	  keyWords: ["view logs", "logs", "activity logs"],
	  route: "/admin/logView",
	},
	{
	  title: "Configuration",
	  description: "Manage system configurations and chat settings",
	  keyWords: ["configuration", "add configuration", "system configuration"],
	  route: "/admin/AllConfigurationList",
	},
	{
	  title: "Settings",
	  description: "Access and update profile settings and preferences",
	  keyWords: ["settings", "profile settings", "profile", "password"],
	  route: "/admin/settings",
	},
  ];
  