// Интерфейсы для getClubsSearch
interface ImageUrls {
  jpg: {
    image_url: string;
  };
}

interface ClubSearchDataItem {
  mal_id: number;
  name: string;
  url: string;
  images: ImageUrls;
  members: number;
  category: string;
  created: string;
  access: string;
}

interface ClubSearchPagination {
  last_visible_page: number;
  has_next_page: boolean;
}

interface GetClubsSearchResponse {
  data: ClubSearchDataItem[];
  pagination: ClubSearchPagination;
}

// Интерфейсы для getClubsById
interface ClubByIdDataItem {
  mal_id: number;
  name: string;
  url: string;
  images: ImageUrls;
  members: number;
  category: string;
  created: string;
  access: string;
}

interface GetClubsByIdResponse {
  data: ClubByIdDataItem;
}

// Интерфейсы для getClubMembers
interface ClubMemberImageUrls {
  jpg: {
    image_url: string;
  };
  webp?: {
    image_url: string;
  };
}

interface ClubMember {
  username: string;
  url: string;
  images: ClubMemberImageUrls;
}

interface ClubMembersPagination {
  last_visible_page: number;
  has_next_page: boolean;
}

interface GetClubMembersResponse {
  pagination: ClubMembersPagination;
  data: ClubMember[];
}

// Интерфейсы для getClubStaff
interface ClubStaffMember {
  url: string;
  username: string;
}

interface GetClubStaffResponse {
  data: ClubStaffMember[];
}

// Интерфейсы для getClubRelations
interface ClubRelationItem {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface GetClubRelationsResponse {
  data: {
    anime: ClubRelationItem[];
    manga: ClubRelationItem[];
    characters: ClubRelationItem[];
  };
}

export type {
  GetClubMembersResponse,
  GetClubRelationsResponse,
  GetClubStaffResponse,
  GetClubsByIdResponse,
  GetClubsSearchResponse,
};
