import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Person, Planet, Starship } from "../../types/api/swapi";
import {
  PeopleResult,
  PlanetResult,
  StarshipsResult,
} from "../../types/api/swapi";

const _apiUrl = "https://swapi.dev/api";
const _imageUrl = "https://starwars-visualguide.com/assets/img";

// Define a service using a base URL and expected endpoints
const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: _apiUrl }),
  endpoints: (builder) => ({
    getPersonByID: builder.query<Person, number>({
      query: (id) => `people/${id}`,
    }),
    getPlanetByID: builder.query<Planet, number>({
      query: (id) => `planets/${id}`,
    }),
    getStarshipByID: builder.query<Starship, number>({
      query: (id) => `starships/${id}`,
    }),
    getAllPeople: builder.query<PeopleResult, void>({
      query: () => `people/`,
    }),
    getAllPlanets: builder.query<PlanetResult, void>({
      query: () => `planets/`,
    }),
    getAllStarships: builder.query<StarshipsResult, void>({
      query: () => `starships/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPersonByIDQuery,
  useGetPlanetByIDQuery,
  useGetStarshipByIDQuery,
  useGetAllPeopleQuery,
  useGetAllPlanetsQuery,
  useGetAllStarshipsQuery,
} = starWarsApi;

export default starWarsApi;
