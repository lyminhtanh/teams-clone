import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";

export default function CustomersIndividual() {
  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <PersonRounded color="primary" />
            <Typography variant="h4" component="h1">
              Individual Customers
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Manage your individual customer accounts and personal contacts.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
