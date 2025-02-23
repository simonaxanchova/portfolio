import { Grid } from "@mui/material";
import React, { useState } from "react";
import AppRoutes from "./AppRoutes";

export default function MainLayout({}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item md={12} xs={12}>
          <AppRoutes loading={loading} setLoading={setLoading} />
        </Grid>
      </Grid>
    </div>
  );
}
