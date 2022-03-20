import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';

export const Details = () => {
const dispatch = useDispatch();
let {id} = useParams();

const [details, setDetails] = useState(null)

useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/`+ id)	
    .then(res => {
        setDetails(res.data)
         console.log(res.data)
    });
},[dispatch, id])


  return (
    <div>
        {details?.id
           ?
            (
<div key={details.id}>
          <img src={details.image} alt={details.name} />
          <h3>{details.name}</h3>
          <p>{details.status}</p>
          <p>{details.species}</p>
          <p>{details.type}</p>
        </div>            ) :
        <p> Loading...</p>

    }
    <div>
        <Link to="/">
            <button>Return</button>
        </Link>
    </div>
    </div>
  )
}
