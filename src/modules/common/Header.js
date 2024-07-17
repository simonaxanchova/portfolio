import { Grid, Hidden, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../store/GlobalSlice";
import { SETTINGS } from "../../Settings";
import { changeLanguage } from "../properties/Locale";
import HeaderMenu from "./HeaderMenu";
import { Outlet } from "react-router-dom";

export default function Header({ loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = React.useState(false);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.global.openMenu);
  const languages = SETTINGS.languages;
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const homeHeader = useSelector((state) => state.global.homePageHeader);

  const handleLanguageChange = () => {
    setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    changeLanguage(languages[currentLanguageIndex].key);
  };

  useEffect(() => {
    console.log(homeHeader);
  }, [homeHeader]);

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
      width: "50px",
      height: "50px",
      position: "relative",
      overflow: "hidden",
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
      backgroundColor: "white",
    },
    hoverEffectVisible: {
      opacity: 1,
    },
    headerOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "80px",
      backdropFilter: homeHeader ? "blur(10px)" : "none",
      backgroundColor: homeHeader ? "rgba(255, 255, 255, 0.5)" : "transparent",
      zIndex: 999,
    },
  };

  return (
    <>
      {!loading && (
        <>
          <Hidden smDown>
            <div style={styles.headerOverlay}>
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
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "18px",
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
                ></Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "20px",
                  }}
                >
                  <Typography
                    onClick={handleLanguageChange}
                    style={{
                      fontSize: "16px",
                      fontFamily: "NeueHaasDisplayRoman",
                      paddingRight: "20px",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    ● {languages[currentLanguageIndex].name}
                  </Typography>
                  <Typography
                    style={styles.typography}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => dispatch(openMenu(true))}
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
              </Grid>
              <Outlet />
            </div>
          </Hidden>
          <Hidden smUp>
            <div style={styles.headerOverlay}>
              <Grid
                container
                alignItems="center"
                style={{
                  height: "100%",
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <Grid item xs={0.5} />
                <Grid
                  item
                  xs={11}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "NeueHaasDisplayLight",
                      fontSize: "18px",
                      marginRight: "50px",
                    }}
                  >
                    Simona Anchova
                  </Typography>
                  <Typography
                    style={styles.typography}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => dispatch(openMenu(true))}
                    sx={{ textAlign: "right" }}
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
                <Grid item xs={0.5} />
              </Grid>
            </div>
          </Hidden>
        </>
      )}
    </>
  );
}
