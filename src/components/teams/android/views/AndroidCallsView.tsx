import React from "react";
import { Block, BlockTitle, List, ListItem, Button, Badge } from "konsta/react";
import {
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  Video,
  Plus,
} from "lucide-react";

const AndroidCallsView: React.FC = () => {
  const callHistory = [
    {
      id: 1,
      name: "Sarah Wilson",
      type: "outgoing",
      duration: "15:32",
      time: "2:30 PM",
      isVideo: true,
      missed: false,
    },
    {
      id: 2,
      name: "Marketing Team",
      type: "incoming",
      duration: "45:12",
      time: "1:00 PM",
      isVideo: true,
      missed: false,
    },
    {
      id: 3,
      name: "John Smith",
      type: "missed",
      duration: null,
      time: "11:45 AM",
      isVideo: false,
      missed: true,
    },
    {
      id: 4,
      name: "Development Team",
      type: "outgoing",
      duration: "28:05",
      time: "10:15 AM",
      isVideo: true,
      missed: false,
    },
  ];

  const getCallIcon = (type: string, missed: boolean) => {
    if (missed) return PhoneMissed;
    if (type === "incoming") return PhoneIncoming;
    return PhoneCall;
  };

  const getCallColor = (type: string, missed: boolean) => {
    if (missed) return "text-red-500";
    if (type === "incoming") return "text-green-500";
    return "text-blue-500";
  };

  return (
    <div className="p-4 space-y-4">
      {/* Call Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-gray-500">Total Calls</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">2h 15m</div>
          <div className="text-sm text-gray-500">Talk Time</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-red-500">3</div>
          <div className="text-sm text-gray-500">Missed</div>
        </div>
      </div>

      {/* Recent Calls */}
      <BlockTitle>Recent Calls</BlockTitle>
      <List>
        {callHistory.map((call) => {
          const CallIcon = getCallIcon(call.type, call.missed);
          const iconColor = getCallColor(call.type, call.missed);

          return (
            <ListItem
              key={call.id}
              title={call.name}
              subtitle={
                call.duration ? `${call.duration} duration` : "Missed call"
              }
              after={
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-xs text-gray-400">{call.time}</span>
                  {call.isVideo && (
                    <Badge className="!bg-blue-100 !text-blue-800 text-xs">
                      Video
                    </Badge>
                  )}
                </div>
              }
              media={
                <div className={`p-2 rounded-full bg-gray-100 ${iconColor}`}>
                  <CallIcon size={20} />
                </div>
              }
            />
          );
        })}
      </List>

      {/* Quick Actions */}
      <Block className="space-y-3 mt-6">
        <Button fill className="!bg-[#6264a7]" icon={<Phone size={18} />}>
          Start Call
        </Button>
        <Button outline icon={<Video size={18} />}>
          Start Video Call
        </Button>
      </Block>
    </div>
  );
};

export default AndroidCallsView;
