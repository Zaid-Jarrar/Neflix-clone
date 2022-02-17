import React from 'react'
import FavListItems from '../FavListitems/FavListitems.js'
import './favList.css'
const FavList = (props) => {
    console.log(props);
  return (
    <>
     <h1>This is my favorite list of Movies</h1>
     <main className = "fav">
         <FavListItems favoriteList={props.favoriteList} />
     </main>

     </>
  )
}

export default FavList