import React from 'react';
import apiRequests from '../requests';
import '../styles/HomeScreen.css';
import Banner from './Banner';
import Footer from './Footer';
import Nav from './Nav';
import Row from './Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row title='Netflix Originals' fetchUrl={apiRequests.fetchNetflixOriginals} largeRow />
            <Row title='Top Rated' fetchUrl={apiRequests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={apiRequests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={apiRequests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={apiRequests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={apiRequests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={apiRequests.fetchDocumentaries} />

            <Footer />
        </div>
    )
}

export default HomeScreen
