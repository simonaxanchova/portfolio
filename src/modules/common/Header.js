import { Grid, Typography } from "@mui/material";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        style={{
          height: "100%",
        }}
      >
        <Grid item xs={1} />
        <Grid
          item
          xs={2}
          style={{
            textAlign: "left",
          }}
        >
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayRoman",
              fontSize: "20px",
            }}
          >
            Simona Anchova
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            float: "left",
          }}
        >
          <Typography
            style={{
              fontSize: "12px",
              fontFamily: "NeueHaasDisplayRoman",
              paddingRight: "40px",
              textTransform: "uppercase",
            }}
          >
            About
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              fontFamily: "NeueHaasDisplayRoman",
              paddingRight: "40px",
              textTransform: "uppercase",
            }}
          >
            Featured work
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              fontFamily: "NeueHaasDisplayRoman",
              paddingRight: "40px",
              textTransform: "uppercase",
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item xs={2} style={{ textAlign: "right", color: "#b8ff5e" }}>
          {/* <IoMenu style={{ fontSize: "26px" }} />{" "} */}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
