import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //testing the new branch

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  paddingTop: 1,
                  paddingLeft: 3,
                  maxHeight: { xs: 80, md: 80 },
                  maxWidth: { xs: 100, md: 100 },
                }}
                src="http://www.hudaclinic.org/images/logo.png"
              />
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Stack direction="row" spacing={2}>
                <Button
                  href='https://api.preview.platform.athenahealth.com/oauth2/v1/authorize?client_id=0oahqcmimiyUvkkAp297&response_type=code&redirect_uri=http://localhost:3000/appointments&scope=openid&state={"PRACTICEID":"80000"}'
                  variant="contained"
                  sx={{ color: "primary" }}
                  size="small"
                >
                  {" "}
                  Login with athenahealth{" "}
                </Button>
                <Button
                  href="/NewPatientForms"
                  variant="outlined"
                  sx={{ color: "primary" }}
                  size="small"
                >
                  {" "}
                  New Patient
                </Button>
              </Stack>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
