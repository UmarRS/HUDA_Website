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


export default function Announcements() {
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
              Announcements
            </Typography>

            <Typography variant="h4" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom> </Typography>
          </Box>
        </Container>
      </Grid>


      <Box sx={{ bgcolor: '#fff', height: '3vh', padding: '2vh', color: 'primary.contrastText' }} ></Box>

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
            3/15/2023: </Typography>Leaders Advancing and Helping Communities (LAHC) Flyer</Typography>
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
              3/04/2023:</Typography>THE HUDA CLINIC WILL BE CLOSED SATURDAY, MARCH 4TH, 2023, PER CLINIC POLICY.</Typography>
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
              2/22/2023:</Typography>THE HUDA CLINIC WILL BE CLOSED THURSDAY, FEBRUARY 23RD, 2023, PER CLINIC POLICY.</Typography>
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
              2/20/2023: </Typography>Michigan provides Medicaid enrollees with information about options as eligibility requirements restart following recent federal legislation</Typography>
        </Container>
      </Grid>



      <CssBaseline />
      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard" href="https://content.govdelivery.com/attachments/MIDHHS/2023/02/15/file_attachments/2410530/Medicaid%20Press%20Release.pdf">Link to full article: Medicaid Press Release</Button>
        </Box>
      </Container>

      <Grid item md={12}>
        <Container>
          <Box sx={{ bgcolor: '#fff', height: '1vh', width: '65vh', color: 'primary.contrastText' }} ></Box>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '24px', fontSize: '16.5px', letterSpacing: '0.18px', }}>
              Eligibility redetermination packets to start being mailed to beneficiaries depending on renewal date</Typography></Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            LANSING, Mich. – Medicaid beneficiaries will have to renew their coverage this year,
            starting in June, as Michigan resumes Medicaid eligibility redeterminations to comply
            with federal legislation. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            During the federal COVID-19 Public Health Emergency, Congress enacted the Families First
            Coronavirus Response Act that required state Medicaid agencies continue health care coverage
            for all medical assistance programs, even if someone's eligibility changed. Michigan’s Medicaid
            caseload grew by more than 700,000 people during the public health emergency. This requirement was
            ended by thefederal Consolidated Appropriations Act of 2023signed Dec. 29, 2022. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            Michiganders who no longer qualify for Medicaid will receive additional information
            about other affordable health coverage options available, including on HealthCare.gov.
            Affected Michiganders will be able to shop for and enroll in comprehensive health insurance
            as they transition away from Medicaid, and many Michiganders can purchase a plan for less than $10 per month. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            Renewals for traditional Medicaid and the Healthy Michigan Plan will take
            place monthly starting in June 2023 and run through May 2024. Monthly renewal
            notices will be sent three months prior to a beneficiaries’ renewal date starting
            with June renewal dates. Beneficiaries can check their renewal month at www.michigan.gov/MIBridges. </Typography>
        </Container>
      </Grid>

      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard" href="https://newmibridges.michigan.gov/s/isd-landing-page?language=en_US">www.michigan.gov/MIBridges</Button>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            “MDHHS is strongly committed to ensuring Michiganders who are eligible for Medicaid coverage remain enrolled,”
            said Elizabeth Hertel, Michigan Department of Health and Human Services director. “More than three million
            Michiganders, including one million Healthy Michigan enrollees, have benefitted from keeping their Medicaid
            coverage without redeterminations on eligibility during the COVID-19 pandemic. MDHHS is preparing to assist
            residents who will be affected by changes in their coverage.”  </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            Here is what Michigan Medicaid beneficiaries need to do to prepare:  </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            1. Make sure your address, phone number and email address are up to date atwww.michigan.gov/MIBridges.
            You can also call your local MDHHS office. If you do not have an online account for MI Bridges to access
            your Medicaid case or report changes, visitwww.michigan.gov/MIBridgesto sign up for an account.
            You can also locate organizations that can help you bysearching for community partners.</Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            2. Report any changes to your household or income. You can report changes atwww.michigan.gov/MIBridges or by calling your local MDHHS office. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            3. If you get a renewal packet, be sure to fill it out, sign the forms and return it by
            the due date with any proof needed. NOTE:If you do not complete and return the renewal,
            you may lose Medicaid coverage. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            “The Michigan Department of Insurance and Financial Services (DIFS) is committed to working
            with MDHHS and our partners nationwide to help impacted Michiganders get the affordable,
            comprehensive health insurance they need,” said DIFS Director Anita Fox. “DIFS stands ready
            to answer questions about purchasing a health insurance plan. Call DIFS at 877-999-6442,
            Monday through Friday from 8 a.m. to 5 p.m. or visit Michigan.gov/HealthInsurance to learn more.”</Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            To ensure beneficiaries are aware of upcoming federal redetermination requirements and
            help them keep their coverage if eligible, MDHHS is launching a multi-media advertising campaign.
            This will include radio, audio streaming, outdoor, mobile and social media ads, including minority
            media outlets and stakeholder communications. </Typography>
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
            fontSize: '14px',
            letterSpacing: '0.18px',
            color: '#172B4D',
            margin: '16px 0px',
          }}>
            More information about the how benefits connected to the COVID-19 Public Health Emergency are changing can be found at www.Michigan.gov/2023BenefitChanges. </Typography>
        </Container>
      </Grid>


      <Container>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }} textAlign='center'>
          <Button variant="standard"
            href="https://lnks.gd/l/eyJhbGciOiJIUzI1NiJ9.eyJidWxsZXRpbl9saW5rX2lkIjoxMDgsInVyaSI6ImJwMjpjbGljayIsImJ1bGxldGluX2lkIjoiMjAyMzAyMTUuNzE2MjQzMzEiLCJ1cmwiOiJodHRwOi8vd3d3Lk1pY2hpZ2FuLmdvdi8yMDIzQmVuZWZpdENoYW5nZXM_dXRtX2NhbXBhaWduPSZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9zb3VyY2U9Z292ZGVsaXZlcnkifQ.v-UAReMNPgh8DXk3RYGWoShxCQ7N1foBAwQk9fjV4Gg/s/1416403025/br/154562476985-l"
          >www.Michigan.gov/2023BenefitChanges</Button>
        </Box>
      </Container>









      <Container>
        <Box sx={{ bgcolor: '#fff', height: '20vh' }} textAlign='center'></Box>
      </Container>

    </React.Fragment>


  )
}
