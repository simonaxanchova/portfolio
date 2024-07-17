import { Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import SceneContent from "./SceneContent";
import { keyframes, styled } from "@mui/system";
import { RxOpenInNewWindow } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import ContactMobile from "./ContactMobile";

const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MovingText = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  animation: `${moveText} 8s linear infinite`,
}));

const MovingTextContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
}));

export default function HomePageMobile({
  technical,
  projects,
  emailAlertMessage,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <Hidden smUp>
      <Grid container style={{ marginTop: "10px" }}>
        <Grid item xs={0.5} />
        <Grid
          item
          xs={11}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              textAlign: "left",
              border: "1px solid #ced4da",
              padding: "10px",
              width: "100%",
            }}
          >
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayRoman",
                fontSize: "16px",
              }}
            >
              Working as
            </Typography>
            <Typography
              style={{
                fontFamily: "FFF-AcidGrotesk-ExtraBold",
                fontSize: "25px",
                whiteSpace: "nowrap",
              }}
            >
              SOFTWARE ENGINEER
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90px",
                height: "35px",
                color: "#000000",
                fontSize: "12px",
                fontWeight: "bold",
                border: "2px solid black",
                backgroundColor: "#b8ff5e",
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "18px",
              }}
            >
              @ Aucta
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "left",
              borderBottom: "1px solid #ced4da",
              borderRight: "1px solid #ced4da",
              borderLeft: "1px solid #ced4da",
              padding: "10px",
              width: "100%",
            }}
          >
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayRoman",
                fontSize: "16px",
              }}
            >
              Education
            </Typography>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "22px",
              }}
            >
              Bachelor of Computer Science
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                height: "55px",
                color: "#000000",
                fontSize: "12px",
                fontWeight: "bold",
                border: "2px solid black",
                backgroundColor: "#b8ff5e",
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "18px",
                padding: "10px",
              }}
            >
              @ Faculty of Computer Science and Engineering, Skopje
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SceneContent />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            backgroundColor: "#d6dbe1",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "#d6dbe1",
              width: "100%",
              textAlign: "center",
              fontFamily: "NeueHaasDisplayLight",
              fontSize: "40px",
              textTransform: "uppercase",
            }}
          >
            <MovingTextContainer>
              <MovingText>
                <span
                  style={{
                    fontFamily: "PPPangaia-Medium",
                    fontSize: "42px",
                    verticalAlign: "middle",
                  }}
                >
                  F
                </span>
                eatured w
                <CiGlobe
                  style={{ fontSize: "45px", verticalAlign: "middle" }}
                />
                rk
              </MovingText>
            </MovingTextContainer>
          </Grid>
          <Grid item xs={12} style={{ padding: "20px", textAlign: "left" }}>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayMedium",
                textTransform: "uppercase",
                fontSize: "18px",
                color: "#1f1f1f",
              }}
            >
              What I can do
            </Typography>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "70%",
              }}
            >
              <Typography
                style={{
                  fontFamily: "NeueHaasDisplayLight",
                  textTransform: "none",
                  fontSize: "18px",
                  color: "#1f1f1f",
                }}
              >
                Web Development
              </Typography>
              <Typography
                style={{
                  fontFamily: "NeueHaasDisplayLight",
                  textTransform: "none",
                  fontSize: "18px",
                  color: "#1f1f1f",
                }}
              >
                Web Design
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} style={{ padding: "20px", textAlign: "left" }}>
            <Typography
              style={{
                fontFamily: "NeueHaasDisplayMedium",
                textTransform: "uppercase",
                fontSize: "18px",
                color: "#1f1f1f",
              }}
            >
              Technical skills
            </Typography>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {technical?.map((tech, index) => (
                <Typography
                  key={index}
                  style={{
                    fontFamily: "NeueHaasDisplayLight",
                    textTransform: "none",
                    fontSize: "17px",
                    color: "#1f1f1f",
                    marginLeft: "5px",
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </div>
          </Grid>
          <div style={{ padding: "20px" }}>
            {projects?.map((project) => (
              <div style={{ marginTop: "10px" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "left",
                    border: "1px solid #171718",
                    padding: "10px",
                  }}
                >
                  <div style={{ float: "right" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "120px",
                        height: "30px",
                        color: "#000000",
                        fontSize: "12px",
                        fontWeight: "bold",
                        border: "1px solid black",
                        backgroundColor: "#b8ff5e",
                        fontFamily: "NeueHaasDisplayLight",
                        fontSize: "16px",
                        transform: "rotate(5deg)",
                      }}
                    >
                      Made at Aucta
                    </div>
                  </div>
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayRomanItalic",
                      fontSize: "22px",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.date}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "left",
                    borderBottom: "1px solid #171718",
                    borderRight: "1px solid #171718",
                    borderLeft: "1px solid #171718",
                    padding: "10px",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "16px",
                    }}
                  >
                    {project.info1}
                  </Typography>
                  <br />
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "16px",
                    }}
                  >
                    {project.info2}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "16px",
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <RxOpenInNewWindow
                      style={{ fontSize: "22px", marginRight: "5px" }}
                    />
                    View project
                  </Typography>
                </Grid>
              </div>
            ))}
          </div>
        </Grid>
        <ContactMobile
          emailAlertMessage={emailAlertMessage}
          formData={formData}
          handleChange={handleChange}
          handleSubmit
        />
      </Grid>
    </Hidden>
  );
}
