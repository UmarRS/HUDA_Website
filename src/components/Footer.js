import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
            <MDBContainer className='p-4 pb-0'>
                <section className=''>
                    <p className='d-flex justify-content-center align-items-center'>
                        <span className='me-3'> We couldn't do what we do without donations from people just like you.
                            Every donation, big or small, makes a real difference in the lives of people in Metro-Detroit. Donate today. </span>
                    </p>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright: HUDA Clinic
                <a className='text-white'>

                </a>
            </div>
        </MDBFooter>


    )
}