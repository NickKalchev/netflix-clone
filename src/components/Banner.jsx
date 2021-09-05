import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import apiRequests from '../requests';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const request = await axios.get(apiRequests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }

        fetchMovies();
    }, [])

    console.log(movie);

    const truncate = (string, charNum) => (
        string?.length > charNum ? string.substr(0, charNum -1) + '...' : string
    );
        
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button1"><PlayArrowIcon /> Play</button>
                    <button className="banner__button2">My List</button>
                </div>
                <h1 className="banner__desc">
                    {truncate(movie?.overview, 220)}
                </h1>
            </div>

            <div className="banner--bottomFading" />
        </header>
    )
}


export default Banner
