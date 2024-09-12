export interface GetPersonFullByIdResponse {
  data: {
    mal_id: number;
    url: string;
    website_url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
    given_name: string;
    family_name: string;
    alternate_names: string[];
    birthday: string;
    favorites: number;
    about: string;
    anime: {
      position: string;
      anime: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
          webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      };
    }[];
    manga: {
      position: string;
      manga: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
          webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      };
    }[];
    voices: {
      role: string;
      anime: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
          webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      };
      character: {
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
      };
    }[];
  };
}

export interface GetPersonByIdResponse {
  data: {
    mal_id: number;
    url: string;
    website_url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
    given_name: string;
    family_name: string;
    alternate_names: string[];
    birthday: string;
    favorites: number;
    about: string;
  };
}

export interface GetPersonAnimeResponse {
  data: {
    position: string;
    anime: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title: string;
    };
  }[];
}

export interface GetPersonVoicesResponse {
  data: {
    role: string;
    anime: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title: string;
    };
    character: {
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
    };
  }[];
}

export interface GetPersonMangaResponse {
  data: {
    position: string;
    manga: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title: string;
    };
  }[];
}

export interface GetPersonPicturesResponse {
  data: {
    jpg: {
      image_url: string;
    };
  }[];
}

export interface GetPeopleSearchResponse {
  data: {
    mal_id: number;
    url: string;
    website_url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
    given_name: string;
    family_name: string;
    alternate_names: string[];
    birthday: string;
    favorites: number;
    about: string;
  }[];
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

export interface GetPeopleSearchQueryParameters {
  page: number;
  limit: number;
  q: string;
  order_by: "mal_id" | "name" | "birthday" | "favorites";
  sort: "desc" | "asc";
  letter: string;
}
