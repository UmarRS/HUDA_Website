import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';


export default function Registration() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [dob, setDOB] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [sex, setSex] = React.useState('');
  const [amount, setAmount] = React.useState(100);

  const handleChange = (newValue, event, dob) => {
    setValue(newValue);
    setDOB(dob);
    setSex(event.target.value);
  };


  return (
    <div>

      {/* Form 1 - Patient Contract */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="p1" sx={{ fontWeight: 'bold' }} >Patient Contract</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <React.Fragment>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              AUTHORIZATION FOR MEDICAL TREATMENT AT CLINIC
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              ---------------------------------------------------------------------------------------
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I consent to receiving services at the Health Unit on Davison Avenue, henceforth
                  referred to as HUDA Clinic. Services may include assessment, routine diagnostic procedures,
                  medications, lab tests, and appropriate medical treatment as the attending Physician/Nurse
                  practitioner / Physician’s Assistant considers necessary for my care. I understand that the
                  practice of medicine is not an exact science and I acknowledge that I have received no guarantees
                  regarding the result of examination or treatment at this clinic.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand that the services I receive at HUDA Clinic or because of a referral from HUDA Clinic are
                  being provided by health care practitioners and lay volunteers who are not receiving compensation and
                  compensation will not be requested from any source. I understand, as provided by Federal and Michigan
                  State Law (Michigan Public Health Code. MCL 333.16277), that these volunteers are not liable for civil
                  damages because of acts or omissions which may occur while providing services to me
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand that any fees incurred for referrals or any orders to an outside facility, from HUDA Clinic are my responsibility.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I agree to be tested for blood borne pathogens in case of inadvertent exposure to blood and/or body fluids as recommended by the Centers for Disease Control.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand that any verbally abusive or threatening behavior to the clinic staff or other patients is grounds for the termination of clinic services.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Falsifying my income or medical insurance information, whether private or public provided, is grounds for termination of clinic services.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand HUDA clinic’s No Call No Show policy which states for Primary Care:
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}></Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  a. If I do not keep a scheduled appointment and do not call to cancel or reschedule with reasonable notice, I will only be eligible to be seen as a Walk-In for the following visit.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}></Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  b. If I have 3 or more No Call No Shows in a 12-month period, I could face termination of clinic services. I understand HUDA Clinic’s No Call No Show policy for Specialty Care (All appointments that are NOT primary care including., but not limited to Dental, Endocrinology, Psychiatry, ENT Optometry… etc.).
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}></Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  c. If I do not keep a scheduled appointment and do not call to cancel or reschedule with a reasonable time, I will need to find alternatives for my specialty care needs.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}></Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  d. If I do not keep 2 scheduled specialty care appointments within a 6-month period, you won’t be permitted to schedule further specialty services and could face termination of clinic services.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  My signature below constitutes my acknowledgement that I understand this request for consent and that I agree to its contents.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Printed Name"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Signature"
                  fullWidth
                  variant="filled"
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
        </AccordionDetails>
      </Accordion>


      {/* Form 2 - Authorization for Release of Information */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="p1" sx={{ fontWeight: 'bold' }} >Release of Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <React.Fragment>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              HUDA Clinic Authorization for Release of Information
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              ---------------------------------------------------------------------------------------
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Occasionally it is necessary for the HUDA Clinic to consult with other providers, such asspecialists
                  or other facilities, such as hospitals or labs to provide you, our patient, with what ourproviders
                  believe to be the most appropriate course of action for your treatment. By signing thisform, you give us,
                  HUDA Clinic, permission to share your pertinent medical information withother providers/facilities to best
                  complete your treatment or request medical records fromprevious providers on your behalf.We take protecting
                  your identity very seriously and donot share any unnecessary information with any of our partners.
                </Typography>
              </Grid>

              <Grid item xs={3.6} sm={1}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                  label=""
                />
              </Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I hereby authorize HUDA Clinic and its affiliates, its employees and agents, to use and disclose protected health
                  information (e.g.,information relating to the diagnosis, treatment, and health care services provided or to
                  beprovided to me and which identifies my name, address, social security number, date of birth) for the purpose of
                  helping to coordinate my medical care.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand that any personal health information or other information released to the person ororganization
                  identified above may be subject to re-disclosure by such person/organization andmay be no longer protected by
                  applicable federal and state privacy laws.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I understand that I have a right to revoke this authorization by providing written notice to HUDAClinic at any time.
                  However, this authorization may not be revoked if its employees or agents have taken action on this authorization prior
                  to receiving my written notice. I also understand Ihave the right to have a copy of this authorization.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I further understand that this authorization is voluntary and that I may refuse to sign this authorization. I also understand
                  that should I refuse to sign this form I greatly limit the services that HUDA Clinic will be able to perform for me. I understand
                  that should I refuse to sign this,the HUDA Clinic will not be able to prescribe me medication to any pharmacy, nor be able to
                  provide me with any lab work, physician referrals or medical record requests.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Patient Name"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Patient Signature"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    required
                    label="Today's Date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>


            </Grid>
          </React.Fragment>
        </AccordionDetails>
      </Accordion>


      {/* Form 3 - Designation of Personal Representative */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="p1" sx={{ fontWeight: 'bold' }} >Designation of Personal Representative</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <React.Fragment>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              Designation of Personal Representative
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              ---------------------------------------------------------------------------------------
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Completing this form allows the person designated to receive protected health information (PHI)
                  such as test results.It also permits the personal representative to request and recieve the
                  patient's medical records.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={11}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  A personal representative is NOT the same as a health care agent who is allowed to make medical
                  decisions on the patient's behalf.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Patient Name"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    required
                    label="Date of Birth"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Patient Address"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="City"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="State"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Zip"
                  fullWidth
                  variant="filled"
                />
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  I designate the following person(s) as lsited below as my personal representative(s) and undesrstand and acknowledge
                  that this designation gives the Personal Representative(s) the same power over my protected health information as I have,
                  including the right to inspect my records, authorize disclosures, and request restrictions and amendments. I hereby waive any
                  restrictions on my personal representative(s)' access to my protected health information. I understand that I am not required
                  to list anyone. I also undesrstand this designation shall remain in place until such time as I revoke it in writing by letter
                  to the Privacy Officer of HUDA Clinic.
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  Personal Representative(s)
                </Typography>

                <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  ---------------------------------------------------------------------------------------
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="p1" style={{ textAlign: 'left' }}> 1. First Representative </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Print Name:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Relationship to Patient:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Phone Number:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="p1" style={{ textAlign: 'left' }}> 2. Second Representative </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Print Name:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Relationship to Patient:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Phone Number:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="p1" style={{ textAlign: 'left' }}> 3. Third Representative </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Print Name:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Relationship to Patient:"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="Phone Number:"
                  fullWidth
                  variant="filled"
                />
              </Grid>
            </Grid>
          </React.Fragment>
        </AccordionDetails>
      </Accordion>


      {/* Form 4 - Stress Questionnaire */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="p1" sx={{ fontWeight: 'bold' }} >Patient Stress Questionnaire</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <React.Fragment>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              Patient Stress Questionnaire
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
              ---------------------------------------------------------------------------------------
            </Typography>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Over the last 2 weeks, how often have you been bothered by any of the following problems?
                  Please select one answer & check the box that applies to you.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2.5}>
                <Typography variant="caption" style={{ textAlign: 'left' }}>
                  0 = Not at all
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Typography variant="caption" style={{ textAlign: 'left' }}>
                  1 = Several Days
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Typography variant="caption" style={{ textAlign: 'center' }}>
                  2 = More than half the days
                </Typography>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Typography variant="caption" style={{ textAlign: 'right' }}>
                  3 = Nearly every day
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label">Little interest or pleasure in doing things?</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label">Feeling down, depressed or hopeless </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"></FormLabel>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Trouble falling or staying asleep OR</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Sleeping too much</Typography>}
                  />
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label">Feeling tired or having little energy </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"></FormLabel>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Poor appetite OR</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Overeating</Typography>}
                  />
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label">Feeling bad about yourself or what that you are a
                    failure or have let yourself or your family down
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label">Trouble concentrating on things such as reading the
                    newspaper or watching television
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"></FormLabel>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Moving or speaking so slowly that other people could have noticed OR</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Being so fidgety or restless that you’ve been moving around a lot more than usual</Typography>}
                  />
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"></FormLabel>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Thoughts that you would be better off dead OR</Typography>}
                  />
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveInformation" value="yes" />}
                    label={<Typography variant="standard" color="textSecondary">Hurting yourself in some way</Typography>}
                  />
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="body2" style={{ textAlign: 'left' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  PHQ-9 Add columns & total
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="0"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="1"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="2"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="3"
                  fullWidth
                  variant="filled"
                />
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  ---------------------------------------------------------------------------------------
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 1. Feeling nervous, anxious, or on edge
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 2. Not being able to stop or control worrying.
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 3. Worrying too much about different things
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 4. Trouble relaxing
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 5. Being so restless that it is hard to sit still
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 6. Becoming easily annoyed or iritable
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 7. Feeling afraid as if something awful might happen
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">0</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">1</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="body2">2</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="body2">3</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="body2" style={{ textAlign: 'left' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  GAD7 Add columns & total
                </Typography>
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="0"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="1"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="2"
                  fullWidth
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField
                  required
                  id="cell"
                  name="cell"
                  label="3"
                  fullWidth
                  variant="filled"
                />
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  ---------------------------------------------------------------------------------------
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  In your life have you ever had any experience that was so frightening, horrible, or upsetting that in the
                  past month you have:
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 1. Have had nightmares about it
                    or thought about it when you did not want to?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">Yes</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">No</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 2. Tried hard not to think
                    about it or went out of your way to avoid situations that reminded you of it?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">Yes</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">No</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 3. Were constantly on guard, watchful,
                    or easily startled?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">Yes</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">No</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-row-radio-buttons-group-label"> 4. Felt numb or easily detached from
                    others, activities, or your surroundings?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="body2">Yes</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="body2">No</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid>



              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  PTSD4
                </Typography>
                <Typography variant="body1" style={{ textAlign: 'center' }} sx={{ fontWeight: 'bold' }} gutterBottom>
                  ---------------------------------------------------------------------------------------
                </Typography>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Drinking alcohol can affect your health. This is especially important if you take certain
                  medications. We want to help you stay healthy and lower your risk for the problems that can
                  be caused by drinking. These questions are about your drinking habits. 1 drink is defined as
                  the following in fluid ounces:
                </Typography>
              </Grid>


              <Grid item xs={12} sm={12}>
                <Grid container spacing={1}>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> 12 oz of regular beer </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> 8-5 oz of malt liquor </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> 5 oz of table wine </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> 1.5 oz 80 proof spirits </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> ~ 5% alcohol </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> ~ 7% alcohol </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> ~ 12% alcohol </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1 }}>
                      <Typography variant="caption" style={{ textAlign: 'center' }}> ~ 40% alcohol</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  Please select your answer.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  0
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  1
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  2
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  3
                </Typography>
              </Grid>

              <Grid item xs={12} sm={1}>
                <Typography variant="body2" style={{ textAlign: 'left' }}>
                  4
                </Typography>
              </Grid>


              {/*    <Grid item xs={12} sm={12}>
                <FormControl>
                  <FormLabel labelPlacement="start" id="demo-radio-buttons-group-label"> 1. How often do you have one drink containing alcohol?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >

                    <FormControlLabel value="one" control={<Radio />} label={<Typography variant="caption" style={{ textAlign: 'left' }} >(0) Never</Typography>} />
                    <FormControlLabel value="two" control={<Radio />} label={<Typography variant="caption" style={{ textAlign: 'left' }} >(1) Monthly or less</Typography>} />
                    <FormControlLabel value="three" control={<Radio />} label={<Typography variant="caption" style={{ textAlign: 'left' }} >(2) 2-4 times/month</Typography>} />
                    <FormControlLabel value="four" control={<Radio />} label={<Typography variant="caption" style={{ textAlign: 'left' }} >(3) 2-3 times/week</Typography>} />
                    <FormControlLabel value="five" control={<Radio />} label={<Typography variant="caption" style={{ textAlign: 'left' }} >(4) 4+ times/week</Typography>} />

                  </RadioGroup>
                </FormControl>
              </Grid> */}























            </Grid>
          </React.Fragment>
        </AccordionDetails>
      </Accordion>





    </div>
  );
}




