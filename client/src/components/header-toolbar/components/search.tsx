import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { useGetAnimeListQuery } from "../../../store/api/jikan-service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { actions as componentsActions } from "../../../store/components";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useSelector(
    (state: RootState) => state.components.Search.query
  );
  const { data: { data: items } = {} } = useGetAnimeListQuery({
    limit: 12,
    q: query,
    order_by: "score",
    sort: "desc",
  });

  const {
    animeFound,
  }: {
    animeFound: { id: number; label: string }[] | undefined;
    animeFoundTitles: string[] | undefined;
  } = useMemo(() => {
    let animeFound = items?.map((item) => ({
      id: item.mal_id,
      label: item.title,
    }));

    let animeFoundTitles = animeFound?.map((anime) => anime?.label);

    return { animeFound, animeFoundTitles };
  }, [query]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    if (value) dispatch(componentsActions.changeQuery(value));
  };

  const handleAutocompleteChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: { id: number; label: string } | null
  ) => {
    if (value) {
      return navigate(`/anime-info/${value?.id}`);
    }
  };

  return (
    <Autocomplete
      onChange={(e, value) => handleAutocompleteChange(e, value)}
      options={animeFound || []}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Anime"
          onChange={(e) => handleInputChange(e)}
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
