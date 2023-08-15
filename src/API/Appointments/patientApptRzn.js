import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentReasons = () => {
  const [reasons, setReasons] = useState();
    
  useEffect(() => {
    const authHeaders5 = {
        accept: 'application/json',
        Authorization: 'Bearer oCzAnMzTxaA71sZUaynz0m5w46CG',
    };

    axios
    .get(
        `https://api.preview.platform.athenahealth.com/v1/16555/patientappointmentreasons?departmentid=4&providerid=162`,
        {
            headers: authHeaders5,
        }
    )

    .then(response => {
        setReasons(response.data);
        console.log(response.data);
    })

    .catch(error => {
        console.error(error);
    });

}, []);

if (reasons === undefined) {
    return <div>Loading... </div>;
}

else {
    return (
      <div>
        New or existing:
        <div>
          {reasons.patientappointmentreasons.map(item => (
            <p>{item.reasontype}</p>
          ))}

        </div>
      </div>
    );
  }
  
};

export default AppointmentReasons;