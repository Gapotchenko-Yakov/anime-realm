/**
 * getMangaFullById
 * https://api.jikan.moe/v4/manga/{id}/full
 *
 * getMangaById
 * https://api.jikan.moe/v4/manga/{id}
 *
 * getMangaCharacters
 * https://api.jikan.moe/v4/manga/{id}/characters
 *
 * getMangaNews
 * https://api.jikan.moe/v4/manga/{id}/news
 *
 * getMangaTopics
 * https://api.jikan.moe/v4/manga/{id}/forum
 *
 * getMangaSearch
 * https://api.jikan.moe/v4/manga
 */

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

export const useMangaFullById = (
  id: number,
  options?: any
): UseQueryResult<GetMangaFullByIdResponse, Error> => {
  return useQuery({
    queryKey: ["manga", id, "full"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaFullByIdResponse>(
        `manga/${id}/full`
      );
      return data;
    },
    ...options,
  });
};

export const useMangaById = (id: number, options?: any) => {
  return useQuery({
    queryKey: ["manga", id],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaByIdResponse>(`manga/${id}`);
      return data;
    },
    ...options,
  });
};

export const useMangaCharacters = (id: number, options?: any) => {
  return useQuery({
    queryKey: ["manga", id, "characters"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaCharactersResponse>(
        `manga/${id}/characters`
      );
      return data;
    },
    ...options,
  });
};

export const useMangaNews = (id: number, options?: any) => {
  return useQuery({
    queryKey: ["manga", id, "news"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaNewsResponse>(
        `manga/${id}/news`
      );
      return data;
    },
    ...options,
  });
};

export const useMangaTopics = (id: number, options?: any) => {
  return useQuery({
    queryKey: ["manga", id, "forum"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaTopicsResponse>(
        `manga/${id}/forum`
      );
      return data;
    },
    ...options,
  });
};

export const useMangaSearch = (
  params: GetMangaSearchQueryParameters,
  options?: any
) => {
  return useQuery({
    queryKey: ["manga", "search", params],
    queryFn: async () => {
      const { data } = await apiClient.get<GetMangaSearchResponse>("manga", {
        params,
      });
      return data;
    },
    ...options,
  });
};
