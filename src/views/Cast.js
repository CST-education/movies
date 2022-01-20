import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_URL } from '../services/constList';
import * as moviesAPI from '../services/movies-api';
import NotFoundMsg from './NotFoundMsg';
import img from '../images/images.jpg';
export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesAPI.fetchCastsById(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);
  const getImg = (movie) => {
    if (movie.poster_path) {
      return `${IMG_URL}${movie.poster_path}`;
    } else if (movie.profile_path) {
      return `${IMG_URL}${movie.profile_path}`;
    }
    return img;
  };
  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map((el) => (
            <li key={el.id}>
              <img src={getImg(el)} alt={el.name} width={150} />
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <NotFoundMsg msg='No CAST found !' />
      )}
    </>
  );
}
