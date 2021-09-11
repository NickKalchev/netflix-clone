import axios from '../axios';
import React, { useEffect, useState } from 'react';
import '../styles/Banner.css';
import apiRequests, { API_KEY } from '../requests';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactPlayer from "react-player/lazy";
import { useSelector } from 'react-redux';
import { selectMovie } from '../features/movieSlice';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

function Banner() {

    const [movie, setMovie] = useState([]);
    const [videoURL, setVideoURL] = useState(false);
    const [play, setPlay] = useState(false);
    const selectedMovie = useSelector(selectMovie);

    useEffect(() => {
        if(!selectedMovie) {
            async function fetchMovies() {
                const request = await axios.get(apiRequests.fetchNetflixOriginals);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data?.results?.length -1)
                    ]
                );
                return request;
            }    
            fetchMovies();
        } else if (!selectedMovie.netflix) {
            async function fetchSelectedMovie() {
                const request = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.movie}?api_key=${API_KEY}`);
                setMovie(
                    request.data
                );
                return request;
            }    
            fetchSelectedMovie();
        } else {
            async function fetchSelectedShow() {
                const request = await axios.get(`https://api.themoviedb.org/3/tv/${selectedMovie.movie}?api_key=${API_KEY}`);
                setMovie(
                    request.data
                );
                return request;
            }    
            fetchSelectedShow();
        }       
          
    }, [selectedMovie]);


    useEffect(() => {
        async function fetchMovieTrailer() {
            if (selectedMovie && !selectedMovie.netflix) {
                const trailer = await axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${API_KEY}&append_to_response=videos`);
                    setVideoURL(
                        `https://www.youtube.com/watch?v=${trailer?.data?.results[0]?.key}`
                    );            
                return trailer;
            } else {
                const trailer = await axios.get(`https://api.themoviedb.org/3/tv/${movie?.id}/videos?api_key=${API_KEY}&append_to_response=videos`);
                if(trailer?.data?.results[1]){
                    setVideoURL(
                        `https://www.youtube.com/watch?v=${trailer?.data?.results[1]?.key}`
                    );                 
                } else {
                    setVideoURL(
                        `https://www.youtube.com/watch?v=${trailer?.data?.results[0]?.key}`
                    );   
                }
                return trailer;
            }
        }
        fetchMovieTrailer()
    }, [movie, selectedMovie])

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

            <div className="banner__bottomFading" />
            <div className="banner__video">
                {play && (
                    <CloseRoundedIcon onClick={() => setPlay(false)} />
                )}
             {videoURL && play && <ReactPlayer width={"100%"} controls={true} url={videoURL} />}
            </div>
        </header>
    )
}


export default Banner
