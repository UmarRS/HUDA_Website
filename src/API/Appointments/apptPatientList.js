import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function PatientAppointments() {
  const [patientStatus, setPatientStatus] = useState();
  const accessToken = localStorage.getItem("access_token");


  const fetchAppointments = useCallback(() => {
    if (!accessToken) {
      return;
    }

    const authHeaders = {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .get(
        `https://api.preview.platform.athenahealth.com/v1/195900/patients/1/appointments`,
        {
          headers: authHeaders,
        }
      )
      .then(response => {
        setPatientStatus(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetchAppointments();
    }
  }, [accessToken, fetchAppointments]);

  if(!accessToken) {
    return <div>Log in to view appointments.</div>;
  }

  if (patientStatus === undefined) {
    return <div>Loading...</div>;
  } 
  else {
    return (
        <React.Fragment>
        <h2>My Appointments</h2>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Appointment Type</b></TableCell>
              <TableCell><b>Time</b></TableCell>
              <TableCell><b>Duration</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientStatus.appointments.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.patientappointmenttypename}</TableCell>
                <TableCell>{item.starttime}</TableCell>
                <TableCell>{item.duration} minutes</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
};