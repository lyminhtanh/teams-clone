import {
  Activity,
  MessageCircle,
  Calendar,
  Phone,
  Users,
  FolderOpen,
  Settings,
  Bell,
  HelpCircle,
  BarChart3,
  FileText,
  Database,
  Shield,
  Globe,
  Zap,
  BookOpen,
  Wrench,
  Target,
  Award,
  Briefcase,
  Clock,
  TrendingUp,
  UserCheck,
  Mail,
  Video,
  Headphones,
  Bookmark,
  Archive,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Eye,
  Lock,
  Unlock,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Star,
  Heart,
  ThumbsUp,
  MessageSquare,
  Send,
  Edit,
  Trash2,
  Copy,
  Scissors,
  PlusCircle,
  MinusCircle,
  Home,
  Building,
  MapPin,
  Car,
  Plane,
  Ship,
  Train,
} from "lucide-react";

export interface MenuItem {
  id: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  badge?: number | null;
  category: string;
  description?: string;
  enabled: boolean;
  order: number;
  isCore?: boolean; // Core items cannot be disabled
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "core",
    name: "Core Applications",
    description: "Essential tools for daily work",
    color: "#5b5fc7",
  },
  {
    id: "communication",
    name: "Communication",
    description: "Chat, email, and collaboration tools",
    color: "#2196f3",
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Tools to enhance workflow and efficiency",
    color: "#ff9800",
  },
  {
    id: "analytics",
    name: "Analytics & Reports",
    description: "Data visualization and reporting tools",
    color: "#4caf50",
  },
  {
    id: "management",
    name: "Management",
    description: "Project and resource management tools",
    color: "#9c27b0",
  },
  {
    id: "utilities",
    name: "Utilities",
    description: "System tools and utilities",
    color: "#607d8b",
  },
];

