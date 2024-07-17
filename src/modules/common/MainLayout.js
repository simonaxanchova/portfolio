import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./Header";
import { useSelector } from "react-redux";
import HeaderMenu from "./HeaderMenu";

export default function MainLayout({}) {
  const isMenuOpen = useSelector((state) => state.global.openMenu);
  const [loading, setLoading] = useState(true);

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
            height: "65px",
          }}
        >
          <Header loading={loading} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12} style={{ marginTop: "60px" }}>
          <AppRoutes loading={loading} setLoading={setLoading} />
        </Grid>
      </Grid>
    </div>
  );
}
