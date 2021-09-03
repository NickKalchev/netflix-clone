import React from 'react';
import '../styles/Banner.css';


function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://wallpaperaccess.com/full/3640120.jpg")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <h1 className="banner__title">
                    Movie name
                </h1>
                <div className="banner__buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
            </div>
        </header>
    )
}


export default Banner
