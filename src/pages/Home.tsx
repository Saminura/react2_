import { useEffect, useState } from 'react';
import { boardMovies, searchMovies } from '../services/api';
import { Link } from 'react-router-dom';
import Favorites, { addToFavorites, getFavorites, removeFromFavorites } from '../services/Favorites';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';

    export default function Home() {
        const [movies, setMovies] = useState([]);
        
        useEffect (() =>{
            boardMovies().then(data => {
                setMovies(data.titles);
            });
        }, []);

        const handleSearch = (query) => {
            searchMovies(query).then(data => {
                setMovies(data.titles);
            });
        };



        return (
            <div>
                <SearchBar onSearch={handleSearch} />
                <MoviesList  movies={movies} favorites={Favorites}/>
                </div>
            </div>
        );
    }
