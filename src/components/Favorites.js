import React from 'react'
import RemoveFavorites from './RemoveFavorites';

function Favorites({giphys, handleRemovalClick}) {



    const faverender = () => {
        if (giphys == null) {
            return (
                <div>No Favorites Yet!</div>
            )
        } else {
        return giphys.map(giphy => {
            return (
                
                        <div className="gif " key ={giphy.id}>
                             <img src={giphy.images.fixed_height.url} alt=""
                            onClick={() => handleRemovalClick(giphy)}
                            />

                                 <div 
                                className="overlay"
                                onClick={() => handleRemovalClick(giphy)}>
                                    <RemoveFavorites />
                                </div>
                        </div>
                    
                
                    
            )
        })
    }
}

    return (
        <div>
            <h2><i class="fas fa-heart"></i> My Faves <i class="fas fa-heart"></i></h2>
            <p>Click giphys to add favorites!</p>
            
                    <div className='image-container d-inline-flex justify-content-start m-3'>
                        {faverender()}
                    </div>
                </div>
    
    )
}

export default Favorites
