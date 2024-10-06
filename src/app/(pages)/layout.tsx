import React, { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CustomThemeProvider from "@/themes/CustomThemeProvider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <CustomThemeProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Header
            </Typography>
          </Toolbar>
        </AppBar>

        <Container>
          <Box mt={2}>{children}</Box>
        </Container>

        <AppBar
          position="static"
          color="primary"
          style={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Typography variant="body1" component="div">
              Footer
            </Typography>
          </Toolbar>
        </AppBar>
      </CustomThemeProvider>
    </div>
  );
};

export default Layout;
