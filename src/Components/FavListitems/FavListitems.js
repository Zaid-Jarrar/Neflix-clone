import {  Card, CardGroup } from "react-bootstrap";
import "./FavListitems.css"

function FavListItems(props){
    return(
        <>
        <CardGroup style = {{display: "flex"}} className = "FavList" >
            {
                
                (props.favoriteList ?? []).map(movie => {
                    return (
                        <Card key={movie.id} className = "cardss">
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.posterpath}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                    {/* this is for the caption inside the favlist */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            
        
        </CardGroup>
        </>
    )
}

export default FavListItems;