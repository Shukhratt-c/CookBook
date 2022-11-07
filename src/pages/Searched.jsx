import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import styled from "styled-components";
import { NotFound } from "../components/NotFound" 
import { motion } from "framer-motion";


function Searched() {
    const [searchedStuff, setsearchedStuff] = useState([]);
    let params = useParams();
    
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_COOKBOOK_API}&query=${name}`)
        const recipes = await data.json();
        setsearchedStuff(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);
     
return ( 
    <Grid 
        animate={{ opacity: 1}}
        initial={{ opacity: 0}}
        exit={{ opacity: 0}}
        transition={{ duration: 1 }}
    >
        {searchedStuff && searchedStuff.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4 className="h4-text">{item.title}</h4>
                    </Link>

                </Card>
            )
        })}
        {searchedStuff.length === 0 && <NotFound /> }
            
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
    margin-top: 3rem;

    img {
        width:100%;
        cursor: pointer;
        height: 100%;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 2rem;        
    }

    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
    }
`


export default Searched