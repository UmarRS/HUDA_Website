import React, { useState, useEffect } from 'react';
import axios from 'axios';



const OpenAppointmentSlots = () => {
    const [openappointments, setOpenAppointments] = useState();

    useEffect(() => {
       const authHeaders = {
        accept: 'application/json',
        Authorization: 'Bearer oCzAnMzTxaA71sZUaynz0m5w46CG',  
      }; 

      axios
       .get(
        `https://api.preview.platform.athenahealth.com/v1/16555/appointments/open?reasonid=-1&departmentid=4`,
        {
          headers: authHeaders,
        }
      )
    
    .then(response => {
      setOpenAppointments(response.data);
      console.log(response.data);
    })

    .catch(error => {
      console.error(error);
    });
  }, []);

  if (openappointments === undefined) {
    return <div>No Available Appointments.</div>;
  }
  else{
    return(
        <div>
            <h2>Available Appointments: </h2>
            <ul>
                {openappointments.appointments.map(open => (
                <li key={open.departmentid}>
                    <div><b>Date:</b> {open.date}</div>
                    <div><b>Time:</b> {open.starttime}</div>
                    <div><b>Duration:</b> {open.duration} Minutes</div>
                </li>
                
                  
            ))}  
            </ul>
            
        </div>
    );
  }

};
export default OpenAppointmentSlots;