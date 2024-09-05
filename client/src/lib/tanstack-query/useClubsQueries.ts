import {
  GetClubsSearchResponse,
  GetClubsByIdResponse,
  GetClubMembersResponse,
  GetClubStaffResponse,
  GetClubRelationsResponse,
} from "../../types/api/clubs";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

/**
 * Fetches club data by ID.
 * @param id - The ID of the club to fetch.
 * @returns The club data.
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
 * @param page - The page number to fetch.
 * @param limit - The number of clubs per page.
 * @param q - The search query.
 * @returns The list of clubs.
 */
export const useGetClubsSearch = (
  page?: number,
  limit?: number,
  q?: string
) => {
  return useQuery<GetClubsSearchResponse>({
    queryKey: ["clubs", { page, limit, q }],
    queryFn: () =>
      apiClient
        .get("/clubs", { params: { page, limit, q } })
        .then((res) => res.data),
  });
};
