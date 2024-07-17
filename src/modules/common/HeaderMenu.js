import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../../store/GlobalSlice";
import { SETTINGS } from "../../Settings";
import { BsArrowUpRight } from "react-icons/bs";
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import { GrLinkedinOption } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";

const styles = {
  typography: {
    fontSize: "16px",
    fontFamily: "NeueHaasDisplayRoman",
    textAlign: "center",
    textTransform: "uppercase",
    border: "1px solid #171718",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px", // Fixed width
    height: "60px", // Fixed height
    position: "relative", // Needed for pseudo-element positioning
    overflow: "hidden", // Hide overflow to maintain box size
    cursor: "pointer",
  },
  hoverEffect: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    opacity: 0,
    transition: "opacity 0.3s ease",
    backgroundColor: "white", // Background to cover original text
  },
  hoverEffectVisible: {
    opacity: 1,
  },
};

export default function HeaderMenu() {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(false);
  const menuItems = SETTINGS.menuItems;
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  return (
    <>
      <Grid
        container
        style={{
          padding: "20px",
          zIndex: 1000,
        }}
      >
        <Grid item xs={1} />
        <Grid item xs={8} />
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
        >
          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "NeueHaasDisplayRoman",
              marginRight: "20px",
              textAlign: "right",
              whiteSpace: "nowrap",
              paddingTop: "20px",
            }}
          >
            ● English
          </Typography>
          <Typography
            style={{
              ...styles.typography,
              textAlign: "right",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => dispatch(openMenu(false))}
          >
            Menu
            <div
              style={{
                ...styles.hoverEffect,
                ...(hovered && styles.hoverEffectVisible),
              }}
            >
              Menu
              <br />
              Menu
              <br />
              Menu
            </div>
          </Typography>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid
          item
          xs={8.5}
          style={{
            textAlign: "left",
          }}
        >
          {menuItems?.map((item, index) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                style={{
                  fontFamily:
                    hoveredMenuItem === item.key
                      ? "NeueHaasDisplayLightItalic"
                      : "NeueHaasDisplayRoman",
                  textTransform: "uppercase",
                  fontSize: "50px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredMenuItem(item.key)}
                onMouseLeave={() => setHoveredMenuItem(item.key)}
              >
                {item?.name}
              </Typography>
              {hoveredMenuItem === item.key && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    //marginTop: "20px",
                    marginLeft: "30px",
                    border: "2px solid black",
                    backgroundColor: "#b8ff5e",
                  }}
                >
                  <PiArrowElbowRightDownLight
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </div>
              )}
            </div>
          ))}
        </Grid>
        <Grid
          item
          xs={1.4}
          style={{
            marginTop: "40px",
            textAlign: "right",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            style={{
              fontFamily: "NeueHaasDisplayRoman",
              textTransform: "uppercase",
              fontSize: "30px",
              marginRight: "10px",
              cursor: "pointer",
              lineHeight: "1", // Ensure line height doesn't push the icon out of alignment
            }}
            onMouseEnter={() => setLinkedinHovered(true)}
            onMouseLeave={() => setLinkedinHovered(false)}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/simonaxanchova/",
                "_blank"
              )
            }
          >
            LinkedIn
          </Typography>
          <GrLinkedinOption
            style={{
              color: linkedinHovered ? "#0a66c2" : "inherit",
              fontSize: "24px",
            }}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
