import { useState } from 'react';

export default function SearchBar(){
    const [query, setQuery] = useState('');
return <div>
    <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
</div>
}