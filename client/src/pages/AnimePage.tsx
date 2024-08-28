import {
  Container,
  Pagination,
  PaginationItem,
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
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useGetAnimeListQuery } from "../../store/api/jikan-service";
import { AnimeList } from "../../types/api/jikan";
import { Info as InfoIcon } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      data: animeList = [],
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

  const pagesTotal = Math.ceil(itemsTotal / itemsPerPage);

  return (
    <Box sx={{ bgcolor: palette.background.default }}>
      <Grid
        container
        sx={{
          // width: "100%",
          bgcolor: "inherit",
          "& .MuiBox-root": { borderRadius: 3 },
        }}
      >
        <Grid
          item
          xs={12}
          md={9}
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
                "& .MuiImageListItem-img": { borderRadius: 5 },
                "& .MuiImageListItemBar-root": {
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                },
              }}
            >
              {animeList.map((item: any) => (
                <ImageListItem
                  key={item?.images?.jpg?.large_image_url}
                  cols={1}
                  sx={{
                    minWidth: 180,
                    maxWidth: 280,
                    ":hover": {
                      opacity: 0.4,
                    },
                    ":hover .MuiSvgIcon-root": {
                      visibility: "visible",
                    },
                  }}
                  onClick={() => navigate(`/anime-info/${item?.mal_id}`)}
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
                    srcSet={`${item?.images?.jpg?.large_image_url}`}
                    src={`${item?.images?.jpg?.large_image_url}`}
                    alt={item?.title}
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      maxHeight: "100%",
                    }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item?.genres
                      ?.map((genre: { name: string }) => genre?.name)
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
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              minHeight: 610,
              bgcolor: palette.background.alt,
              m: 3,
              textAlign: "center",
            }}
          >
            Current Anime
          </Box>
        </Grid>
      </Grid>
      <Container
        sx={{
          bgcolor: "inherit",
          p: 2,
          mx: 4,
          my: 1,
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
              to={`/anime-page${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Container>
    </Box>
  );
};

export default AnimePage;
