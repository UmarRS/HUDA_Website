import * as React from 'react';
import {useRef, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FirstForm from './FirstForm';
import Registration from './Registration';
import Review from './Review';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';


 
function Copyright() {
  return (
   
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        HUDA Clinic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 
const steps = ['Patient Information', 'Registration Forms', 'Review'];
 
function getStepContent(step, setValidForm,) {
  switch (step) {
    case 0:
      return <FirstForm setValidForm={setValidForm} />;
    case 1:
      return <Registration  />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}
 
const theme = createTheme();
 
export default function NewPatientForms() {
 
 
  const form = useRef();
 
  const sendEmail = (e) => {
 
    emailjs
    .sendForm(
      'service_938en38',
      'template_aeb2k1q',
      form.current,
      'BzHG2J5v-9q3DEBSJ'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully");
      },
        (error) => {
          console.log(error.text);
      });
  };
 
  const [activeStep, setActiveStep] = React.useState(0);
  const [validForm, setValidForm] = useState(false);
 
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      sendEmail();
    }
    setActiveStep(activeStep + 1);
  };
 
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
 
  return (
   
    <ThemeProvider theme={theme}>
       <Navbar />
      <Header> </Header>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            HUDA Clinic Registration Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form ref={form} onSubmit={sendEmail}>
          {activeStep === steps.length ? (
            <React.Fragment>
             
              <Typography variant="h5" style={{ textAlign: 'center' }} gutterBottom>
                Thank you!
              </Typography>
              <Typography variant="subtitle1" display="inline">
                Your information has been submitted! Please
                visit HUDA clinic in person at <Typography display="inline" sx={{fontWeight: 'bold'}}>13240 Woodrow Wilson St.
                Detroit, MI 48238 </Typography>to complete your registration process!
                Have questions? <Typography display="inline" sx={{fontWeight: 'bold'}}> Call us at 313-865-8446 </Typography>
              </Typography>
              <Typography variant="subtitle1">
               
              </Typography>
 
              <div className="google-map-code">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.4651079389887!2d-83.11229808441007!3d42.396539979184354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cdba0b0202e3%3A0x22599da81c9511b0!2sHUDA%20Clinic!5e0!3m2!1sen!2sus!4v1678390445175!5m2!1sen!2sus" width="500" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
 
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, setValidForm,)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
 
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!validForm}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
          </form>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};