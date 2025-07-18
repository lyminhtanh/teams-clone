import React from "react";
import {
  DashboardRounded,
  PeopleRounded,
  BusinessCenterRounded,
  ContactsRounded,
  AssignmentRounded,
  AssessmentRounded,
  SettingsRounded,
  HelpOutlineRounded,
  PersonRounded,
  GroupRounded,
  CorporateFareRounded,
  TrendingUpRounded,
  AnalyticsRounded,
  CalendarTodayRounded,
  EmailRounded,
  NotificationsRounded,
  SecurityRounded,
  PaymentRounded,
  IntegrationInstructionsRounded,
  BugReportRounded,
  FeedbackRounded,
  QuestionAnswerRounded,
  ArticleRounded,
} from "@mui/icons-material";
import { MenuConfig } from "../types/menuTypes";

export const menuConfig: MenuConfig = {
  sections: [
    {
      id: "main",
      title: "Main Navigation",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: <DashboardRounded />,
          path: "/",
        },
        {
          id: "customers",
          label: "Customers",
          icon: <PeopleRounded />,
          children: [
            {
              id: "customers-all",
              label: "All Customers",
              icon: <GroupRounded />,
              path: "/customers",
            },
            {
              id: "customers-individual",
              label: "Individual",
              icon: <PersonRounded />,
              path: "/customers/individual",
            },
            {
              id: "customers-corporate",
              label: "Corporate",
              icon: <CorporateFareRounded />,
              path: "/customers/corporate",
              badge: "12",
            },
          ],
        },
        {
          id: "deals",
          label: "Deals & Sales",
          icon: <BusinessCenterRounded />,
          children: [
            {
              id: "deals-pipeline",
              label: "Sales Pipeline",
              icon: <TrendingUpRounded />,
              path: "/deals",
            },
            {
              id: "deals-analytics",
              label: "Sales Analytics",
              icon: <AnalyticsRounded />,
              path: "/deals/analytics",
            },
            {
              id: "deals-forecasting",
              label: "Forecasting",
              icon: <AssessmentRounded />,
              path: "/deals/forecasting",
            },
          ],
        },
        {
          id: "contacts",
          label: "Contacts",
          icon: <ContactsRounded />,
          path: "/contacts",
          badge: "24",
        },
        {
          id: "tasks",
          label: "Tasks & Activities",
          icon: <AssignmentRounded />,
          children: [
            {
              id: "tasks-calendar",
              label: "Calendar",
              icon: <CalendarTodayRounded />,
              path: "/tasks/calendar",
            },
            {
              id: "tasks-emails",
              label: "Email Management",
              icon: <EmailRounded />,
              path: "/tasks/emails",
              badge: "5",
            },
            {
              id: "tasks-reminders",
              label: "Reminders",
              icon: <NotificationsRounded />,
              path: "/tasks/reminders",
            },
          ],
        },
        {
          id: "reports",
          label: "Reports",
          icon: <AssessmentRounded />,
          path: "/reports",
        },
      ],
    },
    {
      id: "settings",
      title: "Administration",
      items: [
        {
          id: "settings-main",
          label: "Settings",
          icon: <SettingsRounded />,
          children: [
            {
              id: "settings-general",
              label: "General Settings",
              icon: <SettingsRounded />,
              path: "/settings/general",
            },
            {
              id: "settings-security",
              label: "Security",
              icon: <SecurityRounded />,
              path: "/settings/security",
            },
            {
              id: "settings-billing",
              label: "Billing & Plans",
              icon: <PaymentRounded />,
              path: "/settings/billing",
            },
            {
              id: "settings-integrations",
              label: "Integrations",
              icon: <IntegrationInstructionsRounded />,
              path: "/settings/integrations",
            },
          ],
        },
        {
          id: "help",
          label: "Help & Support",
          icon: <HelpOutlineRounded />,
          children: [
            {
              id: "help-documentation",
              label: "Documentation",
              icon: <ArticleRounded />,
              path: "/help/docs",
            },
            {
              id: "help-support",
              label: "Contact Support",
              icon: <QuestionAnswerRounded />,
              path: "/help/support",
            },
            {
              id: "help-feedback",
              label: "Send Feedback",
              icon: <FeedbackRounded />,
              path: "/help/feedback",
            },
            {
              id: "help-bugs",
              label: "Report Bug",
              icon: <BugReportRounded />,
              path: "/help/bugs",
            },
          ],
        },
      ],
    },
  ],
};
