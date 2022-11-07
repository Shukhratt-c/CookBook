import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Loader from '../components/Loader'


function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [ isActive, setActive ] = useState("Instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_COOKBOOK_API}`)
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    }

    fetchDetails()
  }, [params.name])

  const summary = `<p>${details.summary}</p>`;
  const instructions = `<p>${details.instructions}</p>`;
  
  if (details.title === undefined) {
    return <Loader />
  }
  
  return (
    <DetailWrapper 
      animate={{ opacity: 1}}
      initial={{ opacity: 0}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
    >
      <div className='image-section'>
        <h3>{details.title}</h3>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <button className={isActive === 'Instructions' ? 'button  btnactive' : ' button btn-effect'} onClick={() => setActive('Instructions')}>Instructions</button>
        <button className={isActive === 'Ingredients' ? 'button  btnactive' : 'button btn-effect'} onClick={() => setActive('Ingredients')}>Ingredients</button>
        
        {isActive === 'Instructions' && (        
          <div className='in-text'>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <br/>
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </div>
        )}
        
        {isActive === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => 
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  
  h2 {
    margin-bottom: 2rem;
    
  }


  .in-text {
    margin-top: 3rem;
    
  }

  .image-section {
    width: 25rem;
  }
  
  img {

    max-height: 30rem;
    max-width: 30rem;
    margin-top: 2rem;
  }

  li {
    text-align: left;
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1250px) {
    display: flex; 
    flex-direction: column;
    margin-top: 3rem;


    .image-section {
      margin-top: 0;
      justify-items: center;
      align-items: center;
      width: 100%; 
    }

    img {
      height: 100%; 
      width: 100%;
      margin-top: 1rem;

    }
  }
`;

const Info = styled.div`
  margin-left: 10rem;
  @media only screen and (max-width: 1250px) {
    margin-left: 0;
    margin: 1rem;
    margin-top: 2rem;
    
    ul {
      justify-items: center;
      align-items: center;
    }

    li {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
`

export default Recipe