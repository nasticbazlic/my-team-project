import React, { useEffect, useState } from "react";
import Spinner from '../../Components/Common/spinner';
import Error from '../../Components/Common/error';

import './Blog.scss';
import Header from '../../Components/Header';

const Blog = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResults(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
console.log(results)
  
  if (error) {
    return <Error />
  } else if (!isLoaded) {
    return <Spinner />
  } else {
    return (
    <div className='blog'>
      <Header />
      <div className="blog__content">
        <div className="blog__content_title">
          Blog posts
        </div>
        <div className="blog__content_subtitle">
          Our latest updates and blogs about managing your team
        </div>
        <div className="blog__content_list">
          {results?.results?.map((result, id) => {
            return (
              <div key={id} className="card">
                <div className="front">
                    <img src={result?.image} alt='result_image' />
                </div> 
                <div  className="back">
                  <div className="back__content center">
                    <div className="back__content_name">{result?.name}</div>
                    gender: {result?.gender};<br />
                    species: {result?.species};<br />
                    location: {result?.location?.name}
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )}
}
export default Blog;
