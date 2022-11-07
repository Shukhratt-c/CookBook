import React from 'react';
import NotFoundImg from '../assets/not-found.png';
import ErrorPng from '../assets/404error.png';
import styled from "styled-components";


export function NotFound() {
  return (
    <ErrorText>
        <h3>Nothing Found</h3>
        <p>Couldn't find anything :(, keep trying</p>
        <img src={NotFoundImg} alt="Not Found"/>
        <p>Note* The API only provides 200 requests per day </p>
    </ErrorText>
  )
}

export function TimeOut() {
  return (
    <ErrorText>
      <h3>API time out :( </h3>
      <p className='p2'>try again tomorrow</p>
      <p>Note* The API only provides 200 requests per day </p>
      <img src={ErrorPng} alt="error messege "/>
    </ErrorText>
  )
}

const ErrorText = styled.div`
    margin-top: 3rem;

    p {
      margin-top: 2rem;
      font-size: 20px;
    }
    .p2 {
      font-size: 2rem;
    }

    h3 {
        font-size: 3rem;
    }

`;



