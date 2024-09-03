import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo, useState, useEffect } from "react";
import { useGetAnimeListQuery } from "../../../lib/tanstack-query/useAnimeQueries";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../LoadingIndicator";
import ErrorIndicator from "../../ErrorIndicator";
import debounce from "lodash.debounce";

interface Option {
  id: number;
  label: string;
}

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  const debouncedSetQuery = useMemo(() => debounce(setQuery, 1500), []);

  const {
    data: { data: items } = {},
    isLoading,
    error,
  } = useGetAnimeListQuery({
    q: query,
    order_by: "score",
    sort: "desc",
  });

  const animeFound: Option[] = useMemo(() => {
    return (
      items?.map((item) => ({
        id: item.mal_id,
        label: item.title,
      })) || []
    );
  }, [items]);

  useEffect(() => {
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [debouncedSetQuery]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetQuery(value);
  };

  const handleAutocompleteChange = (
    e: React.SyntheticEvent<Element, Event>,
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
          value={inputValue}
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
