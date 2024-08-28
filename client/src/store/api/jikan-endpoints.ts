const id = null,
  episode = null;

const animeEndpoints = [
  { name: "getAnimeFullByld", path: `anime/${id}/full` },
  { name: "getAnimeByld", path: `anime/${id}` },
  { name: "getAnimeCharacters", path: `anime/${id}/characters` },
  { name: "getAnimeStaff", path: `anime/${id}/staff` },
  { name: "getAnimeEpisodes", path: `anime/${id}/episodes` },
  { name: "getAnimeEpisodeByld", path: `anime/${id}/episodes/${episode}]` },
  { name: "getAnimeNews", path: `anime/${id}/news` },
  { name: "getAnimeForum", path: `anime/${id}/forum` },
  { name: "getAnimeVideos", path: `anime/${id}/videos` },
  { name: "getAnimeVideosEpisodes", path: `anime/${id}/videos/episodes` },
  { name: "getAnimePictures", path: `anime/${id}/pictures` },
  { name: "getAnimeStatistics", path: `anime/${id}/statistics` },
  { name: "getAnimeMoreInfo", path: `anime/${id}/moreinfo` },
  { name: "getAnimeRecommendations", path: `anime/${id}/recommendations` },
  { name: "getAnimeUserUpdates", path: `anime/${id}/userupdates` },
  { name: "getAnimeReviews", path: `anime/${id}/reviews` },
  { name: "getAnimeRelations", path: `anime/${id}/relations` },
  { name: "getAnimeThemes", path: `anime/${id}/themes` },
  { name: "getAnimeExternal", path: `anime/${id}/external` },
  { name: "getAnimeStreaming", path: `anime/${id}/streaming` },
  { name: "getAnimeSearch", path: `anime` },
];

const charactersEndpoints = [
  { name: "getCharacterFullByld", path: `characters/${id}/full` },
  { name: "getCharacterByld", path: `characters/${id}` },
  { name: "getCharacterAnime", path: `characters/${id}/anime` },
  { name: "getCharacterManga", path: `characters/${id}/manga` },
  { name: "getCharacterVoiceActors", path: `characters/${id}/voices` },
  { name: "getCharacterPictures", path: `characters/${id}/pictures` },
  { name: "getCharactersSearch", path: `characters` },
];

export {};
