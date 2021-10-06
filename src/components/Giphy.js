import React from 'react';
import { useEffect, useState } from "react";
import LoadComponent from './LoadComponent';
import axios from 'axios';

function Giphy() {
    //All of the states for this app
    const [giphys, setGiphys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState('');

//main async call for trending data, loads on page load w/page load logic
    useEffect(() => {
      const fetchData = async () => {
        setError(false);
        setLoading(true);

        //try catch for error handling on API call
        try {
            const results = await axios('https://api.giphy.com/v1/gifs/trending', {
            params: {
            //Giphy API states these keys are made for front-end client side
            //They do not need to be hid on server side
            //On product build they monitor and let you know if anything
            //goes wrong.
            api_key: 'UdbKWcAMuHkkVzokIli4Ko0crbjYKHHh',
            limit: 300
          }
        });

        setGiphys(results.data.data);

        } catch(err) {
            setError(true);
            console.log(err);
        }
        

        setLoading(false);
      };
      fetchData();
    }, [] );

    //renders the giph & maps out data

    const gifrender = () => {

        if(loading) {
            return <LoadComponent />
        }
        return giphys.map(el => {
            return (
                <div className="gif" key ={el.id}>
                    <img src={el.images.fixed_height.url} />
                </div>
            )
        })
    }

    //error logic, also makes use of Bootstrap for error look & feel
const renderError = () => {
    if(error) {
        return(
            <div className="alert alert-danger" 
            role="alert">
                Unable to get giphys, try again later.
            </div>
        )
    }
}

const handleSearch = (e) => {
    setSearch(e.target.value)
}

//since first render pulls from trending, second axios call
//is for search logic & loading
const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
        const results = await axios('https://api.giphy.com/v1/gifs/search', {
            params: {
            api_key: 'UdbKWcAMuHkkVzokIli4Ko0crbjYKHHh',
            q: search
          }
        });
        setGiphys(results.data.data);

    } catch(err) {
        setError(true);
        console.log(err);
    }
        setLoading(false);
    };


//main page rendering logic
    return (
        <div>
            {renderError()}
            <nav>
                <h1><i class="far fa-folder-open"></i>Giph Me My Fave</h1>
                <form>
                    <input value={search} onChange={handleSearch} type="text" placeholder="Search...">
                    </input>
                    <button onClick={handleSubmit} type="submit" className="btn-primary">Go!</button>
                </form>
            </nav>
            <div className="gifs">
            {gifrender()}
            </div>
        </div>
    )
}

export default Giphy