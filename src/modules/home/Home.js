import { Grid, Hidden, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { projects, items } from "./data";

const getRandomPixelShadow = () => {
  const pixels = [
    "47px 140px 0 0 rgba(225, 125, 31, 1)",
    "77px 140px 0 0 rgba(253, 197, 145, 1)",

    "77px 170px 0 0 rgba(253, 197, 145, 1)",

    "77px 200px 0 0 rgba(251, 139, 35, 1)",
    "107px 200px 0 0 rgba(253, 197, 145, 1)",

    "77px 230px 0 0 rgba(225, 125, 31, 1)",
    "107px 230px 0 0 rgba(253, 197, 145, 1)",
    "137px 230px 0 0 rgba(254, 231, 211, 1)",

    "77px 260px 0 0 rgba(253, 197, 145, 1)",
    "107px 260px 0 0 rgba(251, 139, 35, 1)",
    "137px 260px 0 0 rgba(252, 173, 101, 1)",
    "167px 260px 0 0 rgba(253, 197, 145, 1)",

    "47px 290px 0 0 rgba(251, 139, 35, 1)",
    "77px 290px 0 0 rgba(254, 231, 211, 1)",
    "107px 290px 0 0 rgba(253, 197, 145, 1)",
    "137px 290px 0 0 rgba(254, 231, 211, 1)",
    "167px 290px 0 0 rgba(253, 208, 167, 1)",
    "197px 290px 0 0 rgb(139, 139, 139)",

    "-13px 320px 0 0 rgba(252, 173, 101, 1)",
    "17px 320px 0 0 rgba(253, 197, 145, 1)",
    "47px 320px 0 0 rgb(139, 139, 139)",
    "77px 320px 0 0 rgba(253, 197, 145, 1)",
    "107px 320px 0 0 rgba(254, 231, 211, 1)",
    "137px 320px 0 0 rgba(251, 139, 35, 1)",
    "167px 320px 0 0 rgba(254, 231, 211, 1)",
    "197px 320px 0 0 rgba(253, 197, 145, 1)",
    "227px 320px 0 0 rgb(139, 139, 139)",

    "-73px 350px 0 0 rgba(253, 197, 145, 1)",
    "-43px 350px 0 0 rgba(225, 125, 31, 1)",
    "-13px 350px 0 0 rgb(139, 139, 139)",
    "17px 350px 0 0 rgba(253, 197, 145, 1)",
    "47px 350px 0 0 rgba(251, 139, 35, 1)",
    "77px 350px 0 0 rgba(254, 231, 211, 1)",
    "107px 350px 0 0 rgba(253, 208, 167, 1)",
    "137px 350px 0 0 rgba(254, 231, 211, 1)",
    "167px 350px 0 0 rgba(252, 173, 101, 1)",
    "197px 350px 0 0 rgba(225, 125, 31, 1)",
    "227px 350px 0 0 rgba(253, 197, 145, 1)",
    "257px 350px 0 0 rgba(254, 231, 211, 1)",

    "-43px 380px 0 0 rgba(253, 197, 145, 1)",
    "-13px 380px 0 0 rgba(225, 125, 31, 1)",
    "17px 380px 0 0 rgba(253, 197, 145, 1)",
    "47px 380px 0 0 rgba(254, 231, 211, 1)",
    "77px 380px 0 0 rgba(253, 197, 145, 1)",
    "107px 380px 0 0 rgba(251, 139, 35, 1)",
    "137px 380px 0 0 rgba(253, 208, 167, 1)",
    "167px 380px 0 0 rgb(139, 139, 139)",
    "197px 380px 0 0 rgba(253, 197, 145, 1)",
    "227px 380px 0 0 rgba(251, 139, 35, 1)",
    "257px 380px 0 0 rgba(252, 173, 101, 1)",
    "287px 380px 0 0 rgba(253, 197, 145, 1)",

    "-13px 410px 0 0 rgba(253, 197, 145, 1)",
    "17px 410px 0 0 rgba(251, 139, 35, 1)",
    "47px 410px 0 0 rgb(139, 139, 139)",
    "77px 410px 0 0 rgba(252, 173, 101, 1)",
    "107px 410px 0 0 rgba(225, 125, 31, 1)",
    "137px 410px 0 0 rgba(253, 197, 145, 1)",
    "167px 410px 0 0 rgba(254, 231, 211, 1)",
    "197px 410px 0 0 rgba(251, 139, 35, 1)" /*tuka*/,
    "227px 410px 0 0 rgba(253, 208, 167, 1)",

    "47px 440px 0 0 rgba(251, 139, 35, 1)",
    "77px 440px 0 0 rgba(254, 231, 211, 1)",
    "107px 440px 0 0 rgba(253, 220, 189, 1)",
    "137px 440px 0 0 rgba(254, 231, 211, 1)",
    "167px 440px 0 0 rgba(253, 197, 145, 1)",
    "197px 440px 0 0 rgba(251, 139, 35, 1)",
    "227px 440px 0 0 rgba(253, 208, 167, 1)",

    "47px 470px 0 0 rgb(139, 139, 139)",
    "77px 470px 0 0 rgba(253, 197, 145, 1)",
    "107px 470px 0 0 rgba(254, 231, 211, 1)",
    "137px 470px 0 0 rgba(251, 139, 35, 1)",
    "167px 470px 0 0 rgba(254, 231, 211, 1)",
    "197px 470px 0 0 rgba(253, 197, 145, 1)",
    "227px 470px 0 0 rgba(251, 139, 35, 1)",

    "47px 500px 0 0 rgba(254, 231, 211, 1)",
    "77px 500px 0 0 rgba(253, 197, 145, 1)",
    "107px 500px 0 0 rgba(251, 139, 35, 1)",
    "137px 500px 0 0 rgba(253, 208, 167, 1)",
    "167px 500px 0 0 rgb(139, 139, 139)",
    "197px 500px 0 0 rgba(253, 197, 145, 1)",
    "227px 500px 0 0 rgba(251, 139, 35, 1)",

    "17px 530px 0 0 rgba(253, 197, 145, 1)",
    "47px 530px 0 0 rgba(225, 125, 31, 1)",
    "77px 530px 0 0 rgba(252, 173, 101, 1)",
    "107px 530px 0 0 rgba(254, 231, 211, 1)",
    "137px 530px 0 0 rgba(251, 139, 35, 1)",
    "167px 530px 0 0 rgba(254, 231, 211, 1)",
    "197px 530px 0 0 rgba(225, 125, 31, 1)",
    "227px 530px 0 0 rgba(253, 197, 145, 1)",
    "257px 530px 0 0 rgba(251, 139, 35, 1)",

    "17px 560px 0 0 rgba(252, 173, 101, 1)",
    "47px 560px 0 0 rgba(253, 197, 145, 1)",
    "77px 560px 0 0 rgba(225, 125, 31, 1)",
    "107px 560px 0 0 rgba(253, 197, 145, 1)",
    "137px 560px 0 0 rgba(251, 139, 35, 1)",
    "167px 560px 0 0 rgba(253, 208, 167, 1)",
    "197px 560px 0 0 rgb(139, 139, 139)",
    "227px 560px 0 0 rgba(253, 197, 145, 1)",
    "257px 560px 0 0 rgba(251, 139, 35, 1)",
    "287px 560px 0 0 rgba(253, 197, 145, 1)",

    "-13px 590px 0 0 rgba(225, 125, 31, 1)",
    "17px 590px 0 0 rgba(254, 231, 211, 1)",
    "47px 590px 0 0 rgba(253, 197, 145, 1)",
    "77px 590px 0 0 rgba(251, 139, 35, 1)",
    "107px 590px 0 0 rgba(253, 208, 167, 1)",
    "137px 590px 0 0 rgb(139, 139, 139)",
    "167px 590px 0 0 rgba(253, 197, 145, 1)",
    "197px 590px 0 0 rgba(251, 139, 35, 1)",
    "227px 590px 0 0 rgba(253, 208, 167, 1)",
    "257px 590px 0 0 rgba(225, 125, 31, 1)",
    "287px 590px 0 0 rgba(253, 197, 145, 1)",
    "317px 590px 0 0 rgba(251, 139, 35, 1)",

    "-43px 620px 0 0 rgba(251, 139, 35, 1)",
    "-13px 620px 0 0 rgb(139, 139, 139)",
    "17px 620px 0 0 rgba(225, 125, 31, 1)",
    "47px 620px 0 0 rgba(251, 139, 35, 1)",
    "77px 620px 0 0 rgba(252, 173, 101, 1)",
    "107px 620px 0 0 rgba(253, 208, 167, 1)",
    "137px 620px 0 0 rgba(251, 139, 35, 1)",
    "167px 620px 0 0 rgba(253, 197, 145, 1)",
    "197px 620px 0 0 rgba(251, 139, 35, 1)",
    "227px 620px 0 0 rgba(253, 197, 145, 1)",

    "77px 650px 0 0 rgba(253, 197, 145, 1)",
    "107px 650px 0 0 rgba(251, 139, 35, 1)",
    "137px 650px 0 0 rgba(253, 208, 167, 1)",
    "167px 650px 0 0 rgba(253, 197, 145, 1)",
    "197px 650px 0 0 rgba(253, 197, 145, 1)",

    "107px 680px 0 0 rgba(253, 197, 145, 1)",
    "137px 680px 0 0 rgba(251, 139, 35, 1)",
    "167px 680px 0 0 rgba(253, 197, 145, 1)",

    "107px 710px 0 0 rgba(225, 125, 31, 1)",
    "137px 710px 0 0 rgba(253, 197, 145, 1)",
    "167px 710px 0 0 rgba(251, 139, 35, 1)",

    "107px 740px 0 0 rgba(253, 197, 145, 1)",
    "137px 740px 0 0 rgba(251, 139, 35, 1)",

    "47px 770px 0 0 rgba(253, 197, 145, 1)",
    "77px 770px 0 0 rgba(253, 197, 145, 1)",
    "107px 770px 0 0 rgba(251, 139, 35, 1)",
  ];

  return pixels
    .map((pixel) =>
      Math.random() > 0.5 ? pixel : pixel.replace(/, 1\)/, ", 0)")
    )
    .join(", ");
};

