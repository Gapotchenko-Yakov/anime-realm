import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { useGetAnimeListQuery } from "../../../lib/tanstack-query/useAnimeQueries";
import { useNavigate } from "react-router-dom";
import { useComponentsStore } from "../../../lib/zustand/useComponentsStore";
import LoadingIndicator from "../../LoadingIndicator";
import ErrorIndicator from "../../ErrorIndicator";

interface Option {
  id: number;
  label: string;
}

const Search = () => {
  const navigate = useNavigate();

  const { query, setSearchQuery } = useComponentsStore((state) => ({
    query: state.Search.query,
    setSearchQuery: state.setSearchQuery,
  }));

  const {
    data: { data: items } = {},
    isLoading,
    error,
  } = useGetAnimeListQuery(
    {
      q: query,
      order_by: "score",
      sort: "desc",
    },
    { enabled: !!query }
  );

  const animeFound = useMemo(
    () =>
      items?.map((item) => ({
        id: item.mal_id,
        label: item.title,
      })) || [],
    [items]
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleAutocompleteChange = (
    _e: React.SyntheticEvent<Element, Event>,
    value: Option | null
  ) => {
    if (value) {
      navigate(`/anime-info/${value.id}`);
    }
  };

  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <Autocomplete
      onChange={handleAutocompleteChange}
      disableClearable
      options={animeFound}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          onChange={handleInputChange}
          value={query}
        />
      )}
      sx={{
        minWidth: 220,
        maxWidth: 500,
        flexGrow: 1,
        color: "inherit",
      }}
    />
  );
};

export default Search;
