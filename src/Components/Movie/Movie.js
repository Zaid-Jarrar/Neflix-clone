import React from 'react'
// import ModalMovie from '../ModalMovie/ModalMovie.js'
import { Card, Button } from 'react-bootstrap';
// import { useState } from 'react';
const Movie = (props) => {
    // const [movie, setMovie] = useState()
    // const [showModal, setShowModal] = useState(false);;
    console.log(props)
  return (
    <div key= {props.movie.id}>
    <Card key={props.movie.id} >
        <Card.Img variant="top" src={props.movie.poster_path} />
        <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
                {props.movie.overview}
            </Card.Text>
            <Card.Text>
                {props.movie.caption}
            </Card.Text>
            <Button variant="primary" onClick={() => { props.setMovie(props.movie); props.setShowModal(true) }} >Add To Favorites</Button>
        </Card.Body>
    </Card>
    
</div>
    
  )
}
export default Movie
