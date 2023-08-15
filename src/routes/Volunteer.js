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




export default function Volunteer() {
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
              Volunteer
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
              Volunteering with HUDA
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
        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '75vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography display="inline" sx={{
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
                The HUDA Clinic began because of the committed efforts of volunteers, and we continue to succeed in serving our community through volunteerism
              </Typography>
              <Typography display="inline" sx={{
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
                . Along with providing health care to the uninsured and under-insured population of Metro-Detroit,
                HUDA Clinic strives to engage student pursuing a future in healthcare with experience in their prospective
                field. HUDA volunteers are provided with the opportunity to volunteer in both clinical and non-clinical settings.
                In clinical settings, volunteers gain hands-on experience through direct contact with patients, this includes
                taking patient vital signs, gathering patient social history and present history. Volunteers are also provided with
                other skills, such as learning management skills, filling medications, and first-hand communication with patients.
                Volunteers are also exposed to medical professionals, who range in specialty, providing students with great insight
                into the field of medicine. In non-clinical settings, volunteers participate in a variety of opportunities through
                outreach events, and volunteering at our urban garden (please refer to the garden application tab for more information)
                that aims to service and engage the Metro-Detroit community. Through such events, volunteers are given the opportunity
                to establish connections with community members including medical professionals, current health students and other
                prospective health students. Join us in our efforts to increase access to health care and provide experience to
                health-care professionals of tomorrow!
              </Typography>
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
                Licensed health-care professionals interested in volunteering their services at HUDA; Please fill out our volunteer application for health care professionals (available below).
                HUDA Clinic would not be where it is today without the generosity of healthcare professionals!
              </Typography>

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
                Students in medical school, in a nurse practitioner or physician assistant program; Please fill out the volunteer application for healthcare professionals (available below).
              </Typography>

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
              }} style={{ textAlign: 'center' }}>
                For outreach volunteer opportunities, check out our Facebook and Instagram @HUDAClinic.
              </Typography>
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#861414',
                margin: '16px 0px',
              }} style={{ textAlign: 'center' }} >
                Our Clinical Internship Application for the 2023 internship cycle
                (medical, dental, public health) is now OPEN! All applications are
                due 11:59 pm on November 30th, 2022.  Follow us on social media for more updates.
              </Typography>

            </Box>
          </Container>
        </Grid>

        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText' }} ></Box>
          </Container>
        </Grid>

        <Grid item md={2}> </Grid>

        <Grid item md={3}>
          <CssBaseline />
          <Container>
            <Box sx={{ bgcolor: '#A0C6E6', height: '13vh' }} textAlign='center'>
              <Button variant="standard" href="https://waynestate.az1.qualtrics.com/jfe/form/SV_0ies9WdLLn5tegS">HUDA Clnical Internship Application (medical, dental, & public health) </Button>
            </Box>
          </Container>
        </Grid>

        <Grid item md={3}>
          <CssBaseline />
          <Container>
            <Box sx={{ bgcolor: '#A0C6E6', height: '13vh' }} textAlign='center'>
              <Button variant="standard" href="https://waynestate.az1.qualtrics.com/jfe/form/SV_e3sBexwYHAvHpTD">Volunteer Application for Healthcare Professionals </Button>
            </Box>
          </Container>
        </Grid>
        
        <Grid item md={3}>
          <CssBaseline />
          <Container>
            <Box sx={{ bgcolor: '#A0C6E6', height: '13vh' }} textAlign='center'>
              <Button variant="standard" href="https://waynestate.az1.qualtrics.com/jfe/form/SV_d56tB440D9HmGvr">HUDA Urban Garden Volunteer Application</Button>
            </Box>
          </Container>
        </Grid>
        <Grid item md={2}> </Grid>





        <Grid item md={12}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '2vh', color: 'primary.contrastText' }} ></Box>
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
