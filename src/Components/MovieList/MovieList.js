import React from 'react'
import { CardGroup } from 'react-bootstrap';
import { useState } from 'react';
import Movie from '../Movie/Movie.js'
import ModalMovie from '../ModalMovie/ModalMovie.js'
// import "./MovieList.css"

 const MovieList = (props) => {
    const [movie, setMovie] = useState()
const [showModal, setShowModal] = useState(false);;
    // console.log(props)
    return (
        <>
            <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
                {
                    props.movies.map(movie => {
                        return <Movie movie= {movie} key = {movie.id} setShowModal={setShowModal} setMovie={setMovie} />
                    })
                }
            </CardGroup>
            {showModal && <ModalMovie show={showModal} movie={movie} handleClose={() => { setShowModal(false) }} updateCaption={props.updateCaption} />}
            
        </>
    )
}

export default MovieList; 