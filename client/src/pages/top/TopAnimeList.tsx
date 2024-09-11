import React from "react";
import { useGetTopAnimeQuery } from "../../lib/tanstack-query/useTopQueries";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import {
  ErrorIndicator,
  LoadingIndicator,
  NoDataIndicator,
} from "../../components/indicators";
import InfoIcon from "@mui/icons-material/Info";

const TopAnimeList: React.FC = () => {
  const { data, error, isLoading } = useGetTopAnimeQuery();

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
        Top Anime
      </Typography>
      <Grid container spacing={3}>
        {data.data.map((anime) => (
          <Grid item xs={12} sm={6} md={4} key={anime.mal_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{anime.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {anime.title_english || anime.title_japanese || "No Title"}
                </Typography>
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="body2" paragraph>
                  {anime.synopsis}
                </Typography>
                <Typography variant="body2">Rating: {anime.score}</Typography>
                <Typography variant="body2">
                  Popularity: {anime.popularity}
                </Typography>
                <Typography variant="body2">
                  Episodes: {anime.episodes}
                </Typography>
                <Typography variant="body2">
                  Aired from: {new Date(anime.aired.from).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Aired to: {new Date(anime.aired.to).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Duration: {anime.duration}
                </Typography>
                <Typography variant="body2">Status: {anime.status}</Typography>
                <Typography variant="body2">Year: {anime.year}</Typography>
                <IconButton
                  href={anime.trailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InfoIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopAnimeList;