const colors = [
  "rgba(251, 139, 35, 1)",
  "rgba(225, 125, 31, 1)",
  "rgba(252, 173, 101, 1)",
  "rgba(253, 197, 145, 1)",
  "rgba(254, 231, 211, 1)",
  "rgb(139, 139, 139)",
];

export default function Home() {
  const [boxShadow, setBoxShadow] = useState(getRandomPixelShadow());

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxShadow(getRandomPixelShadow());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hidden smDown>
        <Grid
          container
          spacing={0}
          style={{
            height: "100vh",
            background: `url(${process.env.PUBLIC_URL}/assets/black.png) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <Grid container id="header-container">
            <Grid item lg={2} xs={3} md={2} id="header-left-grid">
              <Typography id="header-left-title">
                Design & Development
              </Typography>
              <div id="header-left-div">
                <div id="header-green-cube" />
                <Typography id="header-left-subtitle">
                  Available for freelance
                </Typography>
              </div>
            </Grid>
            <Grid item lg={8} xs={3} md={8} id="header-main-content">
              {items.map((item) => (
                <div
                  className="header-outside-link-div"
                  onClick={() => {
                    if (item.name === "Contact") {
                      window.location.href = item.link;
                      return;
                    } else {
                      window.open(item.link, "_blank");
                    }
                  }}
                >
                  <Typography id="header-outside-link">
                    [{item.name.slice(0, 1)}] {item.name}
                  </Typography>
                </div>
              ))}
            </Grid>
            <Grid item lg={2} xs={3} md={2} id="header-right-grid">
              <Typography id="header-right-title">@ 2025</Typography>
              <Typography id="header-right-subtitle">
                All rights reserved.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} xs={3} md={3} />
          <Grid item lg={2} xs={3} md={2} id="main-grid">
            <Typography id="main-grid-text">
              Simona
              <br />
              Anchova
            </Typography>
          </Grid>
          <Grid
            item
            lg={1.5}
            xs={1}
            md={1.5}
            className="center-content"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="pixel-container-1">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-2">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-9">
              {[...Array(27)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-5">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-6">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-10-to-the-right">
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-5">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-2">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
            <div className="pixel-container-1">
              {[...Array(1)].map((_, index) => (
                <div
                  key={index}
                  className="pixel"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
              ))}
            </div>
          </Grid>
          <Grid item lg={2.5} xs={3} md={2.5} id="description-grid">
            <Typography id="description-text">
              Skilled Software Engineer specializing in building scalable web
              applications. With over 3 years of experience working with clients
              across various industries, delivering high-performance and
              user-centric software. Passionate about innovation and
              problem-solving, combining technical excellence with a keen eye
              for user experience.
            </Typography>
          </Grid>
          <Grid container spacing={0} id="work-grid">
            <Grid item lg={1} xs={3} md={1} id="work-title-grid">
              <Typography id="work-title">Selected work</Typography>
            </Grid>
            {projects.map((project) => (
              <Grid key={project.id} item xs={3} md={2} id="project-grid">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "3px" }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: "red",
                    }}
                  ></div>
                  <Typography id="project-id">[ {project.id} ]</Typography>
                </div>
                <Typography id="project-name">{project.name}</Typography>
                <Typography id="project-description">
                  {project.description}
                </Typography>
                <Typography id="project-date">{project.date}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          style={{
            background: `url(${process.env.PUBLIC_URL}/assets/mobile1.png) no-repeat`,
            backgroundSize: "280% auto",
            minHeight: "100vh",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
          }}
        >
          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid
              item
              xs={6}
              id="header-left-grid"
              style={{
                alignSelf: "flex-start",
                height: "auto",
              }}
            >
              <Typography id="header-left-title">
                Design & Development
              </Typography>
              <div id="header-left-div">
                <div id="header-green-cube" />
                <Typography id="header-left-subtitle">
                  Available for freelance
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
                alignItems: "flex-end",
                alignSelf: "flex-start",
                height: "auto",
              }}
            >
              <Typography id="header-right-title">@ 2025</Typography>
              <Typography id="header-right-subtitle">
                All rights reserved.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              padding: "5px 0",
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            {items.map((item) => (
              <div
                className="header-outside-link-div"
                onClick={() => {
                  if (item.name === "Contact") {
                    window.location.href = item.link;
                    return;
                  } else {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <Typography id="header-outside-link">
                  [{item.name.slice(0, 1)}] {item.name}
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid
            item
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              className="typography-invert"
              style={{
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "55px",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: 1,
                padding: "20px 15px 0 15px",
                textAlign: "left",
              }}
            >
              Simona
              <br />
              Anchova
            </Typography>
            <Typography
              className="typography-invert"
              style={{
                fontFamily: "Inter-Thin",
                fontSize: "16px",
                color: "#fff",
                lineHeight: 1.1,
                padding: 0,
                textAlign: "justify",
                padding: "0 15px 0 15px",
              }}
            >
              Skilled Software Engineer specializing in building scalable web
              applications. With over 3 years of experience working with clients
              across various industries, delivering high-performance and
              user-centric software. Passionate about innovation and
              problem-solving, combining technical excellence with a keen eye
              for user experience.
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}
