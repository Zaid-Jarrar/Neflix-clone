import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap/';
import { useRef } from 'react';

const ModalMovie = (props) => {
    const commentRef = useRef();
    console.log(1,props.movie)
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        const newData = { ...props.movie, userCaption };
        props.updateCaption(newData, props.movie.id);
        console.log(1111111111,props.movie)
    }
  return (
    <>
       <Modal show={props.show} onHide={() => { props.handleClose() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img width='100%' src={props.movie.poster_path} alt={props.movie.title} />
                    <p>{props.movie.topText ? props.movie.topText : "No Text Provided"}</p>
                    <p>{props.movie.caption}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption ? props.movie.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


    </>
  )
}

export default ModalMovie