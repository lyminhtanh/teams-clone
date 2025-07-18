import React from "react";
import {
  DashboardRounded,
  ShoppingCartRounded,
  InventoryRounded,
  PeopleRounded,
  AnalyticsRounded,
  SettingsRounded,
  StorefrontRounded,
  LocalShippingRounded,
  PaymentRounded,
  TrendingUpRounded,
  AssessmentRounded,
  NotificationsRounded,
} from "@mui/icons-material";
import { MenuConfig } from "../types/menuTypes";

/**
 * Demo configuration showing an e-commerce platform menu structure
 * This demonstrates how to create complex nested menus with badges and sections
 */
export const demoMenuConfig: MenuConfig = {
  sections: [
    {
      id: "overview",
      title: "Overview",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: <DashboardRounded />,
          path: "/",
          badge: "NEW",
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: <AnalyticsRounded />,
          path: "/analytics",
        },
      ],
    },
    {
      id: "sales",
      title: "Sales & Orders",
      items: [
        {
          id: "orders",
          label: "Orders",
          icon: <ShoppingCartRounded />,
          badge: "42",
          children: [
            {
              id: "orders-pending",
              label: "Pending Orders",
              path: "/orders/pending",
              badge: "15",
            },
            {
              id: "orders-processing",
              label: "Processing",
              path: "/orders/processing",
              badge: "8",
            },
            {
              id: "orders-shipped",
              label: "Shipped",
              path: "/orders/shipped",
            },
            {
              id: "orders-delivered",
              label: "Delivered",
              path: "/orders/delivered",
            },
            {
              id: "orders-returned",
              label: "Returns & Refunds",
              path: "/orders/returns",
              badge: "3",
            },
          ],
        },
        {
          id: "products",
          label: "Product Management",
          icon: <InventoryRounded />,
          children: [
            {
              id: "products-all",
              label: "All Products",
              path: "/products",
            },
            {
              id: "products-categories",
              label: "Categories",
              path: "/products/categories",
            },
            {
              id: "products-inventory",
              label: "Inventory",
              path: "/products/inventory",
              badge: "LOW",
            },
            {
              id: "products-pricing",
              label: "Pricing & Discounts",
              path: "/products/pricing",
            },
          ],
        },
        {
          id: "storefront",
          label: "Storefront",
          icon: <StorefrontRounded />,
          children: [
            {
              id: "storefront-design",
              label: "Design & Layout",
              path: "/storefront/design",
            },
            {
              id: "storefront-navigation",
              label: "Navigation",
              path: "/storefront/navigation",
            },
            {
              id: "storefront-promotions",
              label: "Promotions",
              path: "/storefront/promotions",
              badge: "2",
            },
          ],
        },
      ],
    },
    {
      id: "customers",
      title: "Customer Management",
      items: [
        {
          id: "customers-main",
          label: "Customers",
          icon: <PeopleRounded />,
          children: [
            {
              id: "customers-all",
              label: "All Customers",
              path: "/customers",
            },
            {
              id: "customers-segments",
              label: "Customer Segments",
              path: "/customers/segments",
            },
            {
              id: "customers-loyalty",
              label: "Loyalty Program",
              path: "/customers/loyalty",
            },
            {
              id: "customers-reviews",
              label: "Reviews & Ratings",
              path: "/customers/reviews",
              badge: "12",
            },
          ],
        },
        {
          id: "support",
          label: "Customer Support",
          icon: <NotificationsRounded />,
          badge: "7",
          children: [
            {
              id: "support-tickets",
              label: "Support Tickets",
              path: "/support/tickets",
              badge: "5",
            },
            {
              id: "support-chat",
              label: "Live Chat",
              path: "/support/chat",
              badge: "2",
            },
            {
              id: "support-faq",
              label: "FAQ Management",
              path: "/support/faq",
            },
          ],
        },
      ],
    },
    {
      id: "operations",
      title: "Operations",
      items: [
        {
          id: "shipping",
          label: "Shipping & Logistics",
          icon: <LocalShippingRounded />,
          children: [
            {
              id: "shipping-methods",
              label: "Shipping Methods",
              path: "/shipping/methods",
            },
            {
              id: "shipping-tracking",
              label: "Package Tracking",
              path: "/shipping/tracking",
            },
            {
              id: "shipping-zones",
              label: "Shipping Zones",
              path: "/shipping/zones",
            },
          ],
        },
        {
          id: "payments",
          label: "Payments",
          icon: <PaymentRounded />,
          children: [
            {
              id: "payments-methods",
              label: "Payment Methods",
              path: "/payments/methods",
            },
            {
              id: "payments-transactions",
              label: "Transactions",
              path: "/payments/transactions",
            },
            {
              id: "payments-disputes",
              label: "Disputes & Chargebacks",
              path: "/payments/disputes",
              badge: "1",
            },
          ],
        },
      ],
    },
    {
      id: "reports",
      title: "Reports & Analytics",
      items: [
        {
          id: "reports-sales",
          label: "Sales Reports",
          icon: <TrendingUpRounded />,
          path: "/reports/sales",
        },
        {
          id: "reports-performance",
          label: "Performance Analytics",
          icon: <AssessmentRounded />,
          path: "/reports/performance",
        },
      ],
    },
    {
      id: "system",
      title: "System",
      items: [
        {
          id: "settings",
          label: "Settings",
          icon: <SettingsRounded />,
          children: [
            {
              id: "settings-general",
              label: "General Settings",
              path: "/settings/general",
            },
            {
              id: "settings-users",
              label: "User Management",
              path: "/settings/users",
            },
            {
              id: "settings-permissions",
              label: "Roles & Permissions",
              path: "/settings/permissions",
            },
            {
              id: "settings-integrations",
              label: "Integrations",
              path: "/settings/integrations",
            },
            {
              id: "settings-backup",
              label: "Backup & Security",
              path: "/settings/backup",
            },
          ],
        },
      ],
    },
  ],
};

/**
 * Example of how to create a simple menu configuration
 */
export const simpleMenuConfig: MenuConfig = {
  sections: [
    {
      id: "main",
      items: [
        {
          id: "home",
          label: "Home",
          icon: <DashboardRounded />,
          path: "/",
        },
        {
          id: "products",
          label: "Products",
          icon: <InventoryRounded />,
          path: "/products",
        },
        {
          id: "customers",
          label: "Customers",
          icon: <PeopleRounded />,
          path: "/customers",
        },
        {
          id: "settings",
          label: "Settings",
          icon: <SettingsRounded />,
          path: "/settings",
        },
      ],
    },
  ],
};
