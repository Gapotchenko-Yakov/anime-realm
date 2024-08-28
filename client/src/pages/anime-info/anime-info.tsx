import { useTheme } from "@mui/material";
import { Box, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const AnimeInfo = () => {
  const params = useParams();
  const { animeId } = params;
  console.log("🚀 ~ AnimeInfo ~ animeId:", animeId);
  const { palette } = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          sx={{ padding: 2, bgcolor: palette.background.alt }}
          item
          xs={12}
          lg={9}
        >
          Info
        </Grid>
        <Grid
          sx={{ padding: 2, bgcolor: palette.background.alt }}
          item
          xs={12}
          lg={3}
        >
          Additional Info
        </Grid>
        <Grid
          sx={{ padding: 2, bgcolor: palette.background.alt }}
          item
          xs={12}
          lg={9}
        >
          Similar Anime
        </Grid>
        <Grid
          sx={{ padding: 2, bgcolor: palette.background.alt }}
          item
          xs={12}
          lg={3}
        >
          Current Anime
        </Grid>
        <Grid
          sx={{ padding: 2, bgcolor: palette.background.alt }}
          item
          xs={12}
          lg={3}
        >
          Genres
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimeInfo;
