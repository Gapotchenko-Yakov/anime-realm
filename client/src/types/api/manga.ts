export interface ImageUrls {
  image_url: string;
  small_image_url: string;
  large_image_url?: string;
}

export interface Title {
  type: string;
  title: string;
}

export interface DateProp {
  day: number;
  month: number;
  year: number;
}

export interface PublishedDate {
  from: DateProp;
  to: DateProp;
  string: string;
}

export interface Manga {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageUrls;
    webp: ImageUrls;
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: {
    from: string;
    to: string;
    prop: PublishedDate;
  };
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
  relations?: Relation[];
  external?: ExternalLink[];
}

export interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Serialization {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Relation {
  relation: string;
  entry: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

export interface ExternalLink {
  name: string;
  url: string;
}

// Response types
export interface GetMangaFullByIdResponse {
  data: Manga;
}

export interface GetMangaByIdResponse {
  data: Manga;
}

export interface GetMangaCharactersResponse {
  data: {
    character: MangaCharacter;
    role: string;
  }[];
}

export interface MangaCharacter {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
}

export interface MangaNews {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  comments: number;
  excerpt: string; // TODO : check typo
}

export interface GetMangaNewsResponse {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
  data: MangaNews[];
}

export interface MangaTopic {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  comments: number;
  last_comment: {
    url: string;
    author_username: string;
    author_url: string;
    date: string;
  };
}

export interface GetMangaTopicsResponse {
  data: MangaTopic[];
}

export interface GetMangaSearchResponse {
  data: Manga[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export interface GetMangaSearchQueryParameters {
  unapproved?: boolean;
  page?: number;
  limit?: number;
  q?: string;
  type?:
    | "manga"
    | "novel"
    | "lightnovel"
    | "oneshot"
    | "doujin"
    | "manhwa"
    | "manhua";
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "start_date"
    | "end_date"
    | "chapters"
    | "volumes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
  letter?: string;
  magazines?: string;
  start_date?: string;
  end_date?: string;
}
