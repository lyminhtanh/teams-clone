import React from "react";
import { Block, BlockTitle, List, ListItem, Button, Badge } from "konsta/react";
import {
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  Video,
  Plus,
  ChevronRight,
} from "lucide-react";

const IOSCallsView: React.FC = () => {
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

  const getCallBgColor = (type: string, missed: boolean) => {
    if (missed) return "bg-red-50";
    if (type === "incoming") return "bg-green-50";
    return "bg-blue-50";
  };

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-full">
      {/* Call Stats */}
      <div>
        <BlockTitle>Call Statistics</BlockTitle>
        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-sm text-gray-600 font-medium">Total Calls</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">2h 15m</div>
            <div className="text-sm text-gray-600 font-medium">Talk Time</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-2xl font-bold text-red-500">3</div>
            <div className="text-sm text-gray-600 font-medium">Missed</div>
          </div>
        </div>
      </div>

      {/* Recent Calls */}
      <div>
        <BlockTitle>Recent Calls</BlockTitle>
        <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100 mt-3">
          {callHistory.map((call, index) => {
            const CallIcon = getCallIcon(call.type, call.missed);
            const iconColor = getCallColor(call.type, call.missed);
            const bgColor = getCallBgColor(call.type, call.missed);

            return (
              <ListItem
                key={call.id}
                title={call.name}
                subtitle={
                  call.duration ? `${call.duration} duration` : "Missed call"
                }
                after={
                  <div className="flex flex-col items-end space-y-2">
                    <span className="text-xs text-gray-500 font-medium">
                      {call.time}
                    </span>
                    <div className="flex items-center space-x-2">
                      {call.isVideo && (
                        <Badge className="!bg-blue-100 !text-blue-800 text-xs font-semibold">
                          Video
                        </Badge>
                      )}
                      <ChevronRight size={14} className="text-gray-400" />
                    </div>
                  </div>
                }
                media={
                  <div
                    className={`p-2.5 rounded-full ${bgColor} ${iconColor} border border-gray-100`}
                  >
                    <CallIcon size={18} />
                  </div>
                }
                dividers={index < callHistory.length - 1}
                link
              />
            );
          })}
        </List>
      </div>

      {/* Quick Actions */}
      <div>
        <BlockTitle>Quick Actions</BlockTitle>
        <div className="space-y-3 mt-3">
          <Button
            fill
            className="!bg-[#6264a7] !text-white !rounded-xl !font-semibold"
            icon={<Phone size={18} />}
            style={
              {
                "--k-button-bg-color": "#6264a7",
                "--k-button-text-color": "#ffffff",
              } as React.CSSProperties
            }
          >
            Start Call
          </Button>
          <Button
            outline
            className="!border-gray-300 !text-gray-700 !rounded-xl !font-medium"
            icon={<Video size={18} />}
          >
            Start Video Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IOSCallsView;
