import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Stack } from "@mui/system";
import Link from '@mui/material/Link';
import Donate from "../routes/Donate";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


export default function Header() {
  return (

    <React.Fragment>  

        <CssBaseline />
            <Container>
             <Box sx={{ bgcolor: '#cfe8fc', height: '5vh', minWidth: 'sm'}} textAlign='center'>
                <Button variant="standard" href="/">Home</Button>
                <Button variant="standard" href="/Announcements">Announcements</Button>
                <Button variant="standard" href="/healthservices">Health Services</Button>
                <Button variant="standard" href="/ourstory">Our Story</Button>
                <Button variant="standard" href="/Donate">Donate</Button>
                <Button variant="standard" href="/Volunteer">Volunteer</Button>
                <Button variant="standard" href="/Partners">Partners</Button>
                <Button variant="standard" href="/Contact">Contact Us</Button>
             </Box>
        </Container>
    </React.Fragment>
  
      

  );
}

