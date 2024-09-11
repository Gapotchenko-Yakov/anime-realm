import React, { useState } from "react";
import { useGetAnimeListQuery } from "../lib/tanstack-query/useAnimeQueries";
import { Box, TextField, Autocomplete, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ErrorIndicator, LoadingIndicator } from "./indicators";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const { palette } = useTheme();

  const { data, isLoading, error } = useGetAnimeListQuery(
    { q: query, order_by: "score", sort: "desc" },
    { enabled: !!query }
  );

  const animeOptions =
    data?.data.map((item) => ({
      id: item.mal_id,
      label: item.title,
    })) || [];

  const handleSearch = () => {
    // Trigger a search by setting the query
    setQuery(query);
  };

  if (isLoading)
    return <LoadingIndicator sx={{ width: "80%", height: "100%" }} />;
  if (error) return <ErrorIndicator sx={{ width: "80%", height: "100%" }} />;

  return (
    <Box
      sx={{
        width: "80%",
        height: "100%",
        bgcolor: palette.background.alt,
        p: 5,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="Search Anime"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
      <Autocomplete
        disableClearable
        options={animeOptions}
        getOptionLabel={(option) => option.label}
        onChange={(e, value) => {
          if (value) {
            navigate(`/anime-info/${value.id}`);
          }
        }}
        renderInput={(params) => <TextField {...params} label="Select Anime" />}
        sx={{ flexGrow: 1 }}
      />
    </Box>
  );
};

export default Search;
