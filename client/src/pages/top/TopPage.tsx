import {
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import TopAnimeList from "./TopAnimeList";
import TopMangaList from "./TopMangaList";
import TopPeopleList from "./TopPeopleList";
import TopCharactersList from "./TopCharactersList";
import TopReviewsList from "./TopReviewsList";
import { useState } from "react";

type OptionsList = "anime" | "manga" | "people" | "characters" | "reviews";

const mapTypeToTheContent = {
  anime: { component: <TopAnimeList />, label: "Top Anime" },
  manga: { component: <TopMangaList />, label: "Top Manga" },
  people: { component: <TopPeopleList />, label: "Top People" },
  characters: { component: <TopCharactersList />, label: "Top Characters" },
  reviews: { component: <TopReviewsList />, label: "Top Reviews" },
};

const TopPage: React.FC = () => {
  const [selectedList, setSelectedList] = useState<OptionsList>("anime");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedList(event.target.value as OptionsList);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top Lists
      </Typography>
      <Select
        value={selectedList}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{ my: 3 }}
      >
        {Object.entries(mapTypeToTheContent).map(([type, content]) => (
          <MenuItem value={type}>{content.label}</MenuItem>
        ))}
      </Select>
      {mapTypeToTheContent[selectedList].component}
    </Container>
  );
};

export default TopPage;
