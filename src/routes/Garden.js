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


export default function Garden() {

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
                            HUDA Urban Garden
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
                            Empowering our patients to live & eat healthily!
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
                        <Box sx={{ bgcolor: '#fff', height: '17vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                            }}> In 2014, we successfully launched the HUDA Urban Garden - an initiative that provided months of
                                freshly grown produce for our patients and the surrounding community. This project was started by our
                                staff and student volunteers and is a testament to the compassion and zeal for service that we have at HUDA.
                                We are always looking for new ways to serve those who find themselves less fortunate than others. Two years
                                in a row, we've been able to give months of fruits and vegetables to our patients to help them take a step in a healthier direction!

                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
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

            <Grid item md={12}>
                <Container>
                    <Box sx={{ bgcolor: '#172B4D', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
                </Container>
            </Grid>

            <Grid container spacing={1}>

                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
                            <Typography sx={{
                                top: '104px',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                lineHeight: '25px',
                                fontSize: '16px',
                                letterSpacing: '0.18px',
                                color: '#172B4D',
                                margin: '16px 0px',
                            }}> Please join us every Tuesday & Thursday from 2pm - 5pm and Saturday 10am - 2pm in our HUDA Urban Garden! Open to volunteers of all ages and skill level.

                            </Typography>

                   
                        <Box sx={{ bgcolor: '#fff', height: '10vh', paddingLeft: '25vh', color: 'primary.contrastText' }} >
                            <Typography sx={{
                                top: '104px',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                lineHeight: '25px',
                                fontSize: '12px',
                                letterSpacing: '0.18px',
                                color: '#172B4D',
                                margin: '16px 0px',
                            }}> For those interested in reserving times for team building or group volunteering please reach out to Tracy@Hudaclinic.org

                            </Typography>
                        </Box>
                   
                        </Box>
                    </Container>
                </Grid>

                
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
