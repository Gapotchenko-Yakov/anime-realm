import React from "react";
import { useGetTopMangaQuery } from "../../lib/tanstack-query/useTopQueries";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import {
  ErrorIndicator,
  LoadingIndicator,
  NoDataIndicator,
} from "../../components/indicators";

const TopMangaList: React.FC = () => {
  const { data, error, isLoading } = useGetTopMangaQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message={error.message} />;
  }

  if (!data || !data.data.length) {
    return <NoDataIndicator />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top Manga
      </Typography>
      <Grid container spacing={3}>
        {data.data.map((manga) => (
          <Grid item xs={12} sm={6} md={4} key={manga.mal_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{manga.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {manga.title_english || manga.title_japanese || "No Title"}
                </Typography>
                <img
                  src={manga.images.jpg.image_url}
                  alt={manga.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="body2" paragraph>
                  {manga.synopsis}
                </Typography>
                <Typography variant="body2">Score: {manga.score}</Typography>
                <Typography variant="body2">
                  Popularity: {manga.popularity}
                </Typography>
                <Typography variant="body2">
                  Chapters: {manga.chapters}
                </Typography>
                <Typography variant="body2">
                  Published from:
                  {new Date(manga.published.from).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Published to:
                  {new Date(manga.published.to).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">Status: {manga.status}</Typography>
                <Typography variant="body2">
                  Volumes: {manga.volumes}
                </Typography>
                <Typography variant="body2">
                  Authors:{" "}
                  {manga.authors.map((author) => author.name).join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopMangaList;
