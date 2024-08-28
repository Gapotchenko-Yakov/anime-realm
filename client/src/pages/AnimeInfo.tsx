import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../lib/tanstack-query/useAnimeQueries";
import { ErrorIndicator, Spinner } from "../components";

const AnimeInfo = () => {
  const { animeId = "1" } = useParams<{ animeId: string }>();
  const { palette } = useTheme();

  const {
    data: { data: animeData } = {},
    error,
    isLoading,
  } = useGetAnimeFullByIdQuery(parseInt(animeId));

  if (isLoading) return <Spinner />; // Показываем индикатор загрузки
  if (error) return <ErrorIndicator message="Ошибка загрузки данных" />;

  // Если данные загружены, отображаем информацию
  if (!animeData) return null;
  console.log("🚀 ~ AnimeInfo ~ animeData:", animeData);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: palette.background.alt }}>
            <CardMedia
              component="img"
              height="300"
              image={animeData.images.jpg.large_image_url}
              alt={animeData.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {animeData.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {animeData.title_english}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {animeData.synopsis}
              </Typography>
              <Box mt={2}>
                <Link color="primary" to={animeData.url}>
                  More Info
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box sx={{ bgcolor: palette.background.alt }}>
            <Typography variant="h6">Details</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">
              <strong>Type:</strong> {animeData.type}
            </Typography>
            <Typography variant="body1">
              <strong>Source:</strong> {animeData.source}
            </Typography>
            <Typography variant="body1">
              <strong>Episodes:</strong> {animeData.episodes}
            </Typography>
            <Typography variant="body1">
              <strong>Status:</strong> {animeData.status}
            </Typography>
            <Typography variant="body1">
              <strong>Duration:</strong> {animeData.duration}
            </Typography>
            <Typography variant="body1">
              <strong>Rating:</strong> {animeData.rating}
            </Typography>
            <Typography variant="body1">
              <strong>Score:</strong> {animeData.score} (Scored by{" "}
              {animeData.scored_by} members)
            </Typography>
            <Typography variant="body1">
              <strong>Rank:</strong> {animeData.rank}
            </Typography>
            <Typography variant="body1">
              <strong>Popularity:</strong> {animeData.popularity}
            </Typography>
            <Typography variant="body1">
              <strong>Members:</strong> {animeData.members}
            </Typography>
            <Typography variant="body1">
              <strong>Favorites:</strong> {animeData.favorites}
            </Typography>
            <Typography variant="body1">
              <strong>Broadcast:</strong> {animeData.broadcast.string}
            </Typography>
            <Typography variant="body1">
              <strong>Season:</strong> {animeData.season} {animeData.year}
            </Typography>
            <Typography variant="body1">
              <strong>Trailer:</strong>{" "}
              <Link
                to={animeData.trailer.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Trailer
              </Link>
            </Typography>

            <Box mt={3}>
              <Typography variant="h6">Producers</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.producers.map((producer) => (
                <Typography key={producer.mal_id} variant="body1">
                  <Link
                    to={producer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {producer.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Licensors</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.licensors.map((licensor) => (
                <Typography key={licensor.mal_id} variant="body1">
                  <Link
                    to={licensor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {licensor.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Studios</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.studios.map((studio) => (
                <Typography key={studio.mal_id} variant="body1">
                  <Link
                    to={studio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {studio.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Genres</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.genres.map((genre) => (
                <Typography key={genre.mal_id} variant="body1">
                  <Link
                    to={genre.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {genre.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6">External Links</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.external.map((external) => (
                <Typography key={external.url} variant="body1">
                  <Link
                    to={external.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {external.name}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box mt={3}>
              <Typography variant="h6">Streaming</Typography>
              <Divider sx={{ my: 2 }} />
              {animeData.streaming.map((streaming) => (
                <Typography key={streaming.url} variant="body1">
                  <Link
                    to={streaming.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {streaming.name}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnimeInfo;
