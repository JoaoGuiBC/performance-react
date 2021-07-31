import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${inputValue}`);
    const data = await response.json();

    setResults(data);
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, []);

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <SearchResults
        results={results}
        onAddToWishlist={addToWishList}
      />
    </div>
  )
}
