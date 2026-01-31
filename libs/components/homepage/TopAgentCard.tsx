import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      {/* Agentning aylana rasmi */}
      <Box className={"agent-img"} />

      {/* Agent haqida ma'lumot qismi */}
      <Box className={"agent-info"}>
        <Typography className={"name"} component="strong">
          Martin
        </Typography>
        <Typography className={"type"} component="span">
          Agent
        </Typography>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;