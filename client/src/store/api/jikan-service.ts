import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Person, Planet, Starship } from "../../types/api/swapi";
import {
  PeopleResult,
  PlanetResult,
  StarshipsResult,
} from "../../types/api/swapi";
import {
  AnimeCharacters,
  AnimeEpisodes,
  AnimeFull,
  AnimeList,
  AnimeNews,
  AnimePictures,
  AnimeRecommendations,
  AnimeStatistics,
  GetAnimeListArg,
} from "../../types/api/jikan";

const _apiUrl = "https://api.jikan.moe/v4/";

// Define a service using a base URL and expected endpoints
const jikanApi = createApi({
  reducerPath: "jikanApi",
  baseQuery: fetchBaseQuery({ baseUrl: _apiUrl }),
  endpoints: (builder) => ({
    getAnimeFullByld: builder.query<AnimeFull, number>({
      query: (id) => `anime/${id}/full`,
    }),
    getAnimeCharacters: builder.query<AnimeCharacters, number>({
      query: (id) => `anime/${id}/characters`,
    }),
    getAnimeNews: builder.query<AnimeNews, number>({
      query: (id) => `anime/${id}/news`,
    }),
    getAnimeEpisodes: builder.query<AnimeEpisodes, number>({
      query: (id) => `anime/${id}/episodes`,
    }),
    getAnimePictures: builder.query<AnimePictures, number>({
      query: (id) => `anime/${id}/pictures`,
    }),
    getAnimeRecommendations: builder.query<AnimeRecommendations, number>({
      query: (id) => `anime/${id}/recommendations`,
    }),
    getAnimeStatistics: builder.query<AnimeStatistics, number>({
      query: (id) => `anime/${id}/statistics`,
    }),
    getAnimeList: builder.query<AnimeList, GetAnimeListArg>({
      query: (arg) => {
        return {
          url: "anime",
          params: { ...arg },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAnimeCharactersQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeFullByldQuery,
  useGetAnimeListQuery,
  useGetAnimeNewsQuery,
  useGetAnimePicturesQuery,
  useGetAnimeRecommendationsQuery,
  useGetAnimeStatisticsQuery,
} = jikanApi;

export default jikanApi;