export const defaultMenuItems: MenuItem[] = [
  // Core Applications (cannot be disabled)
  {
    id: "activity",
    icon: Activity,
    label: "Activity",
    badge: null,
    category: "core",
    description: "View activity feed and updates",
    enabled: true,
    order: 1,
    isCore: true,
  },
  {
    id: "chat",
    icon: MessageCircle,
    label: "Chat",
    badge: 3,
    category: "core",
    description: "Team messaging and conversations",
    enabled: true,
    order: 2,
    isCore: true,
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
    badge: null,
    category: "core",
    description: "Schedule and manage meetings",
    enabled: true,
    order: 3,
    isCore: true,
  },
  {
    id: "calls",
    icon: Phone,
    label: "Calls",
    badge: null,
    category: "core",
    description: "Voice and video calls",
    enabled: true,
    order: 4,
    isCore: true,
  },
  {
    id: "customers",
    icon: Users,
    label: "Teams",
    badge: null,
    category: "core",
    description: "Team management and collaboration",
    enabled: true,
    order: 5,
    isCore: true,
  },
  {
    id: "files",
    icon: FolderOpen,
    label: "Files",
    badge: null,
    category: "core",
    description: "File sharing and storage",
    enabled: true,
    order: 6,
    isCore: true,
  },

  // Communication Tools
  {
    id: "email",
    icon: Mail,
    label: "Email",
    badge: 12,
    category: "communication",
    description: "Email management and inbox",
    enabled: true,
    order: 7,
  },
  {
    id: "video-conference",
    icon: Video,
    label: "Video",
    badge: null,
    category: "communication",
    description: "Video conferencing platform",
    enabled: false,
    order: 8,
  },
  {
    id: "announcements",
    icon: Bell,
    label: "Announcements",
    badge: 2,
    category: "communication",
    description: "Company-wide announcements",
    enabled: true,
    order: 9,
  },
  {
    id: "feedback",
    icon: MessageSquare,
    label: "Feedback",
    badge: null,
    category: "communication",
    description: "Collect and manage feedback",
    enabled: false,
    order: 10,
  },

  // Productivity Tools
  {
    id: "tasks",
    icon: CheckCircle,
    label: "Tasks",
    badge: 5,
    category: "productivity",
    description: "Task management and tracking",
    enabled: true,
    order: 11,
  },
  {
    id: "notes",
    icon: FileText,
    label: "Notes",
    badge: null,
    category: "productivity",
    description: "Note-taking and documentation",
    enabled: false,
    order: 12,
  },
  {
    id: "bookmarks",
    icon: Bookmark,
    label: "Bookmarks",
    badge: null,
    category: "productivity",
    description: "Save and organize important links",
    enabled: false,
    order: 13,
  },
  {
    id: "wiki",
    icon: BookOpen,
    label: "Wiki",
    badge: null,
    category: "productivity",
    description: "Knowledge base and documentation",
    enabled: true,
    order: 14,
  },
  {
    id: "search",
    icon: Search,
    label: "Search",
    badge: null,
    category: "productivity",
    description: "Universal search across all apps",
    enabled: false,
    order: 15,
  },

  // Analytics & Reports
  {
    id: "dashboard",
    icon: BarChart3,
    label: "Dashboard",
    badge: null,
    category: "analytics",
    description: "Business intelligence dashboard",
    enabled: true,
    order: 16,
  },
  {
    id: "reports",
    icon: TrendingUp,
    label: "Reports",
    badge: null,
    category: "analytics",
    description: "Generate and view reports",
    enabled: false,
    order: 17,
  },
  {
    id: "analytics",
    icon: Target,
    label: "Analytics",
    badge: null,
    category: "analytics",
    description: "Advanced data analytics",
    enabled: false,
    order: 18,
  },
  {
    id: "metrics",
    icon: Award,
    label: "Metrics",
    badge: null,
    category: "analytics",
    description: "Key performance indicators",
    enabled: false,
    order: 19,
  },

  // Management Tools
  {
    id: "projects",
    icon: Briefcase,
    label: "Projects",
    badge: 8,
    category: "management",
    description: "Project management and tracking",
    enabled: true,
    order: 20,
  },
  {
    id: "timetracking",
    icon: Clock,
    label: "Time",
    badge: null,
    category: "management",
    description: "Time tracking and timesheets",
    enabled: false,
    order: 21,
  },
  {
    id: "approvals",
    icon: UserCheck,
    label: "Approvals",
    badge: 3,
    category: "management",
    description: "Approval workflows and requests",
    enabled: false,
    order: 22,
  },
  {
    id: "resources",
    icon: Database,
    label: "Resources",
    badge: null,
    category: "management",
    description: "Resource allocation and planning",
    enabled: false,
    order: 23,
  },

  // Utilities
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
    badge: null,
    category: "utilities",
    description: "System settings and preferences",
    enabled: true,
    order: 24,
  },
  {
    id: "help",
    icon: HelpCircle,
    label: "Help",
    badge: null,
    category: "utilities",
    description: "Help documentation and support",
    enabled: true,
    order: 25,
  },
  {
    id: "tools",
    icon: Tool,
    label: "Tools",
    badge: null,
    category: "utilities",
    description: "Developer and admin tools",
    enabled: false,
    order: 26,
  },
  {
    id: "integrations",
    icon: Zap,
    label: "Integrations",
    badge: null,
    category: "utilities",
    description: "Third-party app integrations",
    enabled: false,
    order: 27,
  },
  {
    id: "security",
    icon: Shield,
    label: "Security",
    badge: 1,
    category: "utilities",
    description: "Security settings and monitoring",
    enabled: false,
    order: 28,
  },
  {
    id: "backup",
    icon: Archive,
    label: "Backup",
    badge: null,
    category: "utilities",
    description: "Data backup and recovery",
    enabled: false,
    order: 29,
  },
];

// Helper function to get enabled menu items sorted by order
export const getEnabledMenuItems = (menuItems: MenuItem[]): MenuItem[] => {
  return menuItems
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);
};

// Helper function to get menu items by category
export const getMenuItemsByCategory = (
  menuItems: MenuItem[],
  categoryId: string,
): MenuItem[] => {
  return menuItems
    .filter((item) => item.category === categoryId)
    .sort((a, b) => a.order - b.order);
};

// Helper function to get category by id
export const getCategoryById = (
  categoryId: string,
): MenuCategory | undefined => {
  return menuCategories.find((cat) => cat.id === categoryId);
};
