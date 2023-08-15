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


export default function EducationCenter() {

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
              Education Center
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
              More Information Coming Soon for HUDA's Education Center.
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
                Seasonal Affective Disorder
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '24vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> By: Dr. Saba Maroof, MD As the weather becomes more chilly, pumpkin spice lattes make their return 
              and colorful mums and fall décor come out, many of us welcome the beginning of fall. The air becomes brisk, 
              kids enjoy soccer games and tournaments, and sweater weather is finally here. But not everyone finds joy in 
              the transition to shorter days and longer nights. As a psychiatrist who treats children, adolescents and adults, 
              many of my patients describe worsening mood and increased anxiety as the summer draws to an end. For some, changes 
              in mood can be detected as early as August, as they anticipate the long winter ahead. While not all mood changes are
               pathological, some are severe enough and meet criteria to be considered Seasonal Affective Disorder or SAD. SAD is a 
               form of a mood disorder and cluster of mood symptoms that can be seen as part of depression and anxiety, as well as
                bipolar disorder.

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
                What we need to know about Diabetes
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> By: Zoha Rehman There are 2 forms of diabetes, Type 1 Diabetes and Type Diabetes 2. The way our body normally 
              is that it breaks the food we intake into sugar. This sugar is known as glucose. Glucose helps the cells in our body function properly.
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
                Red Alert: Hypertension
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> By: Zoha Rehman High blood pressure is something we may all of heard off. But what that exactly mean? In a nutshell, 
              increase in blood flow to the heart, the narrower the arteries thus increase in blood pressure. Hypertension has serious.
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
                Vitamin B12 Deficiency - Symptoms & Possible Treatments
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> By: Anisa Musleh Vitamin B12 is not usually discussed or commonly known like Vitamin D, C or A. 
              Many people can tell you what all of those vitamins do and what foods contain high concentrations of them.
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
                Effects of Stress & How to Relieve It
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={812}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
              }}> By: Anisa Musleh There are many things that can lead to stress. Sometimes these problems can 
              persist for long periods of time where it can develop into chronic stress. It’s normal to feel this way once in a while however this can have many.
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

    


      <Container>
        <Box sx={{ bgcolor: '#fff', height: '10vh' }} textAlign='center'></Box>
      </Container>

    </React.Fragment>


  )
}
