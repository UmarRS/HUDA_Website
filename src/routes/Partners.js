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
import Navbar from "../components/Navbar";
import Header from "../components/Header";



export default function Partners() {
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
              Community Partners
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
              We Are Thankful to Our Patrons for Helping Us Provide Free Healthcare to the Metro Detroit Area.
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
            <Box sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>


      <Grid container spacing={1}>
        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', paddingLeft: '3vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Blue Cross Blue Shield of Michigan
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box  style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                St. Joseph Mercy Oakland Hospital
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText', paddingRight: '5vh' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Michigan State University College of Human Medicine
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA is a recipient of the Strengthening the Safety Net Grant by Blue Cross Blue Shield, six years in a row!
              </Typography>
              <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://www.bcbsm.com/">BCBC</Button>
                </Box>
              </Container>

            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Thank you for playing an essential role in HUDA Clinic's mission 
                by providing pro bono laboratory services for our at need patients.</Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://www.stjoesoakland.org/welcome-to-st-joseph-mercy-oakland">St. Joseph Mercy</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingRight:'5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA is a proud community partner of MSU College of Human Medicine &
                the Ascension Providence Family Medicine Residency Program.  </Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="https://humanmedicine.msu.edu/">MSU CHM</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Grid>
      </Grid>

      <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh' }} textAlign='center'></Box>
      </Container>




      <Grid container spacing={1}>
        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Michigan State University College of Osteopathic Medicine
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box  style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Community Foundation of Southeast Michigan
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText', paddingRight: '5vh' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Delta Dental
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA has been a proud community partner of the Michigan State University College of Osteopathic Medicine for several years.
              </Typography>
              <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="https://com.msu.edu/">MSU COM</Button>
                </Box>
              </Container>

            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA is a recipient of the Community Foundation for Southeast Michigan Grant, 
                aimed to expand the operations of our dental services</Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://www.cfsem.org/">CFSEM</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingRight:'5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA is a recipient of the Brighter Futures Community Grant from Delta Dental, three years in a row!  </Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="deltadentalmi.com">Delta Dental</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Grid>
      </Grid>


      <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh' }} textAlign='center'></Box>
      </Container>




      <Grid container spacing={1}>
        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '3vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                WSU Pharmacy School
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box  style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                The Elite Smile Center
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box style={{ textAlign: 'center' }} sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText', paddingRight: '5vh' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '18px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
               Family Rehab Care
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                HUDA is proud to host Wayne State University’s Pharmacy Student's community clinical rotations!
              </Typography>
              <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://cphs.wayne.edu/">WSU Pharmacy</Button>
                </Box>
              </Container>

            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Thank you Dr. Shakeel Niazi and the folks at the Elite Smile Center for helping start our free dental clinic! </Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://www.elitesmilecenter.com/">Elite Smile Center</Button>
                </Box>
              </Container>
            </Box>
          </Container>
        </Grid>


        <Grid item md={4}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '15vh', paddingRight:'5vh', color: 'primary.contrastText' }} >
              <Typography style={{ textAlign: 'center' }} sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Thank you for volunteering your services and helping them develop home exercise programs! </Typography>

                <Container>
                <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
                  <Button variant="standard" href="http://familyrehabcare.com/">Family Reham Care</Button>
                </Box>
              </Container>
            </Box>
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
