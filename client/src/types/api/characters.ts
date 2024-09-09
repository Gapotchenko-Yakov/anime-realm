// 1. getCharacterFullById
// https://api.jikan.moe/v4/characters/{id}/full
export type CharacterFullResponse = {
  data: {
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
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
    anime: {
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
    }[];
    manga: {
      role: string;
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
      language: string;
      person: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
          };
        };
        name: string;
      };
    }[];
  };
};

// 2. getCharacterById
// https://api.jikan.moe/v4/characters/{id}
export type CharacterResponse = {
  data: {
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
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
  };
};

// 3. getCharacterAnime
// https://api.jikan.moe/v4/characters/{id}/anime
export type CharacterAnimeResponse = {
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
  }[];
};

// 4. getCharacterManga
// https://api.jikan.moe/v4/characters/{id}/manga
export type CharacterMangaResponse = {
  data: {
    role: string;
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
};

// 5. getCharacterVoiceActors
// https://api.jikan.moe/v4/characters/{id}/voices
export type CharacterVoiceActorsResponse = {
  data: {
    language: string;
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
  }[];
};

// 6. getCharacterPictures
// https://api.jikan.moe/v4/characters/{id}/pictures
export type CharacterPicturesResponse = {
  data: {
    image_url: string;
    large_image_url: string;
  }[];
};

// 7. getCharactersSearch
// https://api.jikan.moe/v4/characters
export type CharactersSearchResponse = {
  data: {
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
    name_kanji: string;
    nicknames: string[];
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
};
