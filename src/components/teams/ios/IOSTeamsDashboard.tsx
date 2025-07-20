import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { App, Page, Navbar, Tabbar, TabbarLink } from "konsta/react";
import {
  Activity,
  MessageCircle,
  Calendar,
  Phone,
  Users,
  Files,
} from "lucide-react";
import IOSActivityView from "./views/IOSActivityView";
import IOSChatView from "./views/IOSChatView";
import IOSCalendarView from "./views/IOSCalendarView";
import IOSCallsView from "./views/IOSCallsView";
import IOSTeamsView from "./views/IOSTeamsView";
import IOSFilesView from "./views/IOSFilesView";

const IOSTeamsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("/activity");

  const tabs = [
    { path: "/activity", label: "Activity", icon: Activity },
    { path: "/chat", label: "Chat", icon: MessageCircle },
    { path: "/calendar", label: "Calendar", icon: Calendar },
    { path: "/calls", label: "Calls", icon: Phone },
    { path: "/teams", label: "Teams", icon: Users },
    { path: "/files", label: "Files", icon: Files },
  ];

  return (
    <App theme="ios" className="h-screen">
      <Page>
        <Navbar
          title="Teams"
          className="!bg-[#6264a7]"
          titleClassName="!text-white !font-semibold"
          style={
            {
              "--k-navbar-bg-color": "#6264a7",
              "--k-navbar-text-color": "#ffffff",
            } as React.CSSProperties
          }
        />

        <div className="flex-1 overflow-auto pb-20">
          <Routes>
            <Route path="/" element={<IOSActivityView />} />
            <Route path="/activity" element={<IOSActivityView />} />
            <Route path="/chat" element={<IOSChatView />} />
            <Route path="/calendar" element={<IOSCalendarView />} />
            <Route path="/calls" element={<IOSCallsView />} />
            <Route path="/teams" element={<IOSTeamsView />} />
            <Route path="/files" element={<IOSFilesView />} />
          </Routes>
        </div>

        <Tabbar className="fixed bottom-0 left-0 right-0 !bg-white/95 backdrop-blur-sm border-t border-gray-200">
          {tabs.map(({ path, label, icon: Icon }) => (
            <TabbarLink
              key={path}
              active={activeTab === path}
              onClick={() => setActiveTab(path)}
              href={path}
              className={`flex flex-col items-center py-1 ${
                activeTab === path ? "!text-[#6264a7]" : "!text-gray-500"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{label}</span>
            </TabbarLink>
          ))}
        </Tabbar>
      </Page>
    </App>
  );
};

export default IOSTeamsDashboard;
