import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Password } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputAdornment from '@mui/material/InputAdornment';


export default function NewPatient({ setValidForm }) {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [dob, setDOB] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [sex, setSex] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [reason, setReason] = React.useState('');
  const [address1, setAddress1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [ssn, setSsn] = useState('');
  const [home, setHome] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [lang, setLang] = useState('');
  const [income, setIncome] = useState('');
  const [size, setSize] = useState('');
  const [occupation, setOccupation] = useState('');
  const [fullname, setFullName] = useState('');
  const [cell2, setCell2] = useState('');
  const [relation, setRelation] = useState('');
  const [print, setPrint] = useState('');
  const [sign, setSign] = useState('');
  const [error, setError] = useState(false);
  const [amount, setAmount] = React.useState(100);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'reason') {
      setReason(value);
      setError(false);
    } else if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'address1') {
      setAddress1(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'state') {
      setState(value);
    } else if (name === 'zip') {
      setZip(value);
    } else if (name === 'ssn') {
      setSsn(value);
    } else if (name === 'home') {
      setHome(value);
    } else if (name === 'cell') {
      setCell(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'lang') {
      setLang(value);
    } else if (name === 'income') {
      setIncome(value);
    } else if (name === 'size') {
      setSize(value);
    } else if (name === 'occupation') {
      setOccupation(value);
    } else if (name === 'fullname') {
      setFullName(value);
    } else if (name === 'cell2') {
      setCell2(value);
    } else if (name === 'relation') {
      setRelation(value);
    } else if (name === 'print') {
      setPrint(value);
    } else if (name === 'sign') {
      setSign(value);
    }
  };
  setValidForm(
    reason.trim() !== '' &&
    firstName.trim() !== '' &&
    lastName.trim() !== '' &&
    address1.trim() !== '' &&
    city.trim() !== '' &&
    state.trim() !== '' &&
    zip.trim() !== '' &&
    ssn.trim() !== '' &&
    home.trim() !== '' &&
    cell.trim() !== '' &&
    email.trim() !== '' &&
    lang.trim() !== '' &&
    income.trim() !== '' &&
    size.trim() !== '' &&
    occupation.trim() !== '' &&
    fullname.trim() !== '' &&
    cell2.trim() !== '' &&
    relation.trim() !== '' &&
    sign.trim() !== ''
  );

return (
  <React.Fragment>
    

    <Grid container spacing={3}>
    <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
              required
              label="Today's Date"
              inputFormat="MM/DD/YYYY"
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
     </Grid>

     <Grid item xs={8}>
        <TextField
          required
          id="reason"
          name="reason"
          label="Reason for Visit"
          fullWidth
          variant="standard"
          value={reason}
          onChange={handleChange}
          error={error}
          helperText={error ? 'Please enter a reason for your visit.' : ''}
        />
      </Grid>


      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="standard"
          value={lastName}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          value={firstName}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <FormControl variant="standard" fullWidth>
          <InputLabel id="demo-simple-select-label">Sex</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sex"
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
            <MenuItem value={30}>Prefer not to say</MenuItem>
          </Select>
        </FormControl>
     </Grid>


      <Grid item xs={12} sm={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
              required
              label="Date of Birth"
              inputFormat="MM/DD/YYYY"
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
     </Grid>

      <Grid item xs={8}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address line 1"
          fullWidth
          autoComplete="address-line1"
          variant="standard"
          value={address1}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="address-level2"
          variant="standard"
          value={city}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="state"
          name="state"
          label="State"
          fullWidth
          variant="standard"
          value={state}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="zip"
          name="zip"
          label="Zip / Postal code"
          fullWidth
          autoComplete="postal-code"
          variant="standard"
          value={zip}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="ssn"
          name="ssn"
          label="SSN"
          type="password"
          fullWidth
          variant="standard"
          value={ssn}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="home"
          name="home"
          label="Home"
          fullWidth
          variant="standard"
          value={home} 
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          required
          id="cell"
          name="cell"
          label="Cell"
          fullWidth
          variant="standard"
          value={cell}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={4.7}>
          <Typography variant='body2'>Preferred contact method:</Typography>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="Home"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="Cell"
            />
      </Grid>


      <Grid item xs={3.6} sm={3.65}>
          <Typography variant='body2'>Consent to call:</Typography>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="Yes"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="No"
            />
      </Grid>


      <Grid item xs={3.6} sm={3.65}>
          <Typography variant='body2'>Consent to text:</Typography>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="Yes"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="No"
            />
      </Grid>
       

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              autoComplete='email-address'
              variant="standard"
              value={email}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Race</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sex}
                  label="Race"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Black/Africal American</MenuItem>
                  <MenuItem value={20}>White/Caucasion</MenuItem>
                  <MenuItem value={30}>Asian</MenuItem>
                  <MenuItem value={40}>Middle Eastern/North African</MenuItem>
                  <MenuItem value={50}>Hispanic/Latino</MenuItem>
                  <MenuItem value={60}>Native American</MenuItem>
                  <MenuItem value={70}>Native Hawaiian or Other Pacific Islander</MenuItem>
                </Select>
              </FormControl>
          </Grid>


          <Grid item xs={12} sm={6}>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sex}
                  label="Ethnicity"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Hispanic or Latino</MenuItem>
                  <MenuItem value={20}>Not Hispanic or Latino</MenuItem>
                </Select>
              </FormControl>
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              required
              id="lang"
              name="lang"
              label="Preferred Language"
              fullWidth
              variant="standard"
              value={lang}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={5}>
          <Typography variant='body2'>Translator Needed</Typography>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="Yes"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
              label="No"
            />
          </Grid>


    <Grid item xs={12} sm={12}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='h6'>Social Information *</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <React.Fragment>
              <Typography variant="body1" gutterBottom>
              The following information does NOT affect your right to care at HUDA, but it is needed to continue providing our free services
              </Typography>

              <Typography variant="body1" gutterBottom>
              </Typography>

              <Grid container spacing={3}>
               
              <Grid item xs={12} sm={12}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sex}
                      label="maritalstatus"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Single</MenuItem>
                      <MenuItem value={20}>Married</MenuItem>
                      <MenuItem value={30}>Partner</MenuItem>
                      <MenuItem value={40}>Separated</MenuItem>
                      <MenuItem value={50}>Divorced</MenuItem>
                      <MenuItem value={60}>Widowed</MenuItem>

                    </Select>
                  </FormControl>
              </Grid>


              <Grid item xs={4}>
                <TextField
                  required
                  id="income"
                  name="income"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon/>
                        </InputAdornment>
                      ),
                    }}
                  label="Household Income"
                  fullWidth
                  variant="standard"
                  value={income}
                  onChange={handleChange}
                />
              </Grid>

 
              <Grid item xs={12} sm={4}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-label"> Every </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sex}
                      label="maritalstatus"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Week</MenuItem>
                      <MenuItem value={20}>2 Weeks</MenuItem>
                      <MenuItem value={30}>Month</MenuItem>
                      <MenuItem value={40}>Year</MenuItem>

                    </Select>
                  </FormControl>
              </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="size"
                    name="size"
                    label="Family Size"
                    fullWidth
                    variant="standard"
                    value={size}
                    onChange={handleChange}
                  />
                </Grid>

                
              <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-label"> Employment Status </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sex}
                      label="employementstatus"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Unemployed</MenuItem>
                      <MenuItem value={20}>Employed - Full time </MenuItem>
                      <MenuItem value={30}>Employed - Part time</MenuItem>
                      <MenuItem value={40}>Self-employed</MenuItem>
                      <MenuItem value={50}>Student</MenuItem>
                      <MenuItem value={60}>Retired</MenuItem>
                      <MenuItem value={70}>Seeking Employment</MenuItem>

                    </Select>
                  </FormControl>
              </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="occupation"
                    name="occupation"
                    label="Occupation"
                    fullWidth
                    variant="standard"
                    value={occupation}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={3.6} sm={5}>
                  <Typography variant='body2'>Are you a veteran?</Typography>
                    <FormControlLabel
                      control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                      label="No"
                    />
                </Grid>
              </Grid>
          </React.Fragment>
        </AccordionDetails>
     </Accordion>
     </Grid>


     <Grid item xs={12} sm={12}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant='h6'>Emergency Contact *</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <React.Fragment>

              <Typography variant="body1" gutterBottom>
              </Typography>

              <Grid container spacing={3}>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fullname"
                  name="fullname"
                  label="Full Name"
                  fullWidth
                  variant="standard"
                  value={fullname}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell2"
                  name="cell2"
                  label="Phone"
                  fullWidth
                  variant="standard"
                  value={cell2}
                  onChange={handleChange}
                />
              </Grid> 

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="relation"
                  name="relation"
                    label = "Relationship to patient"
                    fullWidth
                    variant="standard"
                    value={relation}
                    onChange={handleChange}
                  />
                </Grid>
 
                </Grid>
            </React.Fragment>
          </AccordionDetails>
       </Accordion>
       </Grid>
 
              <Grid item xs={3.6} sm={1}>
                  <FormControlLabel
                      control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                      label=""
                    />
              </Grid>
 
              <Grid item xs={3.6} sm={11}>
              <Typography variant='body2'>I voluntarily accept treatment/counseling as recommended and explained by the HUDA staff.
                I understand that I am free to withdraw my consent and discontinue treatment at any time. In addition, I have been informed
                of my rights to refuse to participate in research activities. I understand that I have rights as a recipient of free services
                provided by the HUDA Clinic. I have been advised on the HUDA Clinic’s NO CALL NO SHOW Policy regarding primary care and specialty
                services and agree to follow it. Further, I have been advised of the Federal Confidentiality Regulation and been given a copy of
                the Confidentiality Notice to review.</Typography>
                   
              </Grid>
       
 
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="print"
                    name="print"
                    label="Patient Name (Printed)"
                    fullWidth
                    variant="filled"
                    value={print}
                    onChange={handleChange}
                  />
                </Grid>
 
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    id="sign"
                    name="sign"
                    label="Patient/Guardian Signature"
                    fullWidth
                    variant="filled"
                    value={sign}
                    onChange={handleChange}
                  />
                </Grid>
 
                <Grid item xs={12} sm={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                          required
                          label="Date"
                          inputFormat="MM/DD/YYYY"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
      </Grid>
    </React.Fragment>
  );
 }
