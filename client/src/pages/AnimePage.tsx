import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Pagination,
  PaginationItem,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import {
  useGetAnimeFullByIdQuery,
  useGetAnimeListQuery,
} from "../lib/tanstack-query/useAnimeQueries";
import { Info as InfoIcon } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ErrorIndicator, Spinner } from "../components";
import { useEffect, useState } from "react";

const MIN_ANIME_FULL_ID = 1,
  MAX_ANIME_FULL_ID = 6528,
  RANDOM_ANIME_INTERVAL = 8000;

const AnimePage = () => {
  // theme
  const theme = useTheme();
  const { palette } = theme;

  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  // pageLimit
  const PAGE_LIMIT = 12;

  // search
  // const search = this.props

  //pagination
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1");
  const navigate = useNavigate();

  const {
    data: {
      data: animeList,
      pagination: {
        last_visible_page: lastVisiblePage = 1,
        items: {
          total: itemsTotal = 26596,
          count: itemsCount = 25,
          per_page: itemsPerPage = 25,
        } = {},
      } = {},
    } = {},
    error,
    isLoading,
  } = useGetAnimeListQuery({ page, limit: PAGE_LIMIT, sfw: true });

  const [randomAnimeId, setRandomAnimeId] = useState(7);
  console.log("🚀 ~ AnimePage ~ randomAnimeId:", randomAnimeId);

  useEffect(() => {
    const getRandomInt = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateId = () => getRandomInt(MIN_ANIME_FULL_ID, MAX_ANIME_FULL_ID);

    setRandomAnimeId(generateId());

    const interval = setInterval(
      () => setRandomAnimeId(generateId()),
      RANDOM_ANIME_INTERVAL
    );

    return () => clearInterval(interval);
  }, []);

  const {
    data: { data: randomAnime } = {},
    error: randomAnimeError,
    isLoading: randomAnimeIsLoading,
  } = useGetAnimeFullByIdQuery(randomAnimeId);

  if (randomAnimeError) {
  }

  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage);

  if (isLoading) return <Spinner />; // Показываем индикатор загрузки
  if (error) return <ErrorIndicator message="Ошибка загрузки данных" />;

  // Если данные загружены, отображаем информацию
  if (!animeList) return null;

  return (
    <Box sx={{ bgcolor: palette.background.default }}>
      <Grid
        container
        sx={{
          bgcolor: "inherit",
          "& .MuiBox-root": { borderRadius: 2 },
        }}
      >
        <Grid
          item
          xs={12}
          lg={9}
          sx={{
            bgcolor: "inherit",
          }}
        >
          <Box
            sx={{
              minHeight: 610,
              m: 3,
              textAlign: "center",
              bgcolor: palette.background.alt,
            }}
          >
            <Typography
              variant="h2"
              textAlign="left"
              p={2}
              color={palette.secondary[100]}
            >
              Anime List
            </Typography>
            <ImageList
              variant="standard"
              cols={matchDownSm ? 1 : matchDownMd ? 2 : matchDownLg ? 3 : 4}
              rowHeight={430}
              gap={8}
              sx={{
                p: 2,
                "& .MuiImageListItem-img": { borderRadius: 2 },
                "& .MuiImageListItemBar-root": {
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                },
              }}
            >
              {animeList.map((item: any) => (
                <ImageListItem
                  key={item.images.jpg.large_image_url}
                  cols={1}
                  sx={{
                    minWidth: 180,
                    maxWidth: 280,
                    ":hover": {
                      opacity: 0.4,
                      cursor: "pointer",
                    },
                    ":hover .MuiSvgIcon-root": {
                      visibility: "visible",
                    },
                  }}
                  onClick={() => navigate(`/anime-info/${item.mal_id}`)}
                >
                  <PlayArrowIcon
                    // fontSize="large"
                    sx={{
                      fontSize: "56px",
                      position: "absolute",
                      marginLeft: "auto",
                      marginRight: "auto",
                      left: 0,
                      right: 0,
                      marginTop: "auto",
                      marginBottom: "auto",
                      top: 0,
                      bottom: 0,
                      visibility: "hidden",
                    }}
                  />
                  <img
                    srcSet={`${item.images.jpg.large_image_url}`}
                    src={`${item.images.jpg.large_image_url}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      maxHeight: "100%",
                    }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.genres
                      .map((genre: { name: string }) => genre.name)
                      .join(", ")}
                    actionIcon={
                      <IconButton
                        sx={{
                          color: "rgba(255, 255, 255, 0.54)",
                        }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Container
            sx={{
              bgcolor: "inherit",
              p: 2,
              mx: 4,
              my: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination
              page={page}
              count={pagesTotal}
              sx={{
                bgcolor: "inherit",
                justifyContent: "center",
                color: palette.secondary[100],
              }}
              variant="outlined"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/anime-page${
                    item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                  {...item}
                />
              )}
            />
          </Container>
        </Grid>
        <Grid item xs={12} lg={3}>
          {randomAnimeError ? (
            <ErrorIndicator
              sx={{
                height: "80vh",
                minHeight: 400,
                width: 280,
                m: 3,
                position: "fixed",
                right: 10,
              }}
            />
          ) : randomAnimeIsLoading || !randomAnime ? (
            <Skeleton
              variant="rounded"
              sx={{
                height: "80vh",
                minHeight: 400,
                width: 280,
                m: 3,
                position: "fixed",
                right: 10,
              }}
            />
          ) : (
            <Card
              sx={{
                height: "80vh",
                minHeight: 400,
                width: 280,
                bgcolor: palette.background.alt,
                m: 3,
                textAlign: "center",
                position: "fixed",
                right: 10,
                "& *": { bgcolor: "inherit" },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={randomAnime.images.jpg.image_url}
                alt={randomAnime.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {randomAnime.title_english || randomAnime.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Episodes: {randomAnime.episodes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Score: {randomAnime.score}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Aired: {randomAnime.aired.from} to {randomAnime.aired.to}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimePage;
