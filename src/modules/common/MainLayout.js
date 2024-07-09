import { Grid } from "@mui/material";
import React from "react";
import AppRoutes from "./AppRoutes";
import Header from "./Header";

export default function MainLayout({}) {
  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        style={{ position: "fixed", marginTop: "0px", zIndex: 1000 }}
      >
        <Grid
          item
          xs={12}
          style={{
            zIndex: 1000,
            height: "100px",
            backgroundColor: "#ffffff",
          }}
        >
          <Header />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12} style={{ marginTop: "60px" }}>
          <AppRoutes />
        </Grid>
      </Grid>
    </div>
  );
}
