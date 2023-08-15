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



export default function Donate() {
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
              Donate
            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>
          </Box>
        </Container>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>



      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText' }} ></Box>
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
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '23px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              "What will the HUDA Clinic do with Your Donation?"
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
            <Box sx={{ bgcolor: '#fff', height: '1vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>


      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '24px', fontSize: '16.5px', letterSpacing: '0.18px', }}>
              You Can Help HUDA Make Metro Detroit Healthier!</Typography></Typography>
        </Container>
      </Grid>


      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '24px', fontSize: '18px', letterSpacing: '0.18px', }}>
              We could not do what we do without generous support from our community. It takes a great deal of financial support and manpower to offer the type of medical care,
              prescriptions, and resources we provide free of charge to our patients.</Typography>In order for us to continue adding new services and building upon our growth in
            ways that can really transform people's lives, we really need your help. This fundraising site was created to spread awareness about the great work being done at our
            clinic and the impact HUDA Clinic has in our great city. Please consider supporting the HUDA Clinic as we move forward in our mission to serve others and improve lives
            in the city of Detroit.</Typography>
        </Container>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '1vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

      <Grid container spacing={1}>

        <Grid item md={4}> </Grid>
        <Grid item md={4}>
          <CssBaseline />
          <Container>
            <Box sx={{ bgcolor: '#A0C6E6', height: '5vh' }} textAlign='center'>
              <Button variant="standard" href="https://donorbox.org/huda-clinic">Donate to HUDA Clinic</Button>
            </Box>
          </Container>
        </Grid>

        <Grid item md={4}> </Grid>



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
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '23px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              AmazonSmile
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
            <Box sx={{ bgcolor: '#fff', height: '1vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            By affiliating your Amazon account with HUDA Clinic's AmazonSmile link, every purchase you make will return a
            percentage of the profit back to HUDA clinic. This is a great way to keep supporting HUDA in our mission.</Typography>
        </Container>
      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            1. Open your web browser and type in the URL: “smile.amazon.com”</Typography>
        </Container>
      </Grid>

      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard" href="https://www.amazon.com/?redirectFromSmile=1">AmazonSmile</Button>
        </Box>
      </Container>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            2. Sign-in if you are not already signed in.</Typography>
        </Container>
      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            3. Navigate to the top right corner of your browser where it shows your name. Hover the mouse and click on “Your Account”.</Typography>
        </Container>
      </Grid>


      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            4. Look beneath the heading “Shopping Programs and Rentals” and click on “Change Your Charity”.</Typography>
        </Container>
      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            5. Find the search box below and type “HUDA Free Community Health Clinic” and click “Search” (or press enter.)
            There will be one result. Make sure it’s “Detroit, MI”. Click “Select”.</Typography>
        </Container>
      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            6. Once you have selected that charity, you will be asked to confirm. Check the box and click “Start Shopping”.</Typography>
        </Container>
      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            7. ALWAYS use smile.amazon.com when shopping and making purchases. A percentage of your sale will go directly to HUDA! </Typography>
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
              fontWeight: 'bold',
              lineHeight: '25px',
              fontSize: '23px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              Amazon Wishlist
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
            <Box sx={{ bgcolor: '#fff', height: '1vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

      </Grid>

      <Grid item md={8}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '18px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            If you would like to support HUDA Clinic by sponsoring some of the equipment and tools that our interns
            and providers will be using, please refer to the Amazon Wishlist below for our immediate necessities!</Typography>
        </Container>
      </Grid>

      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard" href="https://www.amazon.com/hz/wishlist/ls/2YFMS8WVDW4JA/ref=hz_ls_biz_ex">HUDA Clinic's Amazon Wishlist!</Button>
        </Box>
      </Container>


    











      <Container>
        <Box sx={{ bgcolor: '#fff', height: '20vh' }} textAlign='center'></Box>
      </Container>

    </React.Fragment>


  )
}
