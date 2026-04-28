export default function MovieList(){
    <div className='p-2' key={movie.id}>
                            <img src={movie?.primaryImage?.url} alt='НАЗВАНИЕ' />
                            <Link to={`/movie/${movie.id}`}>
                                <h3>{movie.originalTitle}</h3>
                            </Link>
                            {favorites(). includes(movie.id) ? (
                                <button onClick={() => removeFromFavorites(movie.id)} className='p-3 bg-red-900 text-white'>Удфлить из избранное</button>
                            ) : (  
                                <button onClick={() => addToFavorites(movie.id)} className='p-3 bg-red-500 text-white'>Добавить в избранное</button>
                            )} 
                        </div>
}