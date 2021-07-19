import { useEffect, useState } from "react";
import React from 'react';
import Async from 'react-async';
import regeneratorRuntime from "regenerator-runtime";


function Parks (){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    await fetch("http://localhost:3003/api/parks/")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(`res.json==============`, result.parks)
          // setIsLoaded(true);
          setItems(result.parks);
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        })
        .finally(() => {
        setLoading(false);
        });
     
  } 
 

  return( <div>
  { console.log(`items`, items)}

  <h3>my parks {items.lenght}</h3>

  {/* { items.map(park => (
        <div >{park.title}</div> 
      )) 
  } */}
      

  </div>
    )
 
}

export default Parks;