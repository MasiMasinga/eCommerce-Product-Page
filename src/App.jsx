import React from "react";

// Mui Context
import { ThemeProvider } from "@mui/material/styles";

// React Helmet
import { HelmetProvider, Helmet } from "react-helmet-async";

// Theme
import theme from "./common/theme/theme";

// Routes
import PageRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <title>eCommerce Product Page</title>
        </Helmet>
        <PageRoutes />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
