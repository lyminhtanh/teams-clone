import React from "react";
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import { CorporateFareRounded } from "@mui/icons-material";

export default function CustomersCorporate() {
  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <CorporateFareRounded color="primary" />
            <Typography variant="h4" component="h1">
              Corporate Customers
            </Typography>
            <Chip label="12 Active" color="primary" size="small" />
          </Box>
          <Typography variant="body1" color="text.secondary">
            Manage your corporate accounts, enterprise clients, and business
            relationships.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
