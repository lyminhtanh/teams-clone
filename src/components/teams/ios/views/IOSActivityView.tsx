import React from "react";
import {
  Block,
  BlockTitle,
  List,
  ListItem,
  Card,
  Badge,
  Button,
} from "konsta/react";
import {
  Clock,
  MessageSquare,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react";

const IOSActivityView: React.FC = () => {
  const recentActivities = [
    {
      id: 1,
      type: "message",
      title: "New message from Sarah Wilson",
      subtitle: "Project update discussion",
      time: "2 min ago",
      icon: MessageSquare,
      color: "text-blue-500",
    },
    {
      id: 2,
      type: "meeting",
      title: "Team standup meeting",
      subtitle: "Daily sync with development team",
      time: "15 min ago",
      icon: Calendar,
      color: "text-green-500",
    },
    {
      id: 3,
      type: "team",
      title: "John joined Marketing Team",
      subtitle: "New team member added",
      time: "1 hour ago",
      icon: Users,
      color: "text-purple-500",
    },
  ];

  const stats = [
    {
      label: "Messages",
      value: "24",
      change: "+3",
      icon: MessageSquare,
      color: "bg-blue-50",
    },
    {
      label: "Meetings",
      value: "8",
      change: "+2",
      icon: Calendar,
      color: "bg-green-50",
    },
    {
      label: "Teams",
      value: "5",
      change: "0",
      icon: Users,
      color: "bg-purple-50",
    },
    {
      label: "Active",
      value: "12",
      change: "+1",
      icon: TrendingUp,
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Stats Cards */}
      <div>
        <BlockTitle>Today's Overview</BlockTitle>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${stat.color} border border-gray-100`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                  {stat.change !== "0" && (
                    <div
                      className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-gray-500"}`}
                    >
                      {stat.change}
                    </div>
                  )}
                </div>
                <div className="p-2 rounded-full bg-white/70">
                  <stat.icon className="text-gray-600" size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <BlockTitle>Recent Activity</BlockTitle>
        <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100">
          {recentActivities.map((activity, index) => (
            <ListItem
              key={activity.id}
              title={activity.title}
              after={
                <div className="flex items-center space-x-2">
                  <Clock size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-500 font-medium">
                    {activity.time}
                  </span>
                </div>
              }
              subtitle={activity.subtitle}
              media={
                <div
                  className={`p-2.5 rounded-full bg-gray-50 ${activity.color}`}
                >
                  <activity.icon size={18} />
                </div>
              }
              dividers={index < recentActivities.length - 1}
            />
          ))}
        </List>
      </div>

      {/* Quick Actions */}
      <div>
        <BlockTitle>Quick Actions</BlockTitle>
        <div className="space-y-3 mt-3">
          <Button
            fill
            className="!bg-[#6264a7] !text-white !rounded-xl !font-semibold"
            style={
              {
                "--k-button-bg-color": "#6264a7",
                "--k-button-text-color": "#ffffff",
              } as React.CSSProperties
            }
          >
            Start New Meeting
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button
              outline
              className="!border-gray-300 !text-gray-700 !rounded-xl !font-medium"
            >
              Create Team
            </Button>
            <Button
              outline
              className="!border-gray-300 !text-gray-700 !rounded-xl !font-medium"
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSActivityView;
