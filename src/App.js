import Giphy from "./components/Giphy";
import './App.css';
import AddFavorites from "./components/AddFavorites";
import { useState } from "react";
import RemoveFavorites from "./components/RemoveFavorites";


function App() {

  //Favorites State
    const [favorites, setFavorites] = useState([]);

    

  // Saves faves to local storage to allow it to stay after refresh
    const saveToLocal = (items) => {
      localStorage.setItem('react-giphy-app-favorites', JSON.stringify(items));
    }

  //creates a new array for favorite movies list
  //checks to make sure there are no duplicates
  const addFavoriteGiph = (giphy) => {
    const faves = favorites;
    const newFaveList = [...favorites, giphy];

    if(faves.includes(giphy)) {
      alert("Giphy already added");
    } else {
      setFavorites(newFaveList);
      saveToLocal(newFaveList);
    }
  };

  //removes movies from array
  const removeFavorite = (giphy) => {
    const newFavoriteList = favorites.filter(
      (favorites) => favorites.id !== giphy.id
    );
    setFavorites(newFavoriteList);
    saveToLocal(newFavoriteList);
  };
    
  

  return (
    <div className="App">
      
      <Giphy favoriteComponent={AddFavorites} 
      handleFavoritesClick={addFavoriteGiph}
      setFavorites={setFavorites}
      favorites={favorites}
      removeFavoriteComponent={RemoveFavorites}
      handleRemovalClick={removeFavorite}
      />  

    </div>
  );
}

export default App;
