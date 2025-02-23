import { Grid, Typography } from "@mui/material";
import React from "react";

const items = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/simonaxanchova/",
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/simonaxanchova",
  },
  {
    id: 3,
    name: "Behance",
    link: "https://www.behance.net/simonaxanchova",
  },
  {
    id: 4,
    name: "Contact",
    link: "mailto:anchovasimona11@gmail.com",
  },
];

const projects = [
  {
    id: 1,
    name: "Portal for E-Services",
    description: "Agency of Real Estate Cadastre",
    date: "2024 - Present",
  },
  {
    id: 2,
    name: "Aucta Development",
    description: "Software Development Company",
    date: "2025",
  },
  {
    id: 3,
    name: "Ferry Booking System",
    description: "Asta Adria Ferry Agents Group",
    date: "2022 - 2024",
  },
];

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      style={{
        height: "100vh",
        background: `url(${process.env.PUBLIC_URL}/assets/main-background.png) center center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        style={{
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Grid
          item
          xs={3}
          md={2}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayMedium",
              margin: 0,
              color: "#fff",
              fontSize: "13px",
              padding: "5px 10px 0 10px",
              textTransform: "uppercase",
            }}
          >
            Design & Development
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#16db65",
                height: "10px",
                width: "10px",
                animation: "blink 1s infinite",
              }}
            />
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayLight",
                margin: 0,
                color: "#fff",
                fontSize: "14px",
                padding: "0 5px",
                letterSpacing: "0.6px",
              }}
            >
              Available for freelance
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {items.map((item) => (
            <div
              style={{
                padding: 0,
                display: "inline-flex",
                padding: "0 5px",
                backgroundColor: "#008eff",
                cursor: "pointer",
              }}
              onClick={() => {
                if (item.name === "Contact") {
                  window.location.href = item.link;
                  return;
                } else {
                  window.open(item.link, "_blank");
                }
              }}
            >
              <Typography
                style={{
                  fontFamily: "NeueHaasDisplayLight",
                  color: "#fff",
                  fontSize: "15px",
                  letterSpacing: "0.6px",
                }}
              >
                [{item.name.slice(0, 1)}] {item.name}
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid
          item
          xs={3}
          md={2}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayLight",
              margin: 0,
              color: "#fff",
              fontSize: "14px",
              padding: "5px 10px 0 0",
              textTransform: "uppercase",
            }}
          >
            @ 2025
          </Typography>
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayLight",
              margin: 0,
              color: "#fff",
              fontSize: "14px",
              marginTop: "-2px",
              padding: "0 10px 0 0",
              letterSpacing: "0.6px",
            }}
          >
            All rights reserved.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3} md={3} />
      <Grid
        item
        xs={3}
        md={3}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "110px",
          textAlign: "left",
        }}
      >
        <Typography
          style={{
            fontFamily: "NeueHaasDisplayLight",
            fontSize: "60px",
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: "1.1",
            padding: "0",
          }}
        >
          Simona
          <br />
          Anchova
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        md={3.5}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: "75vh",
          textAlign: "right",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            marginTop: "20px",
            fontFamily: "Inter-Light",
            fontSize: "17px",
            color: "#fff",
            lineHeight: "1.1",
            padding: "0 0 0 80px",
          }}
        >
          Skilled Software Engineer specializing in building scalable web
          applications. With over 3 years of experience working with clients
          across various industries, delivering high-performance and
          user-centric software. Passionate about innovation and
          problem-solving, combining technical excellence with a keen eye for
          user experience.
        </Typography>
      </Grid>
      <Grid container spacing={0} style={{ height: "20px" }}>
        <Grid
          item
          xs={3}
          md={1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayLight",
              margin: 0,
              color: "#fff",
              fontSize: "14px",
              padding: "0 10px 0 10px",
            }}
          >
            Selected work
          </Typography>
        </Grid>
        {projects.map((project) => (
          <Grid
            item
            xs={3}
            md={1.5}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              style={{ fontFamily: "NeueHaasDisplayLight", color: "#fff" }}
            >
              [ {project.id} ]
            </Typography>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayLight",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "0.6px",
              }}
            >
              {project.name}
            </Typography>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayLight",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "0.6px",
              }}
            >
              {project.description}
            </Typography>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayLight",
                color: "#fff",
                fontSize: "13px",
                letterSpacing: "0.6px",
              }}
            >
              {project.date}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
