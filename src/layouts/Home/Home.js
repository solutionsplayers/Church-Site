import { AppBar, Button, Drawer, Toolbar } from "@mui/material";
import React from "react";
import Page from "../../components/page/page";

const Home = () => {
  return (
    <Page title="Home">
      <AppBar position="static">
        <Toolbar>
          Home Page
          <Button variant="contained"> Open </Button>
        </Toolbar>
      </AppBar>
      <Drawer open={true} variant="permanent"></Drawer>
    </Page>
  );
};

export default Home;
