import React from "react";
import { useParams } from "react-router-dom";
import {
  useMangaFullById,
  useMangaCharacters,
  useMangaNews,
  useMangaTopics,
} from "../lib/tanstack-query/useMangaQueries"; // Adjust the path to your hooks file

const MangaPage: React.FC = () => {
  const { id = "1" } = useParams<{ id: string }>();
  const mangaId = parseInt(id, 10);

  const { data: mangaFull, isLoading: isLoadingMangaFull } =
    useMangaFullById(mangaId);
  const { data: characters, isLoading: isLoadingCharacters } =
    useMangaCharacters(mangaId);
  const { data: news, isLoading: isLoadingNews } = useMangaNews(mangaId);
  const { data: topics, isLoading: isLoadingTopics } = useMangaTopics(mangaId);

  if (
    isLoadingMangaFull ||
    isLoadingCharacters ||
    isLoadingNews ||
    isLoadingTopics
  ) {
    return <div>Loading...</div>;
  }

  if (!mangaFull || !characters || !news || !topics) {
    return <div>Manga not found</div>;
  }

  return (
    <div>
      <h1>{mangaFull.data.title}</h1>
      <img
        src={mangaFull.data.images.jpg.image_url}
        alt={mangaFull.data.title}
      />
      <p>{mangaFull.data.synopsis}</p>
      <p>Published from: {mangaFull.data.published.from}</p>
      <p>Published to: {mangaFull.data.published.to}</p>
      <p>Chapters: {mangaFull.data.chapters}</p>
      <p>Volumes: {mangaFull.data.volumes}</p>
      <p>Score: {mangaFull.data.score}</p>
      <p>Rank: {mangaFull.data.rank}</p>

      <section>
        <h2>Characters</h2>
        {characters?.data.map(({ character, role }) => (
          <div key={character.mal_id}>
            <h3>{character.name}</h3>
            <img src={character.images.jpg.image_url} alt={character.name} />
            <p>Role: {role}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>News</h2>
        {news?.data.map((newsItem) => (
          <div key={newsItem.mal_id}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.excerpt}</p>
            <a href={newsItem.url}>Read more</a>
          </div>
        ))}
      </section>

      <section>
        <h2>Forum Topics</h2>
        {topics?.data.map((topic) => (
          <div key={topic.mal_id}>
            <h3>{topic.title}</h3>
            <p>
              By: <a href={topic.author_url}>{topic.author_username}</a>
            </p>
            <p>Comments: {topic.comments}</p>
            <a href={topic.url}>Join discussion</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MangaPage;
