import { UnsplashPhoto } from '../services/cardsSlice';

export const getCardsApi = async (): Promise<UnsplashPhoto[]> => {
	const response = await fetch("https://api.unsplash.com/photos/random?count=4", {
		headers: {
			Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`,
		},
	});
	
  const data: UnsplashPhoto[] = await response.json();
  return data;
};

