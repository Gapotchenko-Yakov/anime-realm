import {
  GetMangaFullByIdResponse,
  GetMangaByIdResponse,
  GetMangaCharactersResponse,
  GetMangaNewsResponse,
  GetMangaTopicsResponse,
  GetMangaSearchResponse,
  GetMangaSearchQueryParameters,
} from "../../types/api/manga";
import apiClient from "../services/apiClient";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

/**
 * Hook to fetch manga's full details by ID
 * @param {number} id - The ID of the manga
 * @returns {UseQueryResult<GetMangaFullByIdResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaFullById}
 */
export const useGetMangaFullById = (
  id: number
): UseQueryResult<GetMangaFullByIdResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id, "full"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaFullByIdResponse>(
        `manga/${id}/full`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch basic manga information by ID
 * @param {number} id - The ID of the manga
 * @returns {UseQueryResult<GetMangaByIdResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaById}
 */
export const useGetMangaById = (
  id: number
): UseQueryResult<GetMangaByIdResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaByIdResponse>(`manga/${id}`);
      return data;
    },
  });
};

/**
 * Hook to fetch manga's characters by ID
 * @param {number} id - The ID of the manga
 * @returns {UseQueryResult<GetMangaCharactersResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaCharacters}
 */
export const useGetMangaCharacters = (
  id: number
): UseQueryResult<GetMangaCharactersResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id, "characters"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaCharactersResponse>(
        `manga/${id}/characters`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch manga's news by ID
 * @param {number} id - The ID of the manga
 * @returns {UseQueryResult<GetMangaNewsResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaNews}
 */
export const useGetMangaNews = (
  id: number
): UseQueryResult<GetMangaNewsResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id, "news"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaNewsResponse>(
        `manga/${id}/news`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch manga's forum topics by ID
 * @param {number} id - The ID of the manga
 * @returns {UseQueryResult<GetMangaTopicsResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaTopics}
 */
export const useGetMangaTopics = (
  id: number
): UseQueryResult<GetMangaTopicsResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id, "forum"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaTopicsResponse>(
        `manga/${id}/forum`
      );
      return data;
    },
  });
};

/**
 * Hook to search for manga
 * @param {GetMangaSearchQueryParameters} params - Search parameters
 * @returns {UseQueryResult<GetMangaSearchResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/manga/operation/getMangaSearch}
 */
export const useGetMangaSearch = (
  params: GetMangaSearchQueryParameters
): UseQueryResult<GetMangaSearchResponse, Error> => {
  return useQuery({
    queryKey: ["manga", "search", params],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaSearchResponse>("manga", {
        params,
      });
      return data;
    },
  });
};
