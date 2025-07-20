import React from "react";
import {
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Badge,
  Searchbar,
} from "konsta/react";
import {
  File,
  FileText,
  Image,
  Video,
  Archive,
  Download,
  Upload,
  Search,
  Folder,
} from "lucide-react";

const AndroidFilesView: React.FC = () => {
  const recentFiles = [
    {
      id: 1,
      name: "Project_Proposal.pdf",
      type: "pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      team: "Marketing Team",
      icon: FileText,
      color: "text-red-500",
    },
    {
      id: 2,
      name: "Design_Mockups.zip",
      type: "archive",
      size: "15.7 MB",
      modified: "1 day ago",
      team: "Design Team",
      icon: Archive,
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Meeting_Recording.mp4",
      type: "video",
      size: "125 MB",
      modified: "2 days ago",
      team: "Development Team",
      icon: Video,
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "Brand_Guidelines.png",
      type: "image",
      size: "4.2 MB",
      modified: "3 days ago",
      team: "Marketing Team",
      icon: Image,
      color: "text-green-500",
    },
  ];

  const folders = [
    { name: "Marketing Materials", files: 24, team: "Marketing Team" },
    { name: "Development Docs", files: 18, team: "Development Team" },
    { name: "Design Assets", files: 32, team: "Design Team" },
    { name: "Project Reports", files: 12, team: "Project Alpha" },
  ];

  const formatFileSize = (size: string) => size;

  return (
    <div className="h-full flex flex-col">
      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-gray-200">
        <Searchbar placeholder="Search files..." className="!bg-gray-50" />
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Storage Usage */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Storage Used
            </span>
            <span className="text-sm text-gray-500">2.1 GB / 5 GB</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#6264a7] h-2 rounded-full"
              style={{ width: "42%" }}
            ></div>
          </div>
        </div>

        {/* Quick Folders */}
        <BlockTitle>Folders</BlockTitle>
        <List>
          {folders.map((folder, index) => (
            <ListItem
              key={index}
              title={folder.name}
              subtitle={`${folder.files} files • ${folder.team}`}
              media={
                <div className="p-2 rounded-full bg-blue-100">
                  <Folder size={20} className="text-blue-600" />
                </div>
              }
              link
            />
          ))}
        </List>

        {/* Recent Files */}
        <BlockTitle>Recent Files</BlockTitle>
        <List>
          {recentFiles.map((file) => (
            <ListItem
              key={file.id}
              title={file.name}
              subtitle={`${formatFileSize(file.size)} • ${file.modified}`}
              after={
                <div className="flex flex-col items-end space-y-1">
                  <Badge className="!bg-gray-100 !text-gray-700 text-xs">
                    {file.team}
                  </Badge>
                </div>
              }
              media={
                <div className={`p-2 rounded-full bg-gray-100 ${file.color}`}>
                  <file.icon size={20} />
                </div>
              }
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
            icon={<Upload size={18} />}
          >
            Upload
          </Button>
          <Button outline className="flex-1" icon={<Folder size={18} />}>
            New Folder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AndroidFilesView;
