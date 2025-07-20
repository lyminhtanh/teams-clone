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
import { MessageCircle, Users, Search, Plus } from "lucide-react";

const AndroidChatView: React.FC = () => {
  const conversations = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Great work on the campaign!",
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
      avatar: "���",
    },
    {
      id: 4,
      name: "John Smith",
      lastMessage: "Thanks for the feedback",
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
    <div className="h-full flex flex-col">
      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-200">
        <Searchbar
          placeholder="Search conversations..."
          className="!bg-gray-50"
        />
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-auto">
        <List>
          {conversations.map((conversation) => (
            <ListItem
              key={conversation.id}
              title={conversation.name}
              subtitle={conversation.lastMessage}
              after={
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-xs text-gray-400">
                    {conversation.time}
                  </span>
                  {conversation.unread > 0 && (
                    <Badge className="!bg-[#6264a7] !text-white min-w-[20px] h-5 text-xs">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              }
              media={
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  {conversation.avatar}
                </div>
              }
              link
              className="!py-3"
            />
          ))}
        </List>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex space-x-3">
          <Button
            fill
            className="!bg-[#6264a7] flex-1"
            icon={<MessageCircle size={18} />}
          >
            New Chat
          </Button>
          <Button outline className="flex-1" icon={<Users size={18} />}>
            New Group
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AndroidChatView;
