import React from 'react'
import "./Movie.css"
// import ModalMovie from '../ModalMovie/ModalMovie.js'
import { Card, Button } from 'react-bootstrap';
// import { useState } from 'react';
const Movie = (props) => {
    // const [movie, setMovie] = useState()
    // const [showModal, setShowModal] = useState(false);;
    console.log(props)
  return (
    <div key= {props.movie.id} >
    <Card key={props.movie.id}  className ="card">
        <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movie.poster_path}`} />
        <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
                {props.movie.overview}
            </Card.Text>
            <Card.Text>
                {props.movie.caption}
            </Card.Text>
            <Button variant="primary" onClick={() => { props.setMovie(props.movie); props.setShowModal(true) }} >Show Modal</Button>
        </Card.Body>
    </Card>
    
</div>
    
  )
}
export default Movie
