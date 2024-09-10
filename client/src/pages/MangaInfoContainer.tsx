import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetMangaFullById,
  useGetMangaCharacters,
  useGetMangaNews,
  useGetMangaTopics,
} from "../lib/tanstack-query/useMangaQueries";
import { withIndicatorsHOC } from "../lib/hoc/withIndicatorsHOC";
import MangaInfoPresentation from "./MangaInfoPresentation";

const MangaInfoContainer: React.FC = () => {
  const { id = "1" } = useParams<{ id: string }>();
  const mangaId = parseInt(id, 10);

  const {
    data: mangaFull,
    isLoading: isLoadingMangaFull,
    error: errorMangaFull,
  } = useGetMangaFullById(mangaId);
  const {
    data: characters,
    isLoading: isLoadingCharacters,
    error: errorMangaCharacters,
  } = useGetMangaCharacters(mangaId);
  const {
    data: news,
    isLoading: isLoadingNews,
    error: errorMangaNews,
  } = useGetMangaNews(mangaId);
  const {
    data: topics,
    isLoading: isLoadingTopics,
    error: errorMangaTopics,
  } = useGetMangaTopics(mangaId);

  const MangaInfoWithIndicators = withIndicatorsHOC(MangaInfoPresentation);

  return (
    <MangaInfoWithIndicators
      isLoading={
        isLoadingMangaFull ||
        isLoadingCharacters ||
        isLoadingNews ||
        isLoadingTopics
      }
      error={
        errorMangaFull ||
        errorMangaCharacters ||
        errorMangaNews ||
        errorMangaTopics
      }
      noData={!mangaFull || !characters || !news || !topics}
      mangaFull={mangaFull}
      characters={characters}
      news={news}
      topics={topics}
    />
  );
};

export default MangaInfoContainer;
