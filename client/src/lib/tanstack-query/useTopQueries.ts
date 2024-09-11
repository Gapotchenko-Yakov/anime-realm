import { UseQueryResult, useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import {
  GetTopAnimeResponse,
  GetTopCharactersResponse,
  GetTopMangaResponse,
  GetTopPeopleResponse,
  GetTopReviewsResponse,
} from "../../types/api/top";

/**
 * Hook to fetch top anime
 * @returns {UseQueryResult<GetTopAnimeResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/top/operation/getTopAnime}
 */
export const useGetTopAnimeQuery = (): UseQueryResult<
  GetTopAnimeResponse,
  Error
> => {
  return useQuery({
    queryKey: ["top", "anime"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetTopAnimeResponse>("top/anime");
      return data;
    },
  });
};

/**
 * Hook to fetch top manga
 * @returns {UseQueryResult<GetTopMangaResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/top/operation/getTopManga}
 */
export const useGetTopMangaQuery = (): UseQueryResult<
  GetTopMangaResponse,
  Error
> => {
  return useQuery({
    queryKey: ["top", "manga"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetTopMangaResponse>("top/manga");
      return data;
    },
  });
};

/**
 * Hook to fetch top people
 * @returns {UseQueryResult<GetTopPeopleResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/top/operation/getTopPeople}
 */
export const useGetTopPeopleQuery = (): UseQueryResult<
  GetTopPeopleResponse,
  Error
> => {
  return useQuery({
    queryKey: ["top", "people"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetTopPeopleResponse>("top/people");
      return data;
    },
  });
};

/**
 * Hook to fetch top characters
 * @returns {UseQueryResult<GetTopCharactersResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/top/operation/getTopCharacters}
 */
export const useGetTopCharactersQuery = (): UseQueryResult<
  GetTopCharactersResponse,
  Error
> => {
  return useQuery({
    queryKey: ["top", "characters"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetTopCharactersResponse>(
        "top/characters"
      );
      return data;
    },
  });
};

/**
 * Hook to fetch top reviews
 * @returns {UseQueryResult<GetTopReviewsResponse, Error>}
 * @see {@link https://docs.api.jikan.moe/#tag/top/operation/getTopReviews}
 */
export const useGetTopReviewsQuery = (): UseQueryResult<
  GetTopReviewsResponse,
  Error
> => {
  return useQuery({
    queryKey: ["top", "reviews"],
    queryFn: async () => {
      const { data } = await apiClient.get<GetTopReviewsResponse>(
        "top/reviews"
      );
      return data;
    },
  });
};
