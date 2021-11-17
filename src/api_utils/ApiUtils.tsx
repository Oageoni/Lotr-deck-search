import axios from 'axios';

export const FetchDeck = async (id: number) => {
  try {
    const response = await axios.get(
      `https://ringsdb.com/api/oauth2/deck/load/${id}`
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
    } else {
    }
  }
};

export const FetchCard = async (id: string) => {
  try {
    const response = await axios.get(
      `https://ringsdb.com/api/public/card/${id}`
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
