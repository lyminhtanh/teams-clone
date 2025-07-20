import React from "react";
import { Block, BlockTitle, List, ListItem, Button, Badge } from "konsta/react";
import { Users, UserPlus, Settings, Crown, Shield } from "lucide-react";

const AndroidTeamsView: React.FC = () => {
  const teams = [
    {
      id: 1,
      name: "Marketing Team",
      members: 12,
      role: "Owner",
      activity: "Very Active",
      color: "bg-blue-100",
      icon: "📈",
    },
    {
      id: 2,
      name: "Development Team",
      members: 8,
      role: "Member",
      activity: "Active",
      color: "bg-green-100",
      icon: "💻",
    },
    {
      id: 3,
      name: "Design Team",
      members: 6,
      role: "Member",
      activity: "Moderate",
      color: "bg-purple-100",
      icon: "🎨",
    },
    {
      id: 4,
      name: "Project Alpha",
      members: 15,
      role: "Admin",
      activity: "Very Active",
      color: "bg-orange-100",
      icon: "🚀",
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Owner":
        return Crown;
      case "Admin":
        return Shield;
      default:
        return Users;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Owner":
        return "text-yellow-600";
      case "Admin":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case "Very Active":
        return "!bg-green-100 !text-green-800";
      case "Active":
        return "!bg-blue-100 !text-blue-800";
      case "Moderate":
        return "!bg-yellow-100 !text-yellow-800";
      default:
        return "!bg-gray-100 !text-gray-800";
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Team Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{teams.length}</div>
          <div className="text-sm text-gray-500">Teams Joined</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">
            {teams.reduce((acc, team) => acc + team.members, 0)}
          </div>
          <div className="text-sm text-gray-500">Total Members</div>
        </div>
      </div>

      {/* My Teams */}
      <BlockTitle>My Teams</BlockTitle>
      <List>
        {teams.map((team) => {
          const RoleIcon = getRoleIcon(team.role);
          const roleColor = getRoleColor(team.role);

          return (
            <ListItem
              key={team.id}
              title={team.name}
              subtitle={`${team.members} members`}
              after={
                <div className="flex flex-col items-end space-y-1">
                  <div className={`flex items-center space-x-1 ${roleColor}`}>
                    <RoleIcon size={12} />
                    <span className="text-xs">{team.role}</span>
                  </div>
                  <Badge className={getActivityColor(team.activity)}>
                    {team.activity}
                  </Badge>
                </div>
              }
              media={
                <div
                  className={`w-12 h-12 rounded-full ${team.color} flex items-center justify-center text-xl`}
                >
                  {team.icon}
                </div>
              }
            />
          );
        })}
      </List>

      {/* Quick Actions */}
      <Block className="space-y-3 mt-6">
        <Button fill className="!bg-[#6264a7]" icon={<UserPlus size={18} />}>
          Create Team
        </Button>
        <Button outline icon={<Users size={18} />}>
          Join Team
        </Button>
      </Block>
    </div>
  );
};

export default AndroidTeamsView;
