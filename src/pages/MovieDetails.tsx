import { useParams } from 'react-router-dom';
export default function MovieDetails(){
    const params = useParams();
    return (
        <div>
            <h1>Movie Details - {params.id}</h1>
        </div>
    );
}