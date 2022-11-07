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

  `;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin: 0;
  cursor: pointer;


  @media only screen and (min-width: 768px) {
    /* For mobile phones: */
    min-height: 15rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    gap: 3px;
    margin: 0;
  }

  @media only screen and (min-width: 1000px) {
    min-height: 22rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    gap: 3px;
    margin: 1rem;
  }


  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  .card-text {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
  	letter-spacing: 1px;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: felx;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media only screen and (min-width: 600px) {
      padding: 1rem;
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
