import {
  GetClubsSearchResponse,
  GetClubsByIdResponse,
  GetClubMembersResponse,
  GetClubStaffResponse,
  GetClubRelationsResponse,
  GetClubsSearchQueryParameters,
} from "../../types/api/clubs";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

/**
 * Fetches club data by ID.
 * @param id - The ID of the club to fetch.
 * @returns The club data.
 * @see {@link https://docs.api.jikan.moe/#tag/clubs/operation/getClubById}
 */
export const useGetClubById = (id: number) => {
  return useQuery<GetClubsByIdResponse>({
    queryKey: ["club", id],
    queryFn: () => apiClient.get(`/clubs/${id}`).then((res) => res.data),
  });
};

/**
 * Fetches members of a club by ID.
 * @param id - The ID of the club to fetch members for.
 * @returns The members of the club.
 * @see {@link https://docs.api.jikan.moe/#tag/clubs/operation/getClubMembers}
 */
export const useGetClubMembers = (id: number) => {
  return useQuery<GetClubMembersResponse>({
    queryKey: ["clubMembers", id],
    queryFn: () =>
      apiClient.get(`/clubs/${id}/members`).then((res) => res.data),
  });
};

/**
 * Fetches staff of a club by ID.
 * @param id - The ID of the club to fetch staff for.
 * @returns The staff of the club.
 * @see {@link https://docs.api.jikan.moe/#tag/clubs/operation/getClubStaff}
 */
export const useGetClubStaff = (id: number) => {
  return useQuery<GetClubStaffResponse>({
    queryKey: ["clubStaff", id],
    queryFn: () => apiClient.get(`/clubs/${id}/staff`).then((res) => res.data),
  });
};

/**
 * Fetches relations of a club by ID.
 * @param id - The ID of the club to fetch relations for.
 * @returns The relations of the club.
 * @see {@link https://docs.api.jikan.moe/#tag/clubs/operation/getClubRelations}
 */
export const useGetClubRelations = (id: number) => {
  return useQuery<GetClubRelationsResponse>({
    queryKey: ["clubRelations", id],
    queryFn: () =>
      apiClient.get(`/clubs/${id}/relations`).then((res) => res.data),
  });
};

/**
 * Fetches a list of clubs.
 * @param {GetClubsSearchQueryParameters} args - Parameters for searching clubs.
 * @returns The list of clubs.
 * @see {@link https://docs.api.jikan.moe/#tag/clubs/operation/getClubsSearch}
 */
export const useGetClubsSearch = (args: GetClubsSearchQueryParameters) => {
  return useQuery<GetClubsSearchResponse>({
    queryKey: ["clubs", args],
    queryFn: () =>
      apiClient.get("/clubs", { params: args }).then((res) => res.data),
  });
};
