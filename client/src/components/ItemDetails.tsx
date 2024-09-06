import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

import { AnimeFull } from "../types/api/anime";

type ItemDetailsProps = {
  itemId: number;
  getData: any; // UseQueryData<AnimeFull, number>; //(id: number) => object;
  getImageUrl?: (id: number) => string;
  renderItemDetails: (fullItem: AnimeFull["data"] | undefined) => JSX.Element;
};

const ItemDetails = (props: ItemDetailsProps) => {
  const { itemId, renderItemDetails = () => {}, getData } = props;

  const { data: { data: item = {} } = {}, error, isLoading } = getData(itemId);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Card sx={{ px: 2, py: 1 }}>
      <CardHeader>Header</CardHeader>
      <CardContent>
        <>
          <Avatar
            src={item?.images?.jpg?.large_image_url}
            alt="Item image"
            variant="rounded"
            sx={{ width: "100%", height: "auto" }}
          />
          <Typography variant="h5">{item?.title}</Typography>

          {renderItemDetails(item)}
        </>
      </CardContent>

      <CardActions>
        <Button href={`${item?.mal_id}`}>View details</Button>
        <Button href={`${item?.mal_id}`}>Share</Button>
      </CardActions>
    </Card>
  );
};

export default ItemDetails;
