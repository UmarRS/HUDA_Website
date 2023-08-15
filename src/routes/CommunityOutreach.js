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

import Navbar from "../components/Navbar";
import Header from "../components/Header";


export default function CommunityOutreach() {

  const theme = createTheme();

  return (

    <React.Fragment>

      <Navbar> </Navbar>
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
              Community Outreach
            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>
          </Box>
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
              fontSize: '25px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              Learn about our Recent and Ongoing Community Events
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
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Happy Feet - February 3rd, 2023
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
              }}> Some photos of the community helping out during Happy Feet 2023 The frigid February temperatures are the
                exact reason we hold our annual Happy Feet event at The Detroit Rescue Mission Ministry's Third Street location.
                The frigid February temperatures are the exact reason we hold our annual Happy Feet event at The Detroit Rescue
                Mission Ministry's Third Street location. This year's Happy Feet was on Friday, February 3, 2023, when Detroit
                was under the grip of an Artic blast. HUDA Clinic provided medical care, podiatry care, hair cuts, hygiene supplies,
                socks, and blankets for over 85 men. We would like to acknowledge and thank our community partners for all their
                assistance in making this the success that it was!

              </Typography>
            </Box>
          </Container>
        </Grid>
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

        <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                PMTS4Change - July 31st, 2015
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> HUDA’s volunteers partnered with Paul Mitchell Schools for an event for the homeless, providing free health screenings. 
              </Typography>
            </Box>
          </Container>
        </Grid>
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

        <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Community Barbecue - July 25th, 2015
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> HUDA invited local families to a community barbecue, complete with delicious food & fun activities! 
              </Typography>
            </Box>
          </Container>
        </Grid>
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

        <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                HUDA Clinic 10 Year Anniversary Luncheon - Dec 6th, 2014
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> Celebrating 10 years of HUDA Clinic! 
              </Typography>
            </Box>
          </Container>
        </Grid>
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

        <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Doctors for a Day
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> HUDA Clinic has hosted this event for three years, inviting inner city youth to come to HUDA and experience what it’s like to work in the world of healthcare! 
              </Typography>
            </Box>
          </Container>
        </Grid>
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

        <Grid container spacing={1}>
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Project Happy Feet
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '7vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> HUDA’s volunteers provided 70+ homeless individuals with health assessments, foot washes, podiatric services, haircuts, blankets, & care kits! 
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>


      <Container>
        <Box sx={{ bgcolor: '#fff', height: '10vh' }} textAlign='center'></Box>
      </Container>

    </React.Fragment>


  )
}
