import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList.js"
import { Row, Container } from "react-bootstrap";
const Home = () => {
    const [movies, setMovies] = useState();
    const fetchData = async () => {
       
        try {
            
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=9e9c56756502de43b7e8dc3e69957a3f`)
        //    console.log(response);
           
            const data = await response.json();
            let newResult=[];
            for( let count of data.results){
                count[`caption`] = ''//create new caption key-value pair and add it to the data
                count[`iscaption`] = false
                newResult.push(count)
            }
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.log("error", error);
        }
    };

    const updateCaptions = (data, id) => {
        let updatedMovies = movies.map(movie => {
            if (movie.id === id) {
                movie.caption = data.userCaption;
                movie.iscaption = !movie.iscaption;
                return movie;
            }
            else return movie
        })
        setMovies(updatedMovies);
    }

 
    useEffect(() => {
        fetchData();
    }, []);//[] fetch the data when i refresh the page


  return (
    <div>

        home
        {movies && (
    <Container fluid className="main-container">
        <Row className="flex-row">
            <MovieList movies={movies} updateCaption={updateCaptions} />
        </Row>
    </Container>
)}
     
       


    </div>
  )
}
export default Home;

