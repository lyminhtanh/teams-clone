import React from "react";
import {
  Block,
  BlockTitle,
  List,
  ListItem,
  Badge,
  Searchbar,
  Button,
} from "konsta/react";
import { MessageCircle, Users, Search, Plus, ChevronRight } from "lucide-react";

const IOSChatView: React.FC = () => {
  const conversations = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Great work on the campaign! 🎉",
      time: "2:30 PM",
      unread: 3,
      isGroup: true,
      avatar: "👥",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      lastMessage: "Can you review the document?",
      time: "1:45 PM",
      unread: 1,
      isGroup: false,
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "Development Team",
      lastMessage: "Daily standup in 10 minutes",
      time: "12:15 PM",
      unread: 0,
      isGroup: true,
      avatar: "����",
    },
    {
      id: 4,
      name: "John Smith",
      lastMessage: "Thanks for the feedback 👍",
      time: "11:30 AM",
      unread: 0,
      isGroup: false,
      avatar: "👨‍💻",
    },
    {
      id: 5,
      name: "Project Alpha",
      lastMessage: "Meeting notes uploaded",
      time: "10:20 AM",
      unread: 2,
      isGroup: true,
      avatar: "📋",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Search Bar */}
      <div className="p-4 bg-white">
        <Searchbar
          placeholder="Search conversations..."
          className="!bg-gray-100 !rounded-xl"
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-auto px-4">
        <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100 mt-4">
          {conversations.map((conversation, index) => (
            <ListItem
              key={conversation.id}
              title={conversation.name}
              subtitle={conversation.lastMessage}
              after={
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-xs text-gray-500 font-medium">
                    {conversation.time}
                  </span>
                  <div className="flex items-center space-x-2">
                    {conversation.unread > 0 && (
                      <Badge className="!bg-[#6264a7] !text-white min-w-[20px] h-5 text-xs font-semibold">
                        {conversation.unread}
                      </Badge>
                    )}
                    <ChevronRight size={14} className="text-gray-400" />
                  </div>
                </div>
              }
              media={
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl shadow-sm">
                  {conversation.avatar}
                </div>
              }
              link
              className="!py-3"
              dividers={index < conversations.length - 1}
            />
          ))}
        </List>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex space-x-3">
          <Button
            fill
            className="!bg-[#6264a7] !text-white flex-1 !rounded-xl !font-semibold"
            icon={<MessageCircle size={18} />}
            style={
              {
                "--k-button-bg-color": "#6264a7",
                "--k-button-text-color": "#ffffff",
              } as React.CSSProperties
            }
          >
            New Chat
          </Button>
          <Button
            outline
            className="flex-1 !border-gray-300 !text-gray-700 !rounded-xl !font-medium"
            icon={<Users size={18} />}
          >
            New Group
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IOSChatView;
