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
  @media only screen and (max-width: 750px) {
    margin-top: 2rem;

    p {
      margin-top: 1.5rem;
      font-size: 15px;
    }

    h3 {
        font-size: 2rem;
    }

    .p2 {
      font-size: 1rem;
    }

    img {
      height: 30rem;
      width: 22rem;
    }
  
  }

`;



