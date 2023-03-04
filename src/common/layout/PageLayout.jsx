import React from "react";

// Mui
import Stack from "@mui/material/Stack";

const PageLayout = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh" }}>
      {children}
    </Stack>
  );
};

export default PageLayout;
