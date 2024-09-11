import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Divider,
  Container,
  Stack,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetCharacterFullById } from "../lib/tanstack-query/useCharactersQueries";
import { LoadingIndicator, ErrorIndicator } from "../components";

const CharacterInfo = () => {
  const { id = "7" } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetCharacterFullById(parseInt(id));

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message="Failed to load character data" />;
  }

  const character = data?.data;
  const { palette } = useTheme();

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ p: 3 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={character?.images.jpg.image_url}
                    alt={character?.name}
                    sx={{ height: 280, objectFit: "cover" }} // Fixed height for consistency
                  />
                </Card>
              </Grid>

              <Grid item xs={6} md={8}>
                <Typography variant="h4" gutterBottom>
                  {character?.name}
                </Typography>
                <Typography variant="subtitle1" color={palette.secondary[500]}>
                  {character?.name_kanji}
                </Typography>
                <Typography variant="body1" color={palette.secondary.main}>
                  {character?.about}
                </Typography>
                <Typography variant="body2" color={palette.secondary[400]}>
                  Nicknames: {character?.nicknames.join(", ")}
                </Typography>
                <Typography variant="body2" color={palette.secondary[400]}>
                  Favorites: {character?.favorites}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="h5" gutterBottom>
                Anime Appearances
              </Typography>
              <Grid container spacing={2}>
                {character?.anime.map((entry) => (
                  <Grid item xs={6} md={4} key={entry.anime.mal_id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="280"
                        image={entry.anime.images.jpg.image_url}
                        alt={entry.anime.title}
                        sx={{ objectFit: "cover" }} // Consistent image fit
                      />
                      <CardContent
                        sx={{
                          height: "120px",
                          overflowY: "auto",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">
                          {entry.anime.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={palette.secondary[400]}
                        >
                          Role: {entry.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="h5" gutterBottom>
                Manga Appearances
              </Typography>
              <Grid container spacing={2}>
                {character?.manga.map((entry) => (
                  <Grid item xs={6} md={4} key={entry.manga.mal_id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="280"
                        image={entry.manga.images.jpg.image_url}
                        alt={entry.manga.title}
                        sx={{ objectFit: "cover" }} // Consistent image fit
                      />
                      <CardContent
                        sx={{
                          height: "120px",
                          overflowY: "auto",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h6">
                          {entry.manga.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={palette.secondary[400]}
                        >
                          Role: {entry.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Voice Actors
                </Typography>
                <Stack spacing={2}>
                  {character?.voices.map((voice) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      key={voice.person.mal_id}
                    >
                      <Avatar
                        src={voice.person.images.jpg.image_url}
                        alt={voice.person.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="h6">
                          {voice.person.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={palette.secondary[400]}
                        >
                          Language: {voice.language}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterInfo;
