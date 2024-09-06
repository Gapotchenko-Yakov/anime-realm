import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Link as MuiLink,
  Divider,
  Rating,
  Container,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  GetMangaFullByIdResponse,
  GetMangaCharactersResponse,
  GetMangaNewsResponse,
  GetMangaTopicsResponse,
} from "../types/api/manga";
import NoDataIndicator from "../components/indicators/NoDataIndicator";

interface MangaInfoPresentationProps {
  isLoading: boolean;
  error: Error | null;
  noData?: boolean;
  mangaFull?: GetMangaFullByIdResponse;
  characters?: GetMangaCharactersResponse;
  news?: GetMangaNewsResponse;
  topics?: GetMangaTopicsResponse;
}

const MangaInfoPresentation: React.FC<MangaInfoPresentationProps> = ({
  mangaFull,
  characters,
  news,
  topics,
}) => {
  if (!mangaFull || !characters || !news || !topics) {
    return <NoDataIndicator>No Data Available</NoDataIndicator>;
  }

  const { palette } = useTheme();

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* Main content */}
          <Box sx={{ bgcolor: palette.background.alt, borderRadius: 3, p: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={mangaFull.data.images.jpg.image_url}
                    alt={mangaFull.data.title}
                  />
                </Card>
              </Grid>

              <Grid item xs={6} md={8}>
                <Typography variant="h4" gutterBottom>
                  {mangaFull.data.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {mangaFull.data.synopsis}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Published from:{" "}
                  {new Date(mangaFull.data.published.from).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Published to:{" "}
                  {new Date(mangaFull.data.published.to).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Chapters: {mangaFull.data.chapters}
                </Typography>
                <Typography variant="body2">
                  Volumes: {mangaFull.data.volumes}
                </Typography>
                <Typography variant="body2">
                  Score: <Rating value={mangaFull.data.score} disabled />
                </Typography>
                <Typography variant="body2">
                  Rank: {mangaFull.data.rank}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="h5" gutterBottom>
                Characters
              </Typography>
              <Grid container spacing={2}>
                {characters.data.map(({ character, role }) => (
                  <Grid item xs={6} md={3} key={character.mal_id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="280"
                        image={character.images.jpg.image_url}
                        alt={character.name}
                        sx={{
                          objectFit: "fill",
                          height: { xs: 420, md: 260 },
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6">{character.name}</Typography>
                        <Typography variant="body2">Role: {role}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          {/* Sidebar */}
          <Stack spacing={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                News
              </Typography>
              {news.data.map((newsItem) => (
                <Card key={newsItem.mal_id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{newsItem.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {newsItem.excerpt}
                    </Typography>
                    <MuiLink component={RouterLink} to={newsItem.url}>
                      Read more
                    </MuiLink>
                  </CardContent>
                </Card>
              ))}
            </Paper>

            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Forum Topics
              </Typography>
              {topics.data.map((topic) => (
                <Card key={topic.mal_id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{topic.title}</Typography>
                    <Typography variant="body2">
                      By:{" "}
                      <MuiLink component={RouterLink} to={topic.author_url}>
                        {topic.author_username}
                      </MuiLink>
                    </Typography>
                    <Typography variant="body2">
                      Comments: {topic.comments}
                    </Typography>
                    <MuiLink component={RouterLink} to={topic.url}>
                      Join discussion
                    </MuiLink>
                  </CardContent>
                </Card>
              ))}
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MangaInfoPresentation;
