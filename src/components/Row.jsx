import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../styles/Row.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useDispatch } from 'react-redux';
import { isMovie } from '../features/movieSlice';

function Row({ title, fetchUrl, largeRow = false }) {

    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    const base_url = "https://image.tmdb.org/t/p/original/";

    const handleClick = (movieId, netflix) => {
        dispatch(
            isMovie({
                movie: movieId,
                netflix
            })
        );
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    };

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchMovies();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <ScrollContainer className="row__images">
                {movies.map(movie => (
                    ((largeRow && movie.poster_path) ||
                    (!largeRow && movie.backdrop_path)) && (
                        <img key={movie.id} onClick={largeRow ? (() => handleClick(movie.id, true )) : (() => handleClick(movie.id, false))} className={`row__image ${largeRow && "row__largeImage"}`} src={`${base_url}${
                            largeRow ? movie?.poster_path : movie?.backdrop_path
                        }`} alt={movie?.name} />

                    )
                ))}
            </ ScrollContainer>

        </div>
    )
}

export default Row
