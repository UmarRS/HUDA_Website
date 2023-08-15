import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import image from '../assets/img/blue.jpg'
import Button from "@mui/material/Button";
import { Typography } from "@mui/material/";
import { maxHeight, padding } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { blueGrey } from "@mui/material/colors";
import mental from "../assets/img/mental.jpg";
import dental from "../assets/img/dental.jpg";
import primary from "../assets/img/primary.jpg";
import specialty from "../assets/img/specialty.jpg";
import vision from "../assets/img/vision.JPG";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import community from "../assets/img/community.jpg";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import story from "../assets/img/story.jpg";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CommunityOutreach from "./CommunityOutreach";
import Education from "./EducationCenter";
import Garden from "./Garden";
import Reports from "./Reports";
import Headlines from "./Headlines";






export default function OurStory() {
  return (

    <React.Fragment>
       <Navbar />
      <Header> </Header>
      <CssBaseline />
      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh' }} textAlign='center'></Box>
        </Container>

        <Container>
          <Box sx={{ bgcolor: '#042c4d', height: '15vh', padding: '2vh', color: 'primary.contrastText' }} >

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>

            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              Our Story
            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>
          </Box>
        </Container>
      </Grid>


      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

      <Grid item md={12}>
      <Container>
             <Box sx={{ bgcolor: '#fff', height: '5vh', minWidth: 'sm'}} textAlign='center' display="flex" justifyContent="space-between">
                <Button variant="outlined" href="/CommunityOutreach ">Community Outreach</Button>
                <Button variant="outlined" href="/EducationCenter">Education Center</Button>
                <Button variant="outlined" href="/Headlines">HUDA in the Headlines</Button>
                <Button variant="outlined" href="/Garden">HUDA Urban Garden</Button>
                <Button variant="outlined" href="/Reports">Annual Reports</Button>
             </Box>
        </Container>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>


      <Grid container spacing={1}>

        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={2}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={8}>
          <Container>
            <Typography sx={{
              top: '104px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '25px',
              fontSize: '30px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              The History of the HUDA Clinic
            </Typography>
          </Container>
        </Grid>

        <Grid item md={2}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>


        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '1.5vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>


      <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA Clinic first opened its doors in May 2004 to serve the uninsured population of the Detroit area. 
                The clinic initially operated on funds gathered by the Muslim community of Metro Detroit.
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '20vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}> When it began, the HUDA Clinic provided solely medical services.  
              We then moved from our original facility at the Muslim Center of Detroit into a new, 
              larger facility on Woodrow Wilson Street. Since then, we have expanded our care to include a full 
              range of dental, vision care, podiatry, and mental health services, as well as a plethora of specialty 
              services available at no-cost to our patients. Our new facility has allowed us to expand our services 
              and our service times, but none of that would be possible without the generous support of our donors and volunteers.</Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>


      <Grid container spacing={1}>

      <Grid item md={2}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#042c4d', height: '0.4vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={2}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={8}>
          <Container>
            <Typography sx={{
              top: '104px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '24px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              Mission Statement:
            </Typography>
            <Typography sx={{
              top: '104px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '17px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              "Improving the lives of those in need through comprehensive health care, education, and resources."
            </Typography>
            <Typography sx={{
              top: '104px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '17px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              "Healthcare, I believe that it is kind of a right, at least, some basic care. So I think this is what we are trying to do on a very small scale.”
            </Typography>
            <Typography sx={{
              top: '104px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '14px',
              textAlign: 'right',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              - Dr. Jukaku Tayeb, Chairman
            </Typography>
          </Container>
        </Grid>

        <Grid item md={2}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>


        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#042c4d', height: '0.4vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>


      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '35vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

    </React.Fragment>


  )
}
