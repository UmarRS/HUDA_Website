import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
 
export default function Messaging() {
    const [messageStatus, setMessageStatus] = useState();
    const accessToken = localStorage.getItem("access_token");
 
    const fetchMessage = useCallback(() => {
        if (!accessToken) {
          return;
        }
 
        const authHeaders = {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
         };
 
    axios
        .get(
        `https://api.preview.platform.athenahealth.com/v1/195900/patients/1/securemessage/inboxmessages?limit=3`,
        {
          headers: authHeaders,
        }
      )
      .then(response => {
        setMessageStatus(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }, [accessToken]);
 
    useEffect(() => {
        if (accessToken) {
          fetchMessage();
        }
      }, [accessToken, fetchMessage]);
 
      if(!accessToken) {
        return <div>Log in to view messages.</div>;
      }
 
      if (messageStatus === undefined) {
        return <div>Loading...</div>;
      }
      else {
        return (
            <React.Fragment>
            <h2>Inbox</h2>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><b>Message</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {messageStatus.messages.map(messagelist => (
                  <TableRow key={messagelist.messagelist}>
                    <TableCell>{messagelist.subject}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        );
      }
  };