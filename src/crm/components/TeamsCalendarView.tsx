import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Video,
  Clock,
  Users,
} from "lucide-react";
import { styled } from "@mui/material/styles";

const CalendarContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#faf9f8",
  padding: theme.spacing(3),
  overflow: "auto",
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
}));

const EventCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  borderLeft: `4px solid #5b5fc7`,
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
}));

const upcomingMeetings = [
  {
    id: "1",
    title: "Daily Standup",
    time: "9:00 AM - 9:30 AM",
    attendees: ["TL", "AI", "JS"],
    type: "teams",
    color: "#5b5fc7",
  },
  {
    id: "2",
    title: "Client Presentation",
    time: "2:00 PM - 3:00 PM",
    attendees: ["TL", "AC", "TS"],
    type: "teams",
    color: "#d83b01",
  },
  {
    id: "3",
    title: "Sprint Planning",
    time: "4:00 PM - 5:30 PM",
    attendees: ["TL", "AI", "JS", "MM"],
    type: "teams",
    color: "#107c10",
  },
];

export default function TeamsCalendarView() {
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <CalendarContainer>
      <HeaderSection>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Calendar size={24} color="#5b5fc7" />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Calendar
          </Typography>
          <Chip
            label="Today"
            size="small"
            sx={{
              backgroundColor: "#5b5fc7",
              color: "white",
              fontWeight: 600,
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small">
            <ChevronLeft size={20} />
          </IconButton>
          <Typography variant="h6" sx={{ minWidth: 160, textAlign: "center" }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Typography>
          <IconButton size="small">
            <ChevronRight size={20} />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<Plus size={16} />}
            sx={{
              ml: 2,
              backgroundColor: "#5b5fc7",
              "&:hover": {
                backgroundColor: "#5855c4",
              },
            }}
          >
            New meeting
          </Button>
        </Box>
      </HeaderSection>

      <Grid container spacing={3}>
        {/* Today's Schedule */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1,
              p: 3,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Today's Schedule
            </Typography>

            {upcomingMeetings.map((meeting) => (
              <EventCard key={meeting.id}>
                <CardContent sx={{ py: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {meeting.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Clock size={14} color="#616161" />
                        <Typography variant="body2" color="text.secondary">
                          {meeting.time}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Users size={14} color="#616161" />
                        <Box sx={{ display: "flex", gap: 0.5 }}>
                          {meeting.attendees.map((attendee, index) => (
                            <Avatar
                              key={index}
                              sx={{
                                width: 24,
                                height: 24,
                                fontSize: "0.75rem",
                                backgroundColor: meeting.color,
                              }}
                            >
                              {attendee}
                            </Avatar>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          backgroundColor: "#5b5fc7",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#5855c4",
                          },
                        }}
                      >
                        <Video size={16} />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </EventCard>
            ))}
          </Box>
        </Grid>

        {/* Mini Calendar & Quick Actions */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1,
              p: 3,
              boxShadow: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Actions
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<Video size={16} />}
                fullWidth
                sx={{ justifyContent: "flex-start" }}
              >
                Start instant meeting
              </Button>
              <Button
                variant="outlined"
                startIcon={<Calendar size={16} />}
                fullWidth
                sx={{ justifyContent: "flex-start" }}
              >
                Schedule a meeting
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1,
              p: 3,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Upcoming This Week
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Tomorrow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Team Retrospective - 10:00 AM
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Thursday
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All Hands Meeting - 2:00 PM
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Friday
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Demo Day - 3:00 PM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CalendarContainer>
  );
}
