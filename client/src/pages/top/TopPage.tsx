import { Container } from "@mui/material";
import TopAnimeList from "./TopAnimeList";
import TopMangaList from "./TopMangaList";

const maptypeToTheComponent = {
  anime: <TopAnimeList />,
  manga: <TopMangaList />,
  //   people: <TopPeopleList />,
  //   characters: <TopCharactersList />,
  //   reviews: <TopReviewsList />,
};

const TopPage: React.FC = () => {
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
        margin="normal"
      >
        <MenuItem value="anime">Top Anime</MenuItem>
        <MenuItem value="manga">Top Manga</MenuItem>
        {/* Добавьте другие MenuItem для других списков */}
        {/* <MenuItem value="people">Top People</MenuItem>
        <MenuItem value="characters">Top Characters</MenuItem>
        <MenuItem value="reviews">Top Reviews</MenuItem> */}
      </Select>
      <ContentComponent />
    </Container>
  );
};

export default TopPage;
