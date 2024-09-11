import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  // Link,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  useTheme,
  Rating,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useParams } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../lib/tanstack-query/useAnimeQueries";
import { ErrorIndicator, LoadingIndicator } from "../components";

const AnimeInfo = () => {
  const { id = "1" } = useParams<{ id: string }>();
  const { palette } = useTheme();

  const {
    data: { data: animeData } = {},
    error,
    isLoading,
  } = useGetAnimeFullByIdQuery(parseInt(id));

  if (isLoading) return <LoadingIndicator />; // Показываем индикатор загрузки
  if (error) return <ErrorIndicator message="Ошибка загрузки данных" />;

  // Если данные загружены, отображаем информацию
  if (!animeData) return null;
  console.log({ animeData });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ bgcolor: palette.background.alt }}>
          <CardMedia
            component="img"
            height="300"
            image={animeData.images.jpg.large_image_url}
            alt={animeData.title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={palette.primary.main}
            >
              {animeData.title}
            </Typography>
            <Typography variant="subtitle1" color={palette.secondary.main}>
              {animeData.title_english}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {animeData.synopsis}
            </Typography>
            <Box mt={2} textAlign="center">
              <Link color="primary" to={animeData.url}>
                More Info
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Paper
          sx={{
            p: 3,
            bgcolor: palette.background.alt,
            color: palette.secondary[200],
          }}
        >
          <Typography variant="h6" sx={{ color: palette.secondary.main }}>
            Details
          </Typography>
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
            <Tooltip
              title={`Scored by ${animeData.scored_by} members`}
              placement="right-start"
            >
              <Rating value={animeData.score} max={10} />
            </Tooltip>
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

          {animeData.producers.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="producers-content"
                id="producers-header"
              >
                <Typography>Producers</Typography>
              </AccordionSummary>
              <AccordionDetails id="producers-content">
                {animeData.producers.map((producer) => (
                  <Typography key={producer.mal_id}>
                    <Link
                      to={producer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {producer.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {animeData.licensors.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="licensors-content"
                id="licensors-header"
              >
                <Typography>Licensors</Typography>
              </AccordionSummary>
              <AccordionDetails id="licensors-content">
                {animeData.licensors.map((licensor) => (
                  <Typography key={licensor.mal_id}>
                    <Link
                      to={licensor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {licensor.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {animeData.studios.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="studios-content"
                id="studios-header"
              >
                <Typography>Studios</Typography>
              </AccordionSummary>
              <AccordionDetails id="studios-content">
                {animeData.studios.map((studio) => (
                  <Typography key={studio.mal_id}>
                    <Link
                      to={studio.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {studio.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {animeData.genres.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="genres-content"
                id="genres-header"
              >
                <Typography>Genres</Typography>
              </AccordionSummary>
              <AccordionDetails id="genres-content">
                {animeData.genres.map((genre) => (
                  <Typography key={genre.mal_id}>
                    <Link
                      to={genre.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {genre.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {animeData.external.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="external-content"
                id="external-header"
              >
                <Typography>External Links</Typography>
              </AccordionSummary>
              <AccordionDetails id="external-content">
                {animeData.external.map((external) => (
                  <Typography key={external.url}>
                    <Link
                      to={external.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {external.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}

          {animeData.streaming.length > 0 && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="streaming-content"
                id="streaming-header"
              >
                <Typography>Streaming</Typography>
              </AccordionSummary>
              <AccordionDetails id="streaming-content">
                {animeData.streaming.map((streaming) => (
                  <Typography key={streaming.url}>
                    <Link
                      to={streaming.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {streaming.name}
                    </Link>
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AnimeInfo;
