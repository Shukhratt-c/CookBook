import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TimeOut } from "../components/NotFound";



function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        try {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_COOKBOOK_API}&cuisine=${name}`)
            const recipes = await data.json();
            setCuisine(recipes.results);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type]);

  return (
    <Grid 
        animate={{ opacity: 1}}
        initial={{ opacity: 0}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.5 }}

    >
        {cuisine && cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4 className="h4-text">{item.title}</h4>
                    </Link>

                </Card>
            )
        })}
        {cuisine.length === 0 && <TimeOut /> } 
    
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    `;

const Card = styled.div`
        margin-top: 4rem;
    img {
        width: 100%;
        height: 100%;
        border-radius: 2rem; 
        cursor: pointer;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    }

    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
        cursor: pointer;
    }
`

export default Cuisine