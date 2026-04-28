import { Grid, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const projects = [
    {
        name: "Aucta Website",
        desc: "UX/UI Developer",
        year: "2025"
    },
    {
        name: "Portal for E-Services",
        desc: "Agency of Real Estate Cadastre",
        year: "2024"
    },
]

export default function Home2() {
    return (
        <Box position="relative" width="100%" height="140vh">
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100vh',
                    left: '20%',
                    width: '1px',
                    backgroundColor: '#404041',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '100vh',
                    height: '100vh',
                    left: '20%',
                    width: '1px',
                    backgroundColor: '#b2b2b2',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100vh',
                    left: '80%',
                    width: '1px',
                    backgroundColor: '#404041',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '100vh',
                    height: '100vh',
                    left: '80%',
                    width: '1px',
                    backgroundColor: '#b2b2b2',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    width: 800,
                    height: 400,
                    border: "1px solid #fff",
                    borderTop: 'none',
                    borderRadius: '0 0 400px 400px',
                    transformOrigin: 'center top',
                    transform: 'translateX(-50%) scale(2)',
                    animation: 'shrinkSphere 3s ease-out forwards',
                    zIndex: 1000,
                    pointerEvents: 'none',
                    marginTop: "-200px",
                    mixBlendMode: "difference",
                }}
            />

            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 999,
                    color: '#fff',
                    padding: '5px 5px',
                    fontFamily: 'Inter-Light',
                    fontSize: '14px',
                    margin: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '97vh',
                    width: '250px',
                }}
            >
                <Box style={{ textAlign: "left" }}>
                    <Typography id="header-left-title">Design & Development</Typography>
                    <div id="header-left-div">
                        <div id="header-green-cube" />
                        <Typography id="header-left-subtitle">Available for freelance</Typography>
                    </div>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                    <Grid item xs={12} style={{ border: '1px solid #0050FF', display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                        <List dense style={{ fontFamily: "Inter-Light", gap: "10pxnp" }}>
                            <ListItem>
                                <ListItemText style={{ fontFamily: "Inter-Regular" }}>Work</ListItemText>
                                <ListItemText style={{ fontFamily: "Inter-Light", }}>Profile</ListItemText>
                                <ListItemText style={{ fontFamily: "Inter-Light" }}>Contact</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Box>
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    zIndex: 999,
                    color: '#fff',
                    padding: '5px 5px',
                    fontFamily: 'Inter-Light',
                    fontSize: '14px',
                    margin: 1,
                    textAlign: "right"
                }}
            >
                <Typography id="header-right-title">@ 2025</Typography>
                <Typography id="header-right-subtitle">
                    All rights reserved.
                </Typography>
            </Box>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{
                    height: '100vh',
                    position: 'relative',
                    background: "black",
                }}
            >

                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: "#fff",
                        fontFamily: "Inter-Light",
                        opacity: 0,
                        animation: 'fadeIn 1s ease forwards',
                        animationDelay: '0.8s',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 }
                        }
                    }}
                >
                    Simona Anchova
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        position: 'absolute',
                        top: '55.5%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: "#afafaf",
                        fontFamily: "Inter-Light",
                        lineHeight: "1",
                        fontSize: "14px",
                        width: "500px",
                        opacity: 0,
                        animation: 'fadeIn 1s ease forwards',
                        animationDelay: '1.3s',
                        '@keyframes fadeIn': {
                            from: { opacity: 0 },
                            to: { opacity: 1 }
                        }
                    }}
                >
                    Skilled Software Engineer specializing in building scalable web applications. With over 3 and a half years of experience working with clients across various industries, delivering high-performance backend solutions. Passionate about innovation and problem-solving, combining technical excellence with a focus on system design, performance, and maintainability.
                </Typography>

                <Box
                    sx={{
                        width: 700,
                        height: 700,
                        border: '1px solid #404041',
                        position: 'relative',
                        animation: 'growBox 3s ease-out forwards',
                        '@keyframes growBox': {
                            '0%': { transform: 'scale(0.5)', opacity: 0 },
                            '80%': { transform: 'scale(1)', opacity: 1 },
                            '100%': { transform: 'scale(1)', opacity: 1 },
                        },
                    }}
                >
                    {[1, 2].map((idx) => (
                        <Box
                            key={idx}
                            sx={{
                                position: 'absolute',
                                top: idx,
                                left: idx,
                                right: idx,
                                bottom: idx,
                                border: '1px solid #008cff',
                                opacity: 1,
                                animation: `flashRect${idx} 3s ease-out forwards`,
                                transformOrigin: 'center',
                                pointerEvents: 'none',
                            }}
                        />
                    ))}

                    <style>
                        {`
              @keyframes flashRect1 {
                0% { opacity: 1; transform: scale(0.95); }
                50% { opacity: 0.7; transform: scale(1); }
                100% { opacity: 0; transform: scale(1); }
              }
              @keyframes flashRect2 {
                0% { opacity: 1; transform: scale(0.90); }
                50% { opacity: 0.7; transform: scale(1); }
                100% { opacity: 0; transform: scale(1); }
              }
              @keyframes shrinkSphere {
                0% { transform: translateX(-50%) scale(2); }
                100% { transform: translateX(-50%) scale(1); }
              }
            }
            `}
                    </style>
                </Box>
            </Grid>

            {/* Second Container */}
            <Grid
                container
                style={{
                    height: '100vh',
                    backgroundColor: '#0050FF',
                    // padding: '30px 50px',
                }}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={2.5} style={{ padding: "20px" }} />
                <Grid item xs={7} style={{ border: "1px solid red" }}>
                    {projects?.map((item, index) => (
                        <Box style={{ border: "1px solid red" }}>
                            <Typography>{item.name}</Typography>
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={2.5} />
            </Grid>
        </Box>
    );
}
