import React from 'react'

function Favorites(props) {
    const {giphys} = props;
    console.log(props);

    const faverender = () => {

        return giphys.map(giphy => {
            return (
                <div className="gif" key ={giphy.id}>
                    <img src={giphy.images.fixed_height.url} />
                    <div 
                    className="overlay" 
                    onClick={() => props.handleFavoritesClick(giphy)}>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Faves</h2>
            <div className="gifs">
            {faverender()}
             </div>
        </div>
    )
}

export default Favorites
