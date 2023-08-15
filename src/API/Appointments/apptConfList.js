import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentConfirmationList = () => {
  const [appointmentStatuses, setAppointmentStatuses] = useState();

  useEffect(() => {
    const authHeaders = {
      accept: "application/json",
      Authorization: "Bearer Ep7gSvgfXYpFCklpgplabABgS8z1",
    };

    axios
      .get(
        `https://api.preview.platform.athenahealth.com/v1/16555/reference/appointmentconfirmationstatus`,
        {
          headers: authHeaders,
        }
      )
    
    .then(response => {
      setAppointmentStatuses(response.data);
      console.log(response.data);
    })

    .catch(error => {
      console.error(error);
    });
  }, []);

  if (appointmentStatuses === undefined) {
    return <div>Loading lists...</div>;
  } 
  else {
    return (
      <div>
        Lists:
        <div>
          {appointmentStatuses.status.map(item => (
            <p>{item.name}, {item.statusid}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default AppointmentConfirmationList;