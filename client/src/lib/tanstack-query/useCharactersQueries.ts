import { useQuery, UseQueryResult } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import {
  CharacterFullResponse,
  CharacterAnimeResponse,
  CharacterMangaResponse,
  CharacterPicturesResponse,
  CharacterResponse,
  CharacterVoiceActorsResponse,
  CharactersSearchResponse,
} from "../../types/api/characters";

/**
 * Hook to fetch character's full details by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterFullResponse, Error>}
 */
export const useCharacterFullById = (
  id: number
): UseQueryResult<CharacterFullResponse, Error> => {
  return useQuery({
    queryKey: ["character", "full", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterFullResponse>(
        `characters/${id}/full`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch basic character information by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterResponse, Error>}
 */
export const useCharacterById = (
  id: number
): UseQueryResult<CharacterResponse, Error> => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterResponse>(
        `characters/${id}`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch character's anime by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterAnimeResponse, Error>}
 */
export const useCharacterAnime = (
  id: number
): UseQueryResult<CharacterAnimeResponse, Error> => {
  return useQuery({
    queryKey: ["character", "anime", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterAnimeResponse>(
        `characters/${id}/anime`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch character's manga by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterMangaResponse, Error>}
 */
export const useCharacterManga = (
  id: number
): UseQueryResult<CharacterMangaResponse, Error> => {
  return useQuery({
    queryKey: ["character", "manga", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterMangaResponse>(
        `characters/${id}/manga`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch character's voice actors by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterVoiceActorsResponse, Error>}
 */
export const useCharacterVoiceActors = (
  id: number
): UseQueryResult<CharacterVoiceActorsResponse, Error> => {
  return useQuery({
    queryKey: ["character", "voices", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterVoiceActorsResponse>(
        `characters/${id}/voices`
      );
      return data;
    },
  });
};

/**
 * Hook to fetch character's pictures by ID
 * @param {number} id - The ID of the character
 * @returns {UseQueryResult<CharacterPicturesResponse, Error>}
 */
export const useCharacterPictures = (
  id: number
): UseQueryResult<CharacterPicturesResponse, Error> => {
  return useQuery({
    queryKey: ["character", "pictures", id],
    queryFn: async () => {
      const { data } = await apiClient.get<CharacterPicturesResponse>(
        `characters/${id}/pictures`
      );
      return data;
    },
  });
};

/**
 * Hook to search for characters
 * @param {object} params - Search parameters
 * @returns {UseQueryResult<CharactersSearchResponse, Error>}
 */
export const useCharactersSearch = (
  params: any
): UseQueryResult<CharactersSearchResponse, Error> => {
  return useQuery({
    queryKey: ["characters", "search", params],
    queryFn: async () => {
      const { data } = await apiClient.get<CharactersSearchResponse>(
        "characters",
        {
          params,
        }
      );
      return data;
    },
  });
};
