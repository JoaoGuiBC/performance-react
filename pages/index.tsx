import { FormEvent, useState } from 'react'
import SearchResults from '../components/searchResults';

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

      <SearchResults results={results} />
    </div>
  )
}