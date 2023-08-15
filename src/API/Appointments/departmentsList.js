import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const DepartmentsList = () => {
    const [departmentList, setDepartmentList] = useState();
 
    useEffect(() => {
       const authHeaders = {
        accept: 'application/json',
        Authorization: 'Bearer oCzAnMzTxaA71sZUaynz0m5w46CG',  
      };
 
      axios
       .get(
        `https://api.preview.platform.athenahealth.com/v1/16555/departments`,
        {
          headers: authHeaders,
        }
      )
   
    .then(response => {
      setDepartmentList(response.data);
      console.log(response.data);
    })
 
    .catch(error => {
      console.error(error);
    });
  }, []);
 
  if (departmentList === undefined) {
    return <div>Loading lists...</div>;
  }
  else {
    return (
        <div>
          <h2>List of departments:</h2>
           {departmentList.departments.map(department => (
            <div key={department.departmentid}>
            <h3>Department Type: {department.name}</h3>
            <ul>
            <li><b>Department ID:</b> {department.departmentid}</li>
            <li><b>Address:</b> {department.address}</li>
            <li><b>City:</b> {department.city}</li>
            <li><b>State:</b> {department.state}</li>
            <li><b>Zip:</b> {department.zip}</li>
            <li><b>Timezone:</b> {department.timezone}</li>
            <li><b>Timezone Name:</b> {department.timezonename}</li>
            <li><b>Timezone Offset:</b> {department.timezoneoffset}</li>
            <li><b>Patient Department Name:</b> {department.patientdepartmentname}</li>
            <li><b>Place of Service Facility:</b> {department.placeofservicefacility ? 'Yes' : 'No'}</li>
            <li><b>Place of Service Type ID:</b> {department.placeofservicetypeid}</li>
            <li><b>Place of Service Type Name:</b> {department.placeofservicetypename}</li>
            <li><b>Clinical Provider Fax:</b> {department.clinicalproviderfax}</li>
            <li><b>Clinicals:</b> {department.clinicals}</li>
            <li><b>Chart Sharing Group ID:</b> {department.chartsharinggroupid}</li>
            <li><b>Portal URL:</b> {department.portalurl}</li>
            <li><b>Fax:</b> {department.fax}</li>
            <li><b>Phone:</b> {department.phone}</li>
            <li><b>Service Department:</b> {department.servicedepartment ? 'Yes' : 'No'}</li>
            <li><b>Does Not Observe DST:</b> {department.doesnotobservedst ? 'Yes' : 'No'}</li>
            <li><b>Is Hospital Department:</b> {department.ishospitaldepartment ? 'Yes' : 'No'}</li>
            <li><b>Medication History Consent:</b> {department.medicationhistoryconsent ? 'Yes' : 'No'}</li>
          </ul>
          </div>
        ))}
        </div>
      );
  }
};
   
export default DepartmentsList;