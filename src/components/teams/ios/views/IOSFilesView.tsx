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
  ChevronRight,
} from "lucide-react";

const IOSFilesView: React.FC = () => {
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
      bgColor: "bg-red-50",
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
      bgColor: "bg-yellow-50",
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
      bgColor: "bg-purple-50",
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
      bgColor: "bg-green-50",
    },
  ];

  const folders = [
    {
      name: "Marketing Materials",
      files: 24,
      team: "Marketing Team",
      color: "bg-blue-50",
    },
    {
      name: "Development Docs",
      files: 18,
      team: "Development Team",
      color: "bg-green-50",
    },
    {
      name: "Design Assets",
      files: 32,
      team: "Design Team",
      color: "bg-purple-50",
    },
    {
      name: "Project Reports",
      files: 12,
      team: "Project Alpha",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Search Bar */}
      <div className="p-4 bg-white">
        <Searchbar
          placeholder="Search files..."
          className="!bg-gray-100 !rounded-xl"
        />
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-6">
        {/* Storage Usage */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">
              Storage Used
            </span>
            <span className="text-sm text-gray-600 font-medium">
              2.1 GB / 5 GB
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-[#6264a7] h-2.5 rounded-full transition-all duration-300"
              style={{ width: "42%" }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-gray-500">42% of storage used</div>
        </div>

        {/* Quick Folders */}
        <div>
          <BlockTitle>Folders</BlockTitle>
          <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100 mt-3">
            {folders.map((folder, index) => (
              <ListItem
                key={index}
                title={folder.name}
                subtitle={`${folder.files} files • ${folder.team}`}
                after={<ChevronRight size={14} className="text-gray-400" />}
                media={
                  <div
                    className={`p-2.5 rounded-full ${folder.color} border border-gray-100`}
                  >
                    <Folder size={18} className="text-blue-600" />
                  </div>
                }
                dividers={index < folders.length - 1}
                link
              />
            ))}
          </List>
        </div>

        {/* Recent Files */}
        <div>
          <BlockTitle>Recent Files</BlockTitle>
          <List className="!bg-white !rounded-xl !shadow-sm border border-gray-100 mt-3">
            {recentFiles.map((file, index) => (
              <ListItem
                key={file.id}
                title={file.name}
                subtitle={`${file.size} • ${file.modified}`}
                after={
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className="!bg-gray-100 !text-gray-700 text-xs font-semibold">
                      {file.team}
                    </Badge>
                    <ChevronRight size={14} className="text-gray-400" />
                  </div>
                }
                media={
                  <div
                    className={`p-2.5 rounded-full ${file.bgColor} ${file.color} border border-gray-100`}
                  >
                    <file.icon size={18} />
                  </div>
                }
                dividers={index < recentFiles.length - 1}
                link
              />
            ))}
          </List>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex space-x-3">
          <Button
            fill
            className="!bg-[#6264a7] !text-white flex-1 !rounded-xl !font-semibold"
            icon={<Upload size={18} />}
            style={
              {
                "--k-button-bg-color": "#6264a7",
                "--k-button-text-color": "#ffffff",
              } as React.CSSProperties
            }
          >
            Upload
          </Button>
          <Button
            outline
            className="flex-1 !border-gray-300 !text-gray-700 !rounded-xl !font-medium"
            icon={<Folder size={18} />}
          >
            New Folder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IOSFilesView;
