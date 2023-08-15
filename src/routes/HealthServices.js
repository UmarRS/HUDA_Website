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



export default function HealthServices() {
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
              Health Services
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
              "Improving the lives of those in need through comprehensive healthcare, education and resources"
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
        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Primary Care / Internal Medicine
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Vision Care
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '50vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Primary care providers are typically the first line of contact for patients; treating general health concerns,
                providing education, medications and specialty referrals as needed.</Typography>
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
              }}>
                HUDA aims to bring primary care and specialized services to uninsured and under-insured in
                the Metro Detroit area. We provide preventative primary care services in a person-focused community health clinic,
                our goal is to make Michigan healthier!</Typography>
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
              }}> The HUDA clinic provides FREE medications to our patients, a
                nd also provides laboratory services at no-cost to our patients. The HUDA clinic provides FREE medications to our patients,
                and also provides laboratory services at no-cost to our patients. </Typography>
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
              }}> Our Primary Care Services Include: </Typography>
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
              }}><FavoriteIcon /> Health Assessments</Typography>
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
              }}><FavoriteIcon /> Laboratory Services (blood work)</Typography>
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
              }}><FavoriteIcon /> Diabetes Screening & Treatments</Typography>
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
              }}><FavoriteIcon /> Cholesterol & Blood Pressure screenings</Typography>
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
              }}><FavoriteIcon /> Acute and Chronic Illness Management</Typography>

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
              }}><FavoriteIcon /> No Cost Pharmacy</Typography>

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
              }}><FavoriteIcon /> Health Education and Resources</Typography>

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
              }}><FavoriteIcon /> Nutrition Education  </Typography>
            </Box>
          </Container>
        </Grid>


        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '70vh', paddingRight: '5vh', color: 'primary.contrastText' }} >
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
                Vision screenings is an effective method to identify individuals with visual
                impairment or eye conditions that are likely to lead to vision loss.</Typography>
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
              }}>
                We perform screenings in-house and provide no-cost eye wear and referrals to low-cost local ophthalmologists as needed.</Typography>
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
              }}> Our Vision Screening Options: </Typography>
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
              }}><FavoriteIcon /> Glaucoma Screenings</Typography>
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
              }}><FavoriteIcon /> Cataract Screenings</Typography>
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
              }}><FavoriteIcon /> Macular Degeneration Screenings</Typography>
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
              }}><FavoriteIcon /> FREE eye-wear</Typography>
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
              }}><FavoriteIcon /> Referrals to vision specialists</Typography>


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
              }}> Our Ophthalmologists/Optometrists: </Typography>

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
              }}><FavoriteIcon /> M. Hanif Peracha, M.D.  </Typography>

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
              }}><FavoriteIcon /> Meiraj Siddiqui, M.D.</Typography>

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
              }}><FavoriteIcon /> Benjamin Whittredge, O.D. </Typography>

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
              }}><FavoriteIcon /> Christopher Burgess, O.D.</Typography>

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
              }}><FavoriteIcon /> Naureen Haroon, O.D. </Typography>

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
              }}><FavoriteIcon /> Suleman Hans, O.D. </Typography>

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
              }}><FavoriteIcon /> Elizabeth Borowiec, O.D.  </Typography>

            </Box>
          </Container>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '30vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>
      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#172B4D', height: '.5vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>



      <Grid container spacing={1}>
        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Dental Services
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Mental Health
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '50vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Many people wait to have necessary dental work done because they don’t have insurance,
                however small dental problems can quickly become incredibly painful if left alone.</Typography>
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
              }}>
                Come in to HUDA for cleanings, fillings, extractions and exams
                to keep your teeth healthy and receive a referral to a specialist if needed.</Typography>
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
              }}> Our Dental Services Include: </Typography>
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
              }}><FavoriteIcon /> Dental screenings, and X-Rays</Typography>
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
              }}><FavoriteIcon /> Laboratory Services (blood work)</Typography>
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
              }}><FavoriteIcon /> Deep Cleanings</Typography>
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
              }}><FavoriteIcon /> Composite Fillings</Typography>
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
              }}><FavoriteIcon /> Tooth Extraction</Typography>

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
              }}> Our Dentists: </Typography>

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
              }}><FavoriteIcon /> Shakeel Niazi, D.D.S.</Typography>

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
              }}><FavoriteIcon /> Ahmed Allam, D.D.S.</Typography>

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
              }}><FavoriteIcon /> Asmaa Abdel-Salam, D.D.S. </Typography>

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
              }}><FavoriteIcon /> Dina Musheinesh, D.M.D.</Typography>

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
              }}><FavoriteIcon /> Sumera Khalid, D.D.S. </Typography>

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
              }}><FavoriteIcon /> Asmaa Abdel-Salam, D.D.S. </Typography>

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
              }}><FavoriteIcon /> Umair Niazi, D.M.D. </Typography>

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
              }}><FavoriteIcon /> Rachel Mundus, R.D. </Typography>

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
              }}><FavoriteIcon /> Fatin Amireh, R.D.H. </Typography>


            </Box>
          </Container>
        </Grid>


        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '70vh', paddingRight: '5vh', color: 'primary.contrastText' }} >
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
                We have psychiatrists on staff along with our licensed social workers to provide therapy and
                treatment for a wide range of mental health concerns. </Typography>
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
              }}>
                We offer free counseling and treatment to veterans, homeless, uninsured, and the working underinsured.  </Typography>

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
              }}>
                Since the onset of the Covid-19 pandemic our psychiatry services have transitioned to telemedicine.
                We currently have 2 Psychiatrists, a Mental Health Nurse Practitioner and a Therapist who all volunteer
                with HUDA Clinic allowing us to provide treatment for a wide range of mental health concerns.</Typography>
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
              }}> Our Mental Health Services Include:</Typography>
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
              }}><FavoriteIcon />  Prescribing psychiatrist on site</Typography>
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
              }}><FavoriteIcon /> Adult Counseling </Typography>
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
              }}><FavoriteIcon /> Anxiety/Depression</Typography>
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
              }}><FavoriteIcon /> Bipolar Disorders</Typography>
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
              }}><FavoriteIcon /> Eating Disorders</Typography>
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
              }}><FavoriteIcon /> Schizoaffective Disorders, and more</Typography>


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
              }}> Our Psychiatrists: </Typography>

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
              }}><FavoriteIcon /> Saba Maroof, M.D.</Typography>

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
              }}><FavoriteIcon /> Mazhar Hussain, M.D.</Typography>

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
              }}> Supporting Providers: </Typography>

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
              }}><FavoriteIcon /> oann Harrison, MHNP, FNP-BC</Typography>

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
              }}><FavoriteIcon /> Sarah Kappler, TLLP</Typography>

            </Box>
          </Container>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '45vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>
      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#172B4D', height: '.5vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>



      <Grid container spacing={1}>
        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Specialty Services
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '5vh', color: 'primary.contrastText' }} >
              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                New Patient Information
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '50vh', paddingLeft: '5vh', color: 'primary.contrastText' }} >
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
                Within the field of medicine, there are many sub-specialties when coordinating care to patients.
                At HUDA, we provide a range of specialty care and consultations to our patients, with the aim
                of expanding access to healthcare services. .</Typography>
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
              }}>
                We have created an integrated health model at HUDA through opening multiple
                specialty services creating a place where most patient needs can be met. All specialty
                services require a referral from a HUDA primary care provider.</Typography>
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
              }}> Our Specialty Services/Consultations Include:</Typography>
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
              }}><FavoriteIcon /> Physical Therapy</Typography>
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
              }}><FavoriteIcon /> Endocrinology</Typography>
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
              }}><FavoriteIcon /> Cardiology</Typography>
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
              }}><FavoriteIcon /> Podiatry</Typography>
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
              }}><FavoriteIcon /> Nephrology </Typography>
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
              }}><FavoriteIcon /> Gastroenterology </Typography>
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
              }}><FavoriteIcon /> Ear, Nose, Throat (ENT)</Typography>
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
              }}><FavoriteIcon /> Hepatology</Typography>
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
              }}><FavoriteIcon /> Hematology</Typography>
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
              }}><FavoriteIcon /> Pulmonology</Typography>

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
              }}> Our Specialty Providers: </Typography>

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
              }}><FavoriteIcon /> Jawwad Rashid, P.T.A</Typography>

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
              }}><FavoriteIcon /> Asadullah Mohammed, M.D.</Typography>

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
              }}><FavoriteIcon /> Naseer Ahmad, M.D. </Typography>

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
              }}><FavoriteIcon /> Maha Alhusseini, M.D.</Typography>

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
              }}><FavoriteIcon /> Samer Salka, M.D.</Typography>

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
              }}><FavoriteIcon /> Maha Alhusseini, M.D.</Typography>

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
              }}><FavoriteIcon /> Syed Ghani, D.P.M.</Typography>

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
              }}><FavoriteIcon /> Naveed Aslam, M.D. </Typography>

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
              }}><FavoriteIcon /> Jukaku Tayeb, M.D. </Typography>
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
              }}><FavoriteIcon /> Firdous Siddiqui, M.D.</Typography>
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
              }}><FavoriteIcon /> Yousef Siddiqui, M.D.</Typography>
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
              }}><FavoriteIcon /> Uzma Rehman, D.O.</Typography>
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
              }}><FavoriteIcon /> Zaahir Turfe, M.D.</Typography>
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
              }}><FavoriteIcon /> Ranya Selim, M.D. </Typography>
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
              }}><FavoriteIcon /> Syed Akbar, M.D.</Typography>


            </Box>
          </Container>
        </Grid>


        <Grid item md={6}>
          <Container>
            <Box sx={{ bgcolor: '#fff', height: '70vh', paddingRight: '5vh', color: 'primary.contrastText' }} >
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
                New patients are always welcome at the HUDA Clinic! You can schedule your initial
                appointment by visiting our clinic during our regular hours, or you may also come for
                a walk-in appointment before 10:30 AM, or until we reach our capacity on the days we offer
                walk-ins (see below). </Typography>
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
              }}>
                New patients must bring with them a valid photo ID, and must be at least 18 years old.  </Typography>

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
                Hours: </Typography>
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
                Tuesday: 8:30 AM – 2:00 PM (limited walk-in availability) </Typography>

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
                Wednesday: 9:00 AM – 12:00 PM (Telemedicine only)</Typography>

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
                Thursday: 8:30 AM – 2:00 PM (limited walk-in availability)</Typography>

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
                Saturday: 8:30 AM – 2:00 PM (limited walk-in availability)</Typography>

              <Grid item md={6}>
                <Container>
                  <Box sx={{ bgcolor: '#fff', height: '3vh', color: 'primary.contrastText' }} ></Box>
                </Container>
              </Grid>



              <Typography sx={{
                top: '104px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: '25px',
                fontSize: '23px',
                letterSpacing: '0.18px',
                color: '#172B4D',
                margin: '16px 0px',
              }}>
                Our Volunteer Healthcare Providers:
              </Typography>

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
              }}><FavoriteIcon /> Sana Ahmed, M.D.</Typography>
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
              }}><FavoriteIcon /> Arshia Akram, M.D.</Typography>
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
              }}><FavoriteIcon /> Svetlana Aminova, M.D.</Typography>
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
              }}><FavoriteIcon /> Beena Nagappala, M.D.</Typography>
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
              }}><FavoriteIcon /> Michael Collins, M.D.</Typography>
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
              }}><FavoriteIcon /> Christopher Hermann, ANPC</Typography>
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
              }}><FavoriteIcon /> Svetlana Aminova, M.D.</Typography>
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
              }}><FavoriteIcon /> Elena Jdanova, M.D.</Typography>
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
              }}><FavoriteIcon /> Svetlana Aminova, M.D.</Typography>
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
              }}><FavoriteIcon /> Adeel Khan, D.O.</Typography>
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
              }}><FavoriteIcon /> Rania Krayem, PA-C</Typography>
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
              }}><FavoriteIcon /> Bilal Malek, M.D.</Typography>
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
              }}><FavoriteIcon /> Asadulla Mohammed, M.D.</Typography>
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
              }}><FavoriteIcon /> Wasfeh Musheinesh, M.D.</Typography>
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
              }}><FavoriteIcon /> Khurrum Pirzada, D.O.</Typography>
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
              }}><FavoriteIcon /> Danial Rashid, M.D.</Typography>
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
              }}><FavoriteIcon /> Wasim Rathur, M.D.</Typography>
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
              }}><FavoriteIcon /> Uzma Rehman, D.O. </Typography>
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
              }}><FavoriteIcon /> Donald Rosin, M.D.</Typography>

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
              }}><FavoriteIcon /> Amy Shepard, D.O. </Typography>

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
              }}><FavoriteIcon /> Emily Soni, D.O. </Typography>








            </Box>
          </Container>
        </Grid>
      </Grid>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '120vh', color: 'primary.contrastText' }} ></Box>
        </Container>
      </Grid>




    </React.Fragment>


  )
}
