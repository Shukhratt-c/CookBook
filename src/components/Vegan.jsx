import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function Vegan() {
  const [vegan, setVegan] = useState([]);

  useEffect(() => {
    getVegan();
  }, []);

  const getVegan = async () => {
    const check = localStorage.getItem("vegan");

    if (check) {
      setVegan(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_COOKBOOK_API}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("vegan", JSON.stringify(data.recipes));
      setVegan(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegan Picks</h3>
        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: 5,
            wheel: true,
            autoplay: true,
            type   : 'loop',

          }}
        >
          {vegan.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <div className='card-text'>{recipe.title}</div>
                    <img src={recipe.image} alt="true" />
                  </Link>
                </Card>
                <Gradient />
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.div`
  margin: 4rem 0rem;
  
  @media only screen and (max-width: 750px) {
    margin: 3rem 0rem;
  }
  `;

const Card = styled.div`
  min-height: 22rem;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  gap: 3px;
  margin: 12px;

  @media only screen and (max-width: 1000px) {
    min-height: 17rem;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin: 8px;
  }

  

  img {
    border-radius: 15px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
    filter: brightness(50%);

  }

  .card-text {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  	letter-spacing: 1px;
    width: 100%;
    overflow: hidden;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    cursor: pointer;
   
    
  }

  @media only screen and (max-width: 750px) {
    min-height: 12rem;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    margin: 2px;

    &:hover {
      img {

      }
    }

    img {
      border-radius: 12px;
      width: 100%;
      height: 100%;
      filter: brightness(60%);

    }

    .card-text {
      position: absolute;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0.1rem;
      margin-left: 0.2rem;
      filter: brightness(95%);
      font-weight: 500;
      height: 30%;
      font-size: 15px;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 8px;

    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

`


export default Vegan;
