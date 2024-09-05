import React, { useState } from "react";
import { useGetClubsSearch } from "../lib/tanstack-query/useClubsQueries";
import { Typography, Box, TextField, Button, useTheme } from "@mui/material";
import { ClubSearchDataItem } from "../types/api/clubs";
import { LoadingIndicator } from "../components";

const ClubsPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetClubsSearch({
    page,
    limit: 10,
    q: query,
    order_by: "mal_id",
  });
  const { palette } = useTheme();

  const handleSearch = () => {
    setPage(1); // Reset page to 1 on new search
  };

  if (isLoading || !data) return <LoadingIndicator sx={{ width: "80%" }} />;
  if (error) return <LoadingIndicator sx={{ width: "80%" }} />;

  const { data: clubs } = data;

  return (
    <Box
      sx={{
        width: "80%",
        bgcolor: palette.background.alt,
        p: 5,
        borderRadius: 3,
      }}
    >
      <TextField
        label="Поиск клубов"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSearch}>Поиск</Button>
      <Typography variant="h5">Клубы</Typography>
      {clubs.map((club: ClubSearchDataItem, index: number) => (
        <Typography key={index}>{club.name}</Typography>
      ))}
    </Box>
  );
};

export default ClubsPage;
