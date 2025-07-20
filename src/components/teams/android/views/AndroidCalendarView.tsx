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
import { Calendar, Clock, Users, Video, Plus } from "lucide-react";

const AndroidCalendarView: React.FC = () => {
  const todayEvents = [
    {
      id: 1,
      title: "Team Standup",
      time: "9:00 AM - 9:30 AM",
      attendees: 8,
      type: "meeting",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Project Review",
      time: "2:00 PM - 3:00 PM",
      attendees: 5,
      type: "meeting",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Client Call",
      time: "4:30 PM - 5:30 PM",
      attendees: 3,
      type: "call",
      status: "upcoming",
    },
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: "Sprint Planning",
      date: "Tomorrow",
      time: "10:00 AM",
      attendees: 12,
    },
    {
      id: 5,
      title: "Design Review",
      date: "Friday",
      time: "2:00 PM",
      attendees: 6,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Today's Schedule */}
      <div className="flex items-center justify-between">
        <BlockTitle>Today's Schedule</BlockTitle>
        <Badge className="!bg-blue-100 !text-blue-800">
          {todayEvents.length} events
        </Badge>
      </div>

      <List>
        {todayEvents.map((event) => (
          <ListItem
            key={event.id}
            title={event.title}
            subtitle={event.time}
            after={
              <div className="flex items-center space-x-2">
                <Users size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">{event.attendees}</span>
              </div>
            }
            media={
              <div className="p-2 rounded-full bg-blue-100">
                {event.type === "call" ? (
                  <Video size={20} className="text-blue-600" />
                ) : (
                  <Calendar size={20} className="text-blue-600" />
                )}
              </div>
            }
          />
        ))}
      </List>

      {/* Upcoming Events */}
      <BlockTitle>Upcoming Events</BlockTitle>
      <List>
        {upcomingEvents.map((event) => (
          <ListItem
            key={event.id}
            title={event.title}
            subtitle={`${event.date} at ${event.time}`}
            after={
              <div className="flex items-center space-x-2">
                <Users size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">{event.attendees}</span>
              </div>
            }
            media={
              <div className="p-2 rounded-full bg-gray-100">
                <Calendar size={20} className="text-gray-600" />
              </div>
            }
          />
        ))}
      </List>

      {/* Quick Actions */}
      <Block className="space-y-3 mt-6">
        <Button fill className="!bg-[#6264a7]" icon={<Plus size={18} />}>
          Schedule Meeting
        </Button>
        <Button outline>View Full Calendar</Button>
      </Block>
    </div>
  );
};

export default AndroidCalendarView;
