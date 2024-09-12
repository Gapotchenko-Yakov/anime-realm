import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import {
  LoadingIndicator,
  ErrorIndicator,
  NoDataIndicator,
} from "../../components/indicators";
import { useGetTopPeopleQuery } from "../../lib/tanstack-query/useTopQueries";
import { Info as InfoIcon } from "@mui/icons-material";

const TopPeopleList: React.FC = () => {
  const { data, error, isLoading } = useGetTopPeopleQuery();

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
        Top People
      </Typography>
      <Grid container spacing={3}>
        {data.data.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.mal_id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{person.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {person.alternate_names.join(", ") || "No Alternate Names"}
                </Typography>
                <img
                  src={person.images.jpg.image_url}
                  alt={person.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="body2">{person.about}</Typography>
                <Typography variant="body2">
                  Birthday: {person.birthday}
                </Typography>
                <Typography variant="body2">
                  Favorites: {person.favorites}
                </Typography>
                <IconButton
                  href={person.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InfoIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopPeopleList;
