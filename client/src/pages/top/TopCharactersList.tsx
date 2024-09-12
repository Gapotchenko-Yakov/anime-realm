import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import {
  LoadingIndicator,
  ErrorIndicator,
  NoDataIndicator,
} from "../../components/indicators";

import { useGetTopCharactersQuery } from "../../lib/tanstack-query/useTopQueries";

const TopCharactersList: React.FC = () => {
  const { data, error, isLoading } = useGetTopCharactersQuery();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message={error.message} />;
  }

  if (!data || !data.data.length) {
    return <NoDataIndicator />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top Characters
      </Typography>
      <Grid container spacing={3}>
        {data.data.map((character) => (
          <Grid item xs={12} sm={6} md={4} key={character.mal_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{character.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {character.nicknames.join(", ") || "No Nicknames"}
                </Typography>
                <img
                  src={character.images.jpg.image_url}
                  alt={character.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="body2" paragraph>
                  {character.about}
                </Typography>
                <Typography variant="body2">
                  Favorites: {character.favorites}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopCharactersList;
