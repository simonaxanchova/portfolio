import {
  Button,
  Divider,
  Grid,
  Hidden,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbPointFilled } from "react-icons/tb";
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import LoaderComponent from "./LoaderComponent";
import { Canvas } from "@react-three/fiber";
import SceneContent from "./SceneContent";
import { RxOpenInNewWindow } from "react-icons/rx";
import { ProjectsData } from "../common/ProjectsData";
import { keyframes, styled } from "@mui/system";
import { CiGlobe } from "react-icons/ci";
import { emailSent, homePageHeader } from "../../store/GlobalSlice";
import emailjs from "emailjs-com";
import Contact from "./Contact";
import _ from "lodash";

const moveText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MovingText = styled("span")(({ theme }) => ({
  display: "inline-flex", // Use inline-flex to align items properly
  alignItems: "center",
  animation: `${moveText} 8s linear infinite`,
}));

const MovingTextContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
}));

export default function HomePage({ loading, setLoading }) {
  const isMenuOpen = useSelector((state) => state.global.openMenu);
  const [projects, setProjects] = useState(ProjectsData);
  const paperRef = useRef(null);
  const dispatch = useDispatch();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    recipient: "anchovasimona11@gmail.com",
    message: "",
    sender: "",
  });
  const [emailAlertMessage, setEmailAlertMessage] = useState(false);

  const technical = [
    "Back End Programming",
    "Front End Programming",
    "Java",
    "JavaScript",
    "React.js",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Web Architecture",
    "Web Design",
    "Viber API",
    "WhatsApp Business API",
    "Material UI",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 90) {
      dispatch(homePageHeader(true));
    } else {
      dispatch(homePageHeader(false));
    }

    if (position > 700 && position < 850) {
      setHoveredProject(0);
    } else if (position > 850 && position < 1000) {
      setHoveredProject(1);
    } else if (position > 1000 || position < 700) {
      setHoveredProject(null);
    }

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      document.body.scrollTop +
        ((document.documentElement && document.documentElement.scrollTop) || 0);
    const height = documentHeight - scrollTop - windowHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const form = useRef();
  useEffect(() => emailjs.init("LffmeD6icxOpdA90c"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_fxh1dar";
    const templateId = "template_gv27yzq";
    setEmailAlertMessage(false);
    try {
      await emailjs.send(serviceId, templateId, formData);
      dispatch(emailSent("Your message has been sent successfully!"));
      setEmailAlertMessage(true);
      setFormData({
        name: "",
        recipient: "anchovasimona11@gmail.com",
        message: "",
        sender: "",
      });
    } catch (error) {
      dispatch(emailSent("An error occurred while sending your message!"));
      console.log(error);
    } finally {
    }
  };

  const handleChange = (name, value) => {
    setFormData(_.set({ ...formData }, name, value));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <Hidden smDown>
            <div
              ref={paperRef}
              onScroll={handleScroll}
              style={{ scrollBehavior: "smooth" }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  marginTop: "10px",
                }}
              >
                <Grid item xs={12} style={{ display: "flex" }}>
                  <Grid item xs={1} />
                  <Grid
                    item
                    xs={8}
                    style={{
                      borderTop: "1px solid #ced4da",
                      borderLeft: "1px solid #ced4da",
                      borderRight: "1px solid #ced4da",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "-1px",
                        width: "1px",
                        height: "10px",
                        backgroundColor: "#ced4da",
                        borderBottomLeftRadius: "1px",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "-1px",
                        width: "1px",
                        height: "10px",
                        backgroundColor: "#ced4da",
                        borderBottomRightRadius: "1px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={1} />
                </Grid>
                <Grid item xs={12} style={{ display: "flex" }}>
                  <Grid item xs={1} />
                  <Grid item xs={8} style={{ textAlign: "left" }}>
                    <Typography
                      style={{
                        fontFamily: "NeueHaasDisplayRoman",
                        fontSize: "18px",
                      }}
                    >
                      Working as
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "FFF-AcidGrotesk-ExtraBold",
                        fontSize: "40px",
                      }}
                    >
                      SOFTWARE ENGINEER <TbPointFilled /> Bachelor of Computer
                      Science
                    </Typography>
                  </Grid>
                  <Grid item xs={3} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", marginTop: "-20px" }}
                >
                  <Grid item xs={1} />
                  <Grid item xs={3}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "120px",
                        height: "50px",
                        color: "#000000",
                        fontSize: "12px",
                        fontWeight: "bold",
                        border: "2px solid black",
                        backgroundColor: "#b8ff5e",
                        fontFamily: "NeueHaasDisplayLight",
                        fontSize: "22px",
                      }}
                    >
                      @ Aucta
                    </div>
                  </Grid>
                  <Grid item xs={3.5}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "50px",
                        color: "#000000",
                        fontSize: "12px",
                        fontWeight: "bold",
                        border: "2px solid black",
                        backgroundColor: "#b8ff5e",
                        fontFamily: "NeueHaasDisplayLight",
                        fontSize: "22px",
                      }}
                    >
                      @ Faculty of Computer Science and Engineering, Skopje
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={3.5} />
                <Grid item xs={5} style={{ marginTop: "-18px" }}>
                  <SceneContent />
                </Grid>
                <Grid item xs={3.5}></Grid>
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
                      fontSize: "100px",
                      textTransform: "uppercase",
                    }}
                  >
                    <MovingTextContainer>
                      <MovingText>
                        <span
                          style={{
                            fontFamily: "PPPangaia-Medium",
                            fontSize: "100px",
                            alignItems: "middle",
                            marginTop: "10px",
                          }}
                        >
                          F
                        </span>
                        eatured w
                        <CiGlobe
                          style={{ fontSize: "100px", verticalAlign: "middle" }}
                        />
                        rk
                      </MovingText>
                    </MovingTextContainer>
                  </Grid>
                  <div style={{ display: "flex" }}>
                    <Grid item xs={1} />
                    <Grid
                      item
                      xs={4}
                      style={{
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "NeueHaasDisplayMedium",
                          textTransform: "uppercase",
                          fontSize: "26px",
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
                            fontSize: "22px",
                            color: "#1f1f1f",
                          }}
                        >
                          Web Development
                        </Typography>
                        <Typography
                          style={{
                            fontFamily: "NeueHaasDisplayLight",
                            textTransform: "none",
                            fontSize: "22px",
                            color: "#1f1f1f",
                          }}
                        >
                          Web Design
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{ padding: "20px", textAlign: "left" }}
                    >
                      <Typography
                        style={{
                          fontFamily: "NeueHaasDisplayMedium",
                          textTransform: "uppercase",
                          fontSize: "26px",
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
                              fontSize: "22px",
                              color: "#1f1f1f",
                              marginLeft: "5px",
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={1} />
                  </div>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", marginBottom: "20px" }}
                  >
                    <Grid item xs={2} />
                    <Grid item xs={8}>
                      {projects.map((project, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            height: "250px",
                            backgroundColor:
                              hoveredProject === index && "#ffffff",
                            transition: "transform 0.3s ease",
                            cursor: "pointer",
                          }}
                        >
                          <Grid
                            item
                            xs={3.5}
                            style={{
                              textAlign: "left",
                              padding: "10px",
                              borderTop:
                                index === 0 ? "1px solid #171718" : "none",
                              borderRight: "1px solid #171718",
                              borderBottom: "1px solid #171718",
                              borderLeft: "1px solid #171718",
                            }}
                          >
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
                                fontSize: "16px",
                                textTransform: "uppercase",
                                marginTop: "40px",
                              }}
                            >
                              {project.date}
                            </Typography>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "130px",
                                height: "35px",
                                color: "#000000",
                                fontWeight: "bold",
                                border: "2px solid black",
                                backgroundColor: "#b8ff5e",
                                fontFamily: "NeueHaasDisplayLight",
                                fontSize: "20px",
                                marginTop: "18px",
                                marginLeft: "-40px",
                                transform: "rotate(5deg)",
                              }}
                            >
                              Made at Aucta
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={6.5}
                            style={{
                              textAlign: "left",
                              borderTop:
                                index === 0 ? "1px solid #171718" : "none",
                              borderRight: "1px solid #171718",
                              borderBottom: "1px solid #171718",
                              padding: "10px",
                            }}
                          >
                            <Typography
                              style={{
                                fontSize: "18px",
                                fontFamily: "NeueHaasDisplayLight",
                              }}
                            >
                              {project.info1}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "18px",
                                fontFamily: "NeueHaasDisplayLight",
                                marginTop: "10px",
                              }}
                            >
                              {project.info2}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={2}
                            style={{
                              borderTop:
                                index === 0 ? "1px solid #171718" : "none",
                              borderRight: "1px solid #171718",
                              borderBottom: "1px solid #171718",
                              textAlign: "left",
                              padding: "10px",
                            }}
                          >
                            <div
                              style={{
                                border: "1px solid #171718",
                                padding: "5px",
                              }}
                            >
                              <Typography
                                style={{
                                  fontFamily: "NeueHaasDisplayLight",
                                  textTransform: "uppercase",
                                  fontSize: "13px",
                                }}
                              >
                                Back End
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "16px",
                                  fontFamily: "NeueHaasDisplayRoman",
                                }}
                              >
                                {project.backend}
                              </Typography>
                            </div>
                            <div
                              style={{
                                border: "1px solid #171718",
                                padding: "5px",
                                marginTop: "5px",
                              }}
                            >
                              <Typography
                                style={{
                                  fontFamily: "NeueHaasDisplayLight",
                                  textTransform: "uppercase",
                                  fontSize: "13px",
                                }}
                              >
                                Front End
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "16px",
                                  fontFamily: "NeueHaasDisplayRoman",
                                }}
                              >
                                {project.frontend}
                              </Typography>
                            </div>
                            <div
                              style={{
                                border: "1px solid #171718",
                                padding: "5px",
                                marginTop: "5px",
                              }}
                            >
                              <Typography
                                style={{
                                  fontFamily: "NeueHaasDisplayLight",
                                  textTransform: "uppercase",
                                  fontSize: "13px",
                                }}
                              >
                                Database
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "16px",
                                  fontFamily: "NeueHaasDisplayRoman",
                                }}
                              >
                                {project.database}
                              </Typography>
                            </div>
                          </Grid>
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
                <Contact
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  formData={formData}
                  emailAlertMessage={emailAlertMessage}
                />
              </Grid>
            </div>
          </Hidden>
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
                    padding: "20px",
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
                <Grid
                  item
                  xs={12}
                  style={{ padding: "20px", textAlign: "left" }}
                >
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
                <Grid
                  item
                  xs={12}
                  style={{ padding: "20px", textAlign: "left" }}
                >
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
            </Grid>
          </Hidden>
        </>
      )}
    </>
  );
}
