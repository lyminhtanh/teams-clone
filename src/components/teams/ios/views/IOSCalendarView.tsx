import React from "react";
import {
  Block,
  BlockTitle,
  List,
  ListItem,
  Card,
  Button,
  Badge,
} from "konsta/react";
import {
  Calendar,
  Clock,
  Users,
  Video,
  Plus,
  ChevronRight,
} from "lucide-react";

const IOSCalendarView: React.FC = () => {
  const todayEvents = [
    {
      id: 1,
      title: "Team Standup",
      time: "9:00 AM - 9:30 AM",
      attendees: 8,
      type: "meeting",
      status: "upcoming",
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Project Review",
      time: "2:00 PM - 3:00 PM",
      attendees: 5,
      type: "meeting",
      status: "upcoming",
      color: "bg-green-50",
    },
    {
      id: 3,
      title: "Client Call",
      time: "4:30 PM - 5:30 PM",
      attendees: 3,
      type: "call",
      status: "upcoming",
      color: "bg-purple-50",
    },
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: "Sprint Planning",
      date: "Tomorrow",
      time: "10:00 AM",
      attendees: 12,
      color: "bg-orange-50",
    },
    {
      id: 5,
      title: "Design Review",
      date: "Friday",
      time: "2:00 PM",
      attendees: 6,
      color: "bg-pink-50",
    },
  ];

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-full">
      {/* Today's Schedule */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <BlockTitle>Today's Schedule</BlockTitle>
          <Badge className="!bg-blue-100 !text-blue-800 font-semibold">
            {todayEvents.length} events
          </Badge>
        </div>

        <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100">
          {todayEvents.map((event, index) => (
            <ListItem
              key={event.id}
              title={event.title}
              subtitle={event.time}
              after={
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Users size={14} className="text-gray-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      {event.attendees}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>
              }
              media={
                <div
                  className={`p-2.5 rounded-full ${event.color} border border-gray-100`}
                >
                  {event.type === "call" ? (
                    <Video size={18} className="text-purple-600" />
                  ) : (
                    <Calendar size={18} className="text-blue-600" />
                  )}
                </div>
              }
              dividers={index < todayEvents.length - 1}
              link
            />
          ))}
        </List>
      </div>

      {/* Upcoming Events */}
      <div>
        <BlockTitle>Upcoming Events</BlockTitle>
        <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100 mt-3">
          {upcomingEvents.map((event, index) => (
            <ListItem
              key={event.id}
              title={event.title}
              subtitle={`${event.date} at ${event.time}`}
              after={
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Users size={14} className="text-gray-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      {event.attendees}
                    </span>
                  </div>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>
              }
              media={
                <div
                  className={`p-2.5 rounded-full ${event.color} border border-gray-100`}
                >
                  <Calendar size={18} className="text-gray-600" />
                </div>
              }
              dividers={index < upcomingEvents.length - 1}
              link
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
            icon={<Plus size={18} />}
            style={
              {
                "--k-button-bg-color": "#6264a7",
                "--k-button-text-color": "#ffffff",
              } as React.CSSProperties
            }
          >
            Schedule Meeting
          </Button>
          <Button
            outline
            className="!border-gray-300 !text-gray-700 !rounded-xl !font-medium"
          >
            View Full Calendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IOSCalendarView;
