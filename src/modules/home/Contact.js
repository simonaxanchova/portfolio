import { Grid, Typography, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PiSparkleThin } from "react-icons/pi";

export default function Contact({
  handleChange,
  handleSubmit,
  formData,
  emailAlertMessage,
}) {
  const emailStatusMessage = useSelector((state) => state.global.emailSent);

  return (
    <Grid
      item
      xs={12}
      style={{
        backgroundColor: "white",
        padding: "40px",
        display: "flex",
        height: "500px",
      }}
    >
      <Grid item xs={1} />
      <Grid item xs={5}>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "180px",
              height: "40px",
              color: "#000000",
              fontWeight: "bold",
              border: "2px solid black",
              backgroundColor: "#b8ff5e",
              fontFamily: "NeueHaasDisplayLight",
              fontSize: "20px",
              transform: "rotate(350deg)",
            }}
          >
            Have a question?
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "20px",
            marginTop: "-43px",
            display: "flex",
          }}
        >
          <Typography
            style={{
              fontFamily: "FFF-AcidGrotesk-Bold",
              fontSize: "70px",
            }}
          >
            Let's get in touch
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid item xs={12}>
          <TextField
            size="medium"
            placeholder={"Name"}
            onChange={(e) => handleChange("name", e.target.value)}
            autoComplete="off"
            value={formData?.name ? formData.name : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0 0 0 0",
                color: "#171718",
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "18px",
              },
              "& fieldset": {
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#6c757d",
                borderWidth: "1px",
              },
              marginTop: "15px",
              width: "90%",
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "NeueHaasDisplayLight",
                color: "#171718",
                fontSize: "18px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="medium"
            placeholder={"Email"}
            onChange={(e) => handleChange("sender", e.target.value)}
            autoComplete="off"
            value={formData?.sender ? formData.sender : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0 0 0 0",
                color: "#171718",
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "18px",
              },
              "& fieldset": {
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#6c757d",
                borderWidth: "1px",
              },
              marginTop: "15px",
              width: "90%",
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "NeueHaasDisplayLight",
                color: "#171718",
                fontSize: "18px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="medium"
            placeholder={"Message"}
            onChange={(e) => handleChange("message", e.target.value)}
            multiline
            rows={5}
            autoComplete="off"
            value={formData?.message ? formData.message : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "0 0 0 0",
                color: "#171718",
                fontFamily: "NeueHaasDisplayLight",
                fontSize: "18px",
              },
              "& fieldset": {
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#6c757d",
                borderWidth: "1px",
              },
              marginTop: "15px",
              width: "90%",
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "NeueHaasDisplayLight",
                color: "#171718",
                fontSize: "18px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ display: "flex" }}>
          <Grid item xs={9.6} />
          <Grid item xs={2}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "NeueHaasDisplayLight",
                border: "1px solid #6c757d",
                width: "100%",
                height: "30px",
                cursor: "pointer",
                marginLeft: "5px",
                marginTop: "10px",
              }}
              onClick={handleSubmit}
            >
              SEND
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
