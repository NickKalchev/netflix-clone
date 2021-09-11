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
                        <img key={movie.id} onClick={largeRow ? (() => dispatch(isMovie({ movie: movie.id, netflix: true }))) : (() => dispatch(isMovie({ movie: movie.id, netflix: false }))) } className={`row__image ${largeRow && "row__largeImage"}`} src={`${base_url}${
                            largeRow ? movie?.poster_path : movie?.backdrop_path
                        }`} alt={movie?.name} />

                    )
                ))}
            </ ScrollContainer>

        </div>
    )
}

export default Row
