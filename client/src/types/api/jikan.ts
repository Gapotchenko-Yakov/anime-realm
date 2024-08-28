export type AnimeFull = {
  data: {
    mal_id: number;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    trailer: {
      youtube_id: "string";
      url: "string";
      embed_url: "string";
    };
    approved: true;
    titles: [
      {
        type: "string";
        title: "string";
      }
    ];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: number;
    status: "Finished Airing";
    airing: true;
    aired: {
      from: "string";
      to: "string";
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
        string: "string";
      };
    };
    duration: "string";
    rating: "G - All Ages";
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: number;
    broadcast: {
      day: "string";
      time: "string";
      timezone: "string";
      string: "string";
    };
    producers: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    licensors: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    studios: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    explicit_genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    themes: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    demographics: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    relations: [
      {
        relation: "string";
        entry: [
          {
            mal_id: number;
            type: "string";
            name: "string";
            url: "string";
          }
        ];
      }
    ];
    theme: {
      openings: ["string"];
      endings: ["string"];
    };
    external: [
      {
        name: "string";
        url: "string";
      }
    ];
    streaming: [
      {
        name: "string";
        url: "string";
      }
    ];
  };
};

export type Anime = {
  data: {
    mal_id: number;
    url: "string";
    images: {
      jpg: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
      webp: {
        image_url: "string";
        small_image_url: "string";
        large_image_url: "string";
      };
    };
    trailer: {
      youtube_id: "string";
      url: "string";
      embed_url: "string";
    };
    approved: true;
    titles: [
      {
        type: "string";
        title: "string";
      }
    ];
    title: "string";
    title_english: "string";
    title_japanese: "string";
    title_synonyms: ["string"];
    type: "TV";
    source: "string";
    episodes: number;
    status: "Finished Airing";
    airing: true;
    aired: {
      from: "string";
      to: "string";
      prop: {
        from: {
          day: number;
          month: number;
          year: number;
        };
        to: {
          day: number;
          month: number;
          year: number;
        };
        string: "string";
      };
    };
    duration: "string";
    rating: "G - All Ages";
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: "string";
    background: "string";
    season: "summer";
    year: number;
    broadcast: {
      day: "string";
      time: "string";
      timezone: "string";
      string: "string";
    };
    producers: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    licensors: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    studios: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    explicit_genres: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    themes: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
    demographics: [
      {
        mal_id: number;
        type: "string";
        name: "string";
        url: "string";
      }
    ];
  };
};

export type AnimeCharacters = {
  data: [
    {
      character: {
        mal_id: number;
        url: "string";
        images: {
          jpg: {
            image_url: "string";
            small_image_url: "string";
          };
          webp: {
            image_url: "string";
            small_image_url: "string";
          };
        };
        name: "string";
      };
      role: "string";
      voice_actors: [
        {
          person: {
            mal_id: number;
            url: "string";
            images: {
              jpg: {
                image_url: "string";
              };
            };
            name: "string";
          };
          language: "string";
        }
      ];
    }
  ];
};

export type AnimeNews = {
  pagination: {
    last_visible_page: number;
    has_next_page: true;
  };
  data: [
    {
      mal_id: number;
      url: "string";
      title: "string";
      date: "string";
      author_username: "string";
      author_url: "string";
      forum_url: "string";
      images: {
        jpg: {
          image_url: "string";
        };
      };
      comments: number;
      excerpt: "string";
    }
  ];
};

export type AnimeEpisodes = {
  data: [
    {
      mal_id: number;
      url: "string";
      title: "string";
      title_japanese: "string";
      title_romanji: "string";
      duration: number;
      aired: "string";
      filler: true;
      recap: true;
      forum_url: "string";
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: true;
  };
};

export type AnimePictures = {
  data: [
    {
      images: {
        jpg: {
          image_url: "string";
        };
      };
    }
  ];
};

export type AnimeRecommendations = {
  data: [
    {
      entry: {
        mal_id: number;
        url: "string";
        images: {
          jpg: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
          };
          webp: {
            image_url: "string";
            small_image_url: "string";
            large_image_url: "string";
          };
        };
        title: "string";
      };
    }
  ];
};

export type AnimeStatistics = {
  data: {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total: number;
    scores: [
      {
        score: number;
        votes: number;
        percentage: number;
      }
    ];
  };
};

export type AnimeList = {
  data: [
    {
      mal_id: number;
      url: "string";
      images: {
        jpg: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
        webp: {
          image_url: "string";
          small_image_url: "string";
          large_image_url: "string";
        };
      };
      trailer: {
        youtube_id: "string";
        url: "string";
        embed_url: "string";
      };
      approved: true;
      titles: [
        {
          type: "string";
          title: "string";
        }
      ];
      title: "string";
      title_english: "string";
      title_japanese: "string";
      title_synonyms: ["string"];
      type: "TV";
      source: "string";
      episodes: number;
      status: "Finished Airing";
      airing: true;
      aired: {
        from: "string";
        to: "string";
        prop: {
          from: {
            day: number;
            month: number;
            year: number;
          };
          to: {
            day: number;
            month: number;
            year: number;
          };
          string: "string";
        };
      };
      duration: "string";
      rating: "G - All Ages";
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: "string";
      background: "string";
      season: "summer";
      year: number;
      broadcast: {
        day: "string";
        time: "string";
        timezone: "string";
        string: "string";
      };
      producers: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      licensors: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      studios: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      explicit_genres: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      themes: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
      demographics: [
        {
          mal_id: number;
          type: "string";
          name: "string";
          url: "string";
        }
      ];
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: true;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
};

export type GetAnimeListArg = {
  page?: number;
  limit?: number;
  q?: string;
  score?: number;
  rating?: string;
  sfw?: boolean;
  order_by?: string;
  sort?: string;
};
