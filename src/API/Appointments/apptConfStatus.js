import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentConfirmation = ({ appointmentId }) => {
  const [confirmationStatus, setConfirmationStatus] = useState();

  useEffect(() => {
    // Authenticate with the Athenahealth API
    const authHeaders = {
      accept: "application/json",
      Authorization: "Bearer XAR1jFmsoXxTo1lLcBMpJAdGStvD"
    };
    // Retrieve the appointment confirmation status
    axios
      .get(
        `https://api.preview.platform.athenahealth.com/v1/16555/appointments/${appointmentId}/confirmationstatus`,
        {
          headers: authHeaders,
        }
      )
      .then((response) => {
        setConfirmationStatus(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [appointmentId]);

  if (confirmationStatus === undefined) {
    return <div>Loading appointment confirmation status...</div>;
  } else {
    return (
      <div>
        Appointment confirmation status: {confirmationStatus.confirmationname}, {confirmationStatus.shortname}
      </div>
    );
  }
};

export default AppointmentConfirmation;