import { Grid } from "@mui/material";
import React from "react";
import AppRoutes from "./AppRoutes";

export default function MainLayout() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item md={12} xs={12}>
          <AppRoutes />
        </Grid>
      </Grid>
    </div>
  );
}
