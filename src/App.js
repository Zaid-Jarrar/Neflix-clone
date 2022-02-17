import {Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/home.js";
import { useEffect, useState } from "react";
import Navbars from './Components/Navbar/Navbar.js'
import FavList from './Components/FavList/FavList.js'
function App() {

  const [favoriteList,SetFavList] = useState([]);


  const fetchData = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
  
      const data = await res.json();
      SetFavList(data);
  
    }catch (error) {
      console.log("error", error);
    }
  
  }
  
  
    useEffect(() => {
      fetchData();
    } , []);
 
  return (
    <div className="App">
      <Navbars/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavList favoriteList={favoriteList}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
