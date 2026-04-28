import { getFavorites } from "../services/Favorites";

export default function Favorites() {
    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {getFavorites().map((favorite) => (
                    <li key={favorite}>
                        {favorite}
                    </li>
                ))}
            </ul>
        </div>
    );
}
