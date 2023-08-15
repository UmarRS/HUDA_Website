import React from "react";
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




export default function Home() {


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
          <Box sx={{ bgcolor: '#042c4d', height: '25vh', padding: '2vh', color: 'primary.contrastText' }} >

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>

            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              Have Health Concerns?
            </Typography>

            <Typography variant="h6" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }}>
              We're helping the Uninsured and Underinsured of Metro Detroit.
            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>


            <Grid container spacing={0} direction="row" justify="flex-start" alignItems="center">


              <Grid item xs={12} md={2.4} alignItems="center">
                <Container alignItems="center">
                  <Box sx={{ bgcolor: '#042c4d', height: '5vh', width: '100vh' }} textAlign='center'>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="120"
                          image={require('../assets/img/primary.jpg')}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            Primary Care
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="/healthservices" variant="text" sx={{ color: "primary" }} size="small" color="primary">
                          Read More <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Container>
              </Grid>

              <Grid item xs={12} md={2.4} alignItems="center">
                <Container alignItems="center">
                  <Box sx={{ bgcolor: '#042c4d', height: '5vh', width: '100vh' }} textAlign='center'>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="120"
                          image={require('../assets/img/mental.jpg')}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            Mental Health
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="/healthservices" variant="text" sx={{ color: "primary" }} size="small" color="primary">
                          Read More <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Container>
              </Grid>



              <Grid item xs={12} md={2.4} alignItems="center">
                <Container alignItems="center">
                  <Box sx={{ height: '5vh', width: '100vh' }} textAlign='center'>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="120"
                          image={require('../assets/img/dental.jpg')}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            Dental Care
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="/healthservices" variant="text" sx={{ color: "primary" }} size="small" color="primary">
                          Read More <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Container>
              </Grid>



              <Grid item xs={12} md={2.4} alignItems="center">
                <Container alignItems="center">
                  <Box sx={{ height: '5vh', width: '100vh' }} textAlign='center'>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="120"
                          image={require('../assets/img/vision.JPG')}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            Vision Care
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="/healthservices" variant="text" sx={{ color: "primary" }} size="small" color="primary">
                          Read More <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Container>
              </Grid>


              <Grid item xs={12} md={2.4} alignItems="center">
                <Container alignItems="center">
                  <Box sx={{ height: '5vh', width: '100vh' }} textAlign='center'>
                    <Card sx={{ maxWidth: 200 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="120"
                          image={require('../assets/img/specialty.jpg')}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div" align="center">
                            Specialty Care
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="/healthservices" variant="text" sx={{ color: "primary" }} size="small" color="primary">
                          Read More <ArrowForwardIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>

      <Box sx={{ bgcolor: '#fff', height: '35vh', padding: '2vh', color: 'primary.contrastText' }} ></Box>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '30px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            HUDA, A Free Clinic in Metro Detroit
          </Typography>
        </Container>
      </Grid>


      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
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
            fontSize: '16px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '24px', fontSize: '16.5px', letterSpacing: '0.18px', }}>
              We provide FREE Primary Care, Dental Care, Mental Health Services, Vision Care, and
              Specialty Care for those who are uninsured and underinsured.</Typography>HUDA Clinic is a health
            facility that offers free healthcare services to the public, which means no copays or fees.
            We provide preventative screenings, health assessments, management for chronic care
            illnesses, and referrals to specialists as needed. We have expanded from our humble
            beginnings in the Muslim Community Center in 2004 through the help of dedicated volunteers,
            partnerships with local organizations and hospitals, and generous donations.
          </Typography>
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
            fontSize: '16px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '24px', fontSize: '16.5px', letterSpacing: '0.18px', }}>
              The HUDA Clinic achieves its goals through generous donations, physician volunteerism, and passionate student leadership. </Typography>
            We are also well-connected in the community through partnerships with homeless shelters, non-profit organizations, religious groups, and
            the universities training Michigan's future health professionals. Nestled in a community in Northwest Detroit is a small health facility
            called the Health Unit on Davison Avenue (HUDA Clinic), named after our original location. We have expanded to our new location at -
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', textDecoration: 'underline', lineHeight: '24px', fontSize: '16px', letterSpacing: '0.18px', }} display="inline">
              13240 Woodrow Wilson St. Detroit, MI 48238. </Typography>
          </Typography>
        </Container>
      </Grid>


      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard" href="/ourstory">Our Story</Button>
        </Box>
      </Container>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>


      <Grid item md={12}>
        <Container>
          <Typography sx={{
            top: '104px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            lineHeight: '24px',
            fontSize: '25px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            Community Outreach & Health Education
          </Typography>
        </Container>
      </Grid>


      <Grid item xs={3} md={12} alignItems="center">

        <Grid item md={8}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '13vh', padding: '0vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '24px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                At the core of our mission is wellness; we seek to provide medical services
                not just to treat your symptoms but to address core problems with our patients
                to create a healthier community. We focus on educating our clients on important
                lifestyle interventions, vital health and nutritional information, while working
                with the community through health fairs and local events which allows us to bring
                this information to more people.
              </Typography>
            </Box>

          </Container>

          <Grid item md={12}>
            <Container>
              <Box sx={{ bgcolor: '#042c4d', height: '0.2vh', color: 'primary.contrastText' }} ></Box>
            </Container>
          </Grid>


          <Grid item md={12}>
            <Container>
              <Box sx={{ bgcolor: '#fff', height: '30vhvh', color: 'primary.contrastText' }} ></Box>
            </Container>
          </Grid>
        </Grid>
      </Grid>


      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>

      <Grid container spacing={0}>
        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '30vh', width: '80vh', paddingLeft: '6vh', color: 'primary.contrastText' }} >
              <div class="ratio ratio-4x3">
                <iframe src="https://www.youtube.com/embed/5jJ936s0g9I" title="YouTube video" allowfullscreen></iframe>
              </div>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '13vh', paddingRight: '5vh', color: 'primary.contrastText', alignItems: 'left' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '24px',
                fontSize: '16px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '17px 0px',
              }}>
                At the core of our mission is wellness; we seek to provide medical services
                not just to treat your symptoms but to address core problems with our patients
                to create a healthier community. We focus on educating our clients on important
                lifestyle interventions, vital health and nutritional information, while working
                with the community through health fairs and local events which allows us to bring
                this information to more people.
              </Typography>
            </Box>

          </Container>
        </Grid>

        <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '29vh', color: 'primary.contrastText' }} ></Box>
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
              fontSize: '30px',
              textAlign: 'center',
              letterSpacing: '0.18px',
              color: '#172B4D',
              margin: '16px 0px',
            }}>
              Clinic Calendar
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



      

      <Grid container spacing={0} direction="row" justify="flex-start" alignItems="center">
      <Grid item md={2}>
        <Container>
          
        </Container>
      </Grid>

        <Grid item md={6}>
          <Container component="main" minWidth="sm" maxWidth="sm" sx={{ mb: 4 }}>

            <div className="google-map-code">
              <iframe src="https://calendar.google.com/calendar/embed?src=91ba18a210c3fb4313078c6e966997c4c2a32883474c37e561c282a944a90bb4%40group.calendar.google.com&ctz=America%2FNew_York" styles="border: 0" width="650" height="350" frameborder="0" scrolling="no"></iframe>
            </div>

          </Container> </Grid>

      </Grid>

      <Grid item md={3}>
        <Container>
          
        </Container>
      </Grid>

      </Grid>


    






      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '10vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>



























    </React.Fragment>
  )
}