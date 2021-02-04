import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React, { memo } from "react";

export const Header = memo(() => (
  <div style={{ flexGrow: 1 }}>
    <AppBar style={{ alignItems: "center" }}>
      <Toolbar>
        <Typography component="h6" variant="h6" color="inherit" align="center">
          PDF Converter
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
));
