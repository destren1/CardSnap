import { UnsplashPhoto } from "../services/cardsSlice";

export const getCardsApi = async (): Promise<UnsplashPhoto[]> => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?count=4",
    {
      headers: {
        Authorization: `Client-ID 0ZK6sRo5QB1mwJA35gwJQvlsLJzq1eN-SWbUYkKkgSI`,
      },
    }
  );

  const data: UnsplashPhoto[] = await response.json();
  return data;
};
