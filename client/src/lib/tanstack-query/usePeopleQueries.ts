import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import {
  GetPersonFullByIdResponse,
  GetPersonByIdResponse,
  GetPersonAnimeResponse,
  GetPersonVoicesResponse,
  GetPersonMangaResponse,
  GetPersonPicturesResponse,
  GetPeopleSearchResponse,
  GetPeopleSearchQueryParameters,
} from "../../types/api/people";

/**
 * Hook to fetch person details by ID with full information
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonFullByIdResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonFullById}
 */
export const useGetPersonFullByIdQuery = (
  id: number
): UseQueryResult<GetPersonFullByIdResponse, Error> => {
  return useQuery({
    queryKey: ["person", id, "full"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonFullByIdResponse>(
        `people/${id}/full`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch person details by ID
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonByIdResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonById}
 */
export const useGetPersonByIdQuery = (
  id: number
): UseQueryResult<GetPersonByIdResponse, Error> => {
  return useQuery({
    queryKey: ["person", id],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonByIdResponse>(
        `people/${id}`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch anime information for a person by ID
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonAnimeResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonAnime}
 */
export const useGetPersonAnimeQuery = (
  id: number
): UseQueryResult<GetPersonAnimeResponse, Error> => {
  return useQuery({
    queryKey: ["person", id, "anime"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonAnimeResponse>(
        `people/${id}/anime`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch voice acting roles for a person by ID
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonVoicesResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonVoices}
 */
export const useGetPersonVoicesQuery = (
  id: number
): UseQueryResult<GetPersonVoicesResponse, Error> => {
  return useQuery({
    queryKey: ["person", id, "voices"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonVoicesResponse>(
        `people/${id}/voices`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch manga information for a person by ID
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonMangaResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonManga}
 */
export const useGetPersonMangaQuery = (
  id: number
): UseQueryResult<GetPersonMangaResponse, Error> => {
  return useQuery({
    queryKey: ["person", id, "manga"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonMangaResponse>(
        `people/${id}/manga`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch pictures for a person by ID
 * @param {number} id - The ID of the person
 * @returns {UseQueryResult<GetPersonPicturesResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPersonPictures}
 */
export const useGetPersonPicturesQuery = (
  id: number
): UseQueryResult<GetPersonPicturesResponse, Error> => {
  return useQuery({
    queryKey: ["person", id, "pictures"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPersonPicturesResponse>(
        `people/${id}/pictures`
      );
      return data;
    },
  });
};

/**
 * Hook to search for people
 * @param {GetPeopleSearchQueryParameters} args - The search query
 * @returns {UseQueryResult<GetPeopleSearchResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/people/operation/getPeopleSearch}
 */
export const useGetPeopleSearchQuery = (
  args: GetPeopleSearchQueryParameters
): UseQueryResult<GetPeopleSearchResponse, Error> => {
  return useQuery({
    queryKey: ["people", "search", args],
    queryFn: async () => {
      const { data } = await apiClient.get<GetPeopleSearchResponse>("people", {
        params: args,
      });
      return data;
    },
  });
};
