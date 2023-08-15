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


export default function Contact() {

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
              Contact Us
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
                            HUDA, a Free Community Health Clinic in Metro Detroit
                        </Typography>
                    </Container>
                </Grid>

          

                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '.2vh', color: 'primary.contrastText' }} ></Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#172B4D', height: '.2vh', color: 'primary.contrastText' }} ></Box>
                    </Container>
                </Grid>

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
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Call: (313)-865-8446
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Hours:
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Tuesday: 8:30 AM – 2:00 PM (limited walk-in/appointments)
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Wednesday: 9:00 AM – 12:00 PM                               (TELEMEDICINE ONLY)
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Thursday: 8:30 AM – 2:00 PM                                    (limited walk-in/appointments)
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                            Saturday: 8:30 AM – 2:00 PM                                     (limited walk-in/appointments)
                        </Typography>
                    </Container>

                    <Container>
                        <Typography sx={{
                            top: '104px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            lineHeight: '25px',
                            fontSize: '14px',
                            textAlign: 'center',
                            letterSpacing: '0.18px',
                            color: '#172B4D',
                            margin: '16px 0px',
                        }}>
                           Email: info@hudaclinic.org | Fax: (313) 865-8474 
                        </Typography>
                    </Container>

                </Grid>

          

                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '.2vh', color: 'primary.contrastText' }} ></Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#172B4D', height: '.2vh', color: 'primary.contrastText' }} ></Box>
                    </Container>
                </Grid>

            </Grid>



      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

            <div className="google-map-code">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.4651079389887!2d-83.11229808441007!3d42.396539979184354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cdba0b0202e3%3A0x22599da81c9511b0!2sHUDA%20Clinic!5e0!3m2!1sen!2sus!4v1678390445175!5m2!1sen!2sus" width="500" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </Paper>
        </Container>
      </ThemeProvider>

      <Container>
        <Box sx={{ bgcolor: '#fff', height: '5vh' }} textAlign='center'></Box>
      </Container>

    </React.Fragment>


  )
}
