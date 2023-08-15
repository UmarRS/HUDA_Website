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
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Header from "../components/Header";


export default function Headlines() {

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
                            HUDA in the Headlines
                        </Typography>

                        <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>
                    </Box>
                </Container>

            </Grid>



            <Grid item md={2}>
                <Container>
                    <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} ></Box>
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
                                Muslims fill the medical void in Michigan
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Muslims-fill-the-medical-void-in-Michigan_AE45.html'><button>Read more..</button></Link>
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

            <Grid item md={2}>
                <Container>
                    <Box sx={{ bgcolor: '#fff', height: '0vh', color: 'primary.contrastText' }} ></Box>
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
                                Community clinic hosts free health screenings in Detroit - WDET 101.9 FM
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Community-clinic-hosts-free-health-screenings-in-Detroit---WDET-101.9-FM_AE43.html'><button>Read more..</button></Link>
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
                                Opinion: Supporting community organizations confronting COVID-19
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Opinion-Supporting-community-organizations-confronting-COVID-19_AE42.html'><button>Read more..</button></Link>
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
                               Muslims Fill Medical Void in Michigan
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Muslims-Fill-Medical-Void-in-Michigan_AE41.html'><button>Read more..</button></Link>
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
                                Here's how Michigan providers are improving whole-body health by integrating dental and primary care
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Heres-how-Michigan-providers-are-improving-whole-body-health-by-integrating-dental-and-primary-care_AE40.html'><button>Read more..</button></Link>
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
                                HUDA Clinic prescribes food as medicine for uninsured Detroiters
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/HUDA-Clinic-prescribes-food-as-medicine-for-uninsured-Detroiters_AE39.html'><button>Read more..</button></Link>
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
                                Back 2 School Store event helps low-income families in Detroit
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/Back-2-School-Store-event-helps-low-income-families-in-Detroit_AE38.html'><button>Read more..</button></Link>
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
                                HUDA Clinic: Muslim clinic offers free health care to the under-served
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/HUDA-Clinic-Muslim-clinic-offers-free-health-care-to-the-under-served_AE37.html'><button>Read more..</button></Link>
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
                                How once-vacant sites are becoming hubs for health equity in Michigan
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/How-once-vacant-sites-are-becoming-hubs-for-health-equity-in-Michigan_AE36.html'><button>Read more..</button></Link>
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
                                300+ People In Need In Detroit Get Free Haircuts
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '6vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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

                                <Link to='https://www.hudaclinic.org/our-story/in-the-headlines/300%2B-People-In-Need-In-Detroit-Get-Free-Haircuts_AE35.html'><button>Read more..</button></Link>
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
