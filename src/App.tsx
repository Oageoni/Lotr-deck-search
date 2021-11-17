import { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import DeckGrid from './components/DeckGrid';
import { Card } from './types';
function App() {
  const [error, setError] = useState('');
  const [deckData, setDeckData] = useState<Card[]>([]);
  const fetchResponse = (data: {
    cards: Card[];
    success?: boolean;
    error?: string;
  }) => {
    if (data.error) {
      setError(data.error);
      return;
    }
    setDeckData(data.cards);
    setError('');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Deck search</h1>
      </header>
      <div>
        <Search parentalCallback={fetchResponse}></Search>
        <div className='Error-container'>
          <p>{error}</p>
        </div>
        {deckData ? <DeckGrid cards={deckData}></DeckGrid> : 'No decks'}
      </div>
    </div>
  );
}

export default App;
