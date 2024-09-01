import { Grid, Hidden, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goToPosition, openMenu } from "../../store/GlobalSlice";
import { SETTINGS } from "../../Settings";
import { changeLanguage } from "../properties/Locale";
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
      backdropFilter: homeHeader && !isMenuOpen ? "blur(10px)" : "none",
      backgroundColor:
        homeHeader && !isMenuOpen ? "rgba(255, 255, 255, 0.5)" : "transparent",
      zIndex: 999,
    },
  };

  const menuItems = [
    {
      id: 1,
      name: "Featured work",
      offsetPosition: 650,
    },
    {
      id: 2,
      name: "Contact",
    },
    {
      id: 3,
      name: "About",
    },
  ];

  useEffect(() => {
    console.log(window.pageYOffset);
  }, [window.pageYOffset]);

  return (
    <>
      {!loading && (
        <>
          <Hidden smDown>
            <div style={styles.headerOverlay}>
              <Grid
                container
                style={{
                  height: !isMenuOpen ? "100%" : "250px",
                  backdropFilter: isMenuOpen ? "blur(10px)" : "none",
                  backgroundColor: isMenuOpen
                    ? "rgba(255, 255, 255, 0.5)"
                    : "transparent",
                  alignItems: "start",
                  //  border: "1px solid red",
                  zIndex: 999,
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
                      marginTop: "15px",
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
                  xs={1.5}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    onClick={handleLanguageChange}
                    style={{
                      fontSize: "16px",
                      fontFamily: "NeueHaasDisplayRoman",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    ● {languages[currentLanguageIndex].name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={0.5}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    style={styles.typography}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => dispatch(openMenu(!isMenuOpen))}
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
                {isMenuOpen && (
                  <Grid item xs={12} style={{ display: "flex" }}>
                    <Grid item xs={9} />
                    <Grid item xs={2} style={{ textAlign: "right" }}>
                      {menuItems.map((item) => (
                        <Typography
                          key={item.id}
                          style={{
                            fontFamily: "NeueHaasDisplayLight",
                            fontSize: "16px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (item.name === "Contact") {
                              dispatch(goToPosition(true));
                            }
                          }}
                        >
                          {item.name}
                        </Typography>
                      ))}
                      <Typography
                        style={{
                          fontFamily: "NeueHaasDisplayLight",
                          fontSize: "16px ",
                          marginRight: "5px",
                          cursor: "pointer",
                          marginTop: "20px",
                        }}
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/simonaxanchova/",
                            "_blank"
                          )
                        }
                      >
                        LINKEDIN
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "NeueHaasDisplayLight",
                          fontSize: "16px ",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          window.open(
                            "https://www.behance.net/simonaxanchova",
                            "_blank"
                          )
                        }
                      >
                        BEHANCE
                      </Typography>
                    </Grid>
                    <Grid item xs={1} />
                  </Grid>
                )}
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
                      marginTop: "15px",
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
