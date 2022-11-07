import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const subitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)
    };

  return (
    <form className='search-bar' onSubmit={subitHandler}>
        <div >
            <FaSearch className='search-icon'></FaSearch>
            <input className='search' onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
    </form>
  )
}


export default Search