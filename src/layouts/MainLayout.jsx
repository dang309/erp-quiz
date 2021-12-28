import React, { memo } from "react";

//----------------------------------------

import { Box } from "@mui/material";

//----------------------------------------

//----------------------------------------

import { Outlet } from "react-router-dom";

//----------------------------------------

function MainLayout(props) {
  return (
    <Box component="main">
      <Outlet />
    </Box>
  );
}

export default memo(MainLayout);
