import { useQuery, UseQueryResult } from "@tanstack/react-query";
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
  GetAnimeListOptions,
} from "../../types/api/jikan";

import apiClient from "../services/apiClient";

/**
 * Хук для получения полной информации об аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult<AnimeFull, Error>} Результат запроса, содержащий данные о полном аниме.
 */
export const useGetAnimeFullByIdQuery = (
  id: number
): UseQueryResult<AnimeFull, Error> => {
  return useQuery<AnimeFull>({
    queryKey: ["anime", id, "full"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeFull>(`anime/${id}/full`);
      return data;
    },
  });
};

/**
 * Хук для получения персонажей аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о персонажах аниме.
 */
export const useGetAnimeCharactersQuery = (id: number) => {
  return useQuery<AnimeCharacters>({
    queryKey: ["anime", id, "characters"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeCharacters>(
        `anime/${id}/characters`
      );
      return data;
    },
  });
};

/**
 * Хук для получения новостей аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о новостях аниме.
 */
export const useGetAnimeNewsQuery = (id: number) => {
  return useQuery<AnimeNews>({
    queryKey: ["anime", id, "news"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeNews>(`anime/${id}/news`);
      return data;
    },
  });
};

/**
 * Хук для получения эпизодов аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о эпизодах аниме.
 */
export const useGetAnimeEpisodesQuery = (id: number) => {
  return useQuery<AnimeEpisodes>({
    queryKey: ["anime", id, "episodes"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeEpisodes>(
        `anime/${id}/episodes`
      );
      return data;
    },
  });
};

/**
 * Хук для получения изображений аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о изображениях аниме.
 */
export const useGetAnimePicturesQuery = (id: number) => {
  return useQuery<AnimePictures>({
    queryKey: ["anime", id, "pictures"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimePictures>(
        `anime/${id}/pictures`
      );
      return data;
    },
  });
};

/**
 * Хук для получения рекомендаций по аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о рекомендациях по аниме.
 */
export const useGetAnimeRecommendationsQuery = (id: number) => {
  return useQuery<AnimeRecommendations>({
    queryKey: ["anime", id, "recommendations"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeRecommendations>(
        `anime/${id}/recommendations`
      );
      return data;
    },
  });
};

/**
 * Хук для получения статистики аниме по ID.
 * @param {number} id - ID аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о статистике аниме.
 */
export const useGetAnimeStatisticsQuery = (id: number) => {
  return useQuery<AnimeStatistics>({
    queryKey: ["anime", id, "statistics"], // Ключ запроса
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeStatistics>(
        `anime/${id}/statistics`
      );
      return data;
    },
  });
};

/**
 * Хук для получения списка аниме по аргументам запроса.
 * @param {GetAnimeListArg} args - Параметры для запроса списка аниме.
 * @param {GetAnimeListOptions} options - Опции для запроса списка аниме.
 * @returns {UseQueryResult} Результат запроса, содержащий данные о списке аниме.
 */
export const useGetAnimeListQuery = (
  args: GetAnimeListArg,
  options: GetAnimeListOptions = { enabled: true }
) => {
  return useQuery<AnimeList>({
    queryKey: ["anime", args.q, args.limit, args.order_by, args.sort], // Ключ запроса с параметрами
    queryFn: async () => {
      const { data } = await apiClient.get<AnimeList>("anime", {
        params: args,
      });
      return data;
    },
    enabled: !!options.enabled, // Запрашиваем только если есть query
  });
};
