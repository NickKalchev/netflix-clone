import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import apiRequests, { API_KEY } from '../requests';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactPlayer from "react-player/lazy";


function Banner() {

    const [movie, setMovie] = useState([]);
    const [videoURL, setVideoURL] = useState(false);
    const [play, setPlay] = useState(false);

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

    useEffect(() => {
        async function fetchMovieTrailer() {
            const trailer = await axios.get(`https://api.themoviedb.org/3/tv/${movie?.id}/videos?api_key=${API_KEY}&append_to_response=videos`);
            setVideoURL(
                `https://www.youtube.com/watch?v=${trailer?.data?.results[1]?.key}`
            );
            return trailer;
        }
        fetchMovieTrailer()
    }, [movie])

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
                    <button onClick={() => setPlay(true)} className="banner__button1"><PlayArrowIcon /> Play</button>
                    <button className="banner__button2">My List</button>
                </div>
                <h1 className="banner__desc">
                    {truncate(movie?.overview, 220)}
                </h1>
            </div>

            <div className="banner--bottomFading" />
            {videoURL && play && <ReactPlayer width={"100%"} url={videoURL} />}
        </header>
    )
}


export default Banner
