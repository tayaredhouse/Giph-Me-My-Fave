import Giphy from "./components/Giphy";
import './App.css';
import AddFavorites from "./components/AddFavorites";
import { useState } from "react";
import Favorites from "./components/Favorites";

function App() {

  //Favorites State
    const [favorites, setFavorites] = useState([]);

  const addFavoriteGiph = (giphy) => {
    const newFaveList = [...favorites, giphy];
    setFavorites(newFaveList);
  }

  return (
    <div className="App">
      <Favorites giphys={favorites}/>
      <Giphy favoriteComponent={AddFavorites} handleFavoritesClick={addFavoriteGiph} />  
    </div>
  );
}

export default App;
