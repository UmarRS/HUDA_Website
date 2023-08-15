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


export default function Reports() {
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
                            Annual Reports
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
                            Take a look at our Annual Reports Below!
                        </Typography>
                    </Container>
                </Grid>

          

                <Grid item md={12}>
                    <Container>
                        <Box sx={{ bgcolor: '#fff', height: '1vh', color: 'primary.contrastText' }} ></Box>
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
                    <Box sx={{ bgcolor: '#fff', height: '2vh', width: '65vh', color: 'primary.contrastText' }} ></Box>
                </Container>
            </Grid>

        



            <CssBaseline />
            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
                    <Button variant="standard" href="https://www.hudaclinic.org/cm/dpl/downloads/content/1107/HUDA_2019_AR.pdf">HUDA Clinic Annual Report 2019</Button>
                </Box>
            </Container>

            <Grid item md={4}>
                <Container>
                    <Box sx={{ bgcolor: '#fff', height: '2vh', width: '65vh', color: 'primary.contrastText' }} ></Box>
                </Container>
            </Grid>

            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
                    <Button variant="standard" href="https://www.hudaclinic.org/cm/dpl/downloads/content/1107/HUDA_2018_AR.pdf">HUDA Clinic Annual Report 2018</Button>
                </Box>
            </Container>

            <Grid item md={4}>
                <Container>
                    <Box sx={{ bgcolor: '#fff', height: '2vh', width: '65vh', color: 'primary.contrastText' }} ></Box>
                </Container>
            </Grid>

            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
                    <Button variant="standard" href="https://www.hudaclinic.org/cm/dpl/downloads/content/1107/HUDA_2017_AR.pdf">HUDA Clinic Annual Report 2017</Button>
                </Box>
            </Container>

            

            <Grid item md={12}>
                <Container>
                    <Box sx={{ bgcolor: '#fff', height: '1vh', width: '65vh', color: 'primary.contrastText' }} ></Box>
                </Container>
            </Grid>

            

            <Container>
                <Box sx={{ bgcolor: '#fff', height: '10vh' }} textAlign='center'></Box>
            </Container>

        </React.Fragment>


    )
}
