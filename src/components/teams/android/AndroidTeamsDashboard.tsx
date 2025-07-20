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
import AndroidActivityView from "./views/AndroidActivityView";
import AndroidChatView from "./views/AndroidChatView";
import AndroidCalendarView from "./views/AndroidCalendarView";
import AndroidCallsView from "./views/AndroidCallsView";
import AndroidTeamsView from "./views/AndroidTeamsView";
import AndroidFilesView from "./views/AndroidFilesView";

const AndroidTeamsDashboard: React.FC = () => {
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
    <App theme="material" className="h-screen">
      <Page>
        <Navbar
          title="Teams"
          className="!bg-[#6264a7] !text-white"
          titleClassName="!text-white"
        />

        <div className="flex-1 overflow-auto pb-16">
          <Routes>
            <Route path="/" element={<AndroidActivityView />} />
            <Route path="/activity" element={<AndroidActivityView />} />
            <Route path="/chat" element={<AndroidChatView />} />
            <Route path="/calendar" element={<AndroidCalendarView />} />
            <Route path="/calls" element={<AndroidCallsView />} />
            <Route path="/teams" element={<AndroidTeamsView />} />
            <Route path="/files" element={<AndroidFilesView />} />
          </Routes>
        </div>

        <Tabbar className="fixed bottom-0 left-0 right-0 !bg-white border-t border-gray-200">
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
              <span className="text-xs mt-1">{label}</span>
            </TabbarLink>
          ))}
        </Tabbar>
      </Page>
    </App>
  );
};

export default AndroidTeamsDashboard;
