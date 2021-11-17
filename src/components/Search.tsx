import React, { useState } from 'react';
import { FetchCard, FetchDeck } from '../api_utils/ApiUtils';
import { Form } from 'react-bootstrap';
const Search = ({ parentalCallback }: { parentalCallback: any }) => {
  const [loading, setLoading] = useState(false);

  const GetValue = async (value: any) => {
    setLoading(true);
    const response = await FetchDeck(value);

    if (response.success !== false) {
      const heroCardIds = Object.keys(response.heroes);
      const heroes = await Promise.all(heroCardIds.map(FetchCard));
      setLoading(false);
      return parentalCallback({ cards: heroes });
    }
    setLoading(false);
    return parentalCallback(response);
  };
  return (
    <div className='Search col-12 col-sm-6'>
      <p>Search for a deck by entering a deck id</p>

      <Form.Control
        type='text'
        className=''
        id='deck-id'
        placeholder='Enter a deck id'
        onBlur={(e) => GetValue(e.target.value)}
      />
      <div className='Loading-spinner'>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          ''
        )}
      </div>

      <div></div>
    </div>
  );
};

export default Search;
