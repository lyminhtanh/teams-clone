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

const AndroidActivityView: React.FC = () => {
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
    { label: "Messages", value: "24", change: "+3", icon: MessageSquare },
    { label: "Meetings", value: "8", change: "+2", icon: Calendar },
    { label: "Teams", value: "5", change: "0", icon: Users },
    { label: "Active", value: "12", change: "+1", icon: TrendingUp },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Stats Cards */}
      <BlockTitle>Today's Overview</BlockTitle>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div
                  className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-gray-400"}`}
                >
                  {stat.change !== "0" && stat.change}
                </div>
              </div>
              <stat.icon className="text-gray-400" size={24} />
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <BlockTitle>Recent Activity</BlockTitle>
      <List>
        {recentActivities.map((activity) => (
          <ListItem
            key={activity.id}
            title={activity.title}
            after={
              <div className="flex items-center space-x-2">
                <Clock size={14} className="text-gray-400" />
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            }
            subtitle={activity.subtitle}
            media={
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon size={20} />
              </div>
            }
          />
        ))}
      </List>

      {/* Quick Actions */}
      <BlockTitle>Quick Actions</BlockTitle>
      <Block className="space-y-3">
        <Button fill className="!bg-[#6264a7]">
          Start New Meeting
        </Button>
        <Button outline>Create Team</Button>
        <Button outline>Schedule Meeting</Button>
      </Block>
    </div>
  );
};

export default AndroidActivityView;
