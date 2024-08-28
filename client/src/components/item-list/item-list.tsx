import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { RootState } from "../../types/redux";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { AnimeList, GetAnimeListArg } from "../../types/api/jikan";
import { UseQueryData } from "../../types/rtk-query";

type ItemListProps = {
  itemId: number;
  setItemId: (id: number) => void;
  getData: UseQueryData<AnimeList, GetAnimeListArg>;
};

const ItemList = (props: ItemListProps) => {
  const mode = useSelector((state: RootState) => state.mui.theme.mode);

  const { getData, itemId, setItemId } = props;

  const { data: { data: items = [] } = {}, isLoading, error } = getData({});
  const theme = useTheme();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <List>
      {items.map((item) => {
        const id = item.mal_id;

        return (
          <ListItem
            key={id}
            sx={{
              bgcolor: `${
                mode === "dark"
                  ? itemId === id
                    ? theme.palette.primary.light
                    : theme.palette.primary.dark
                  : itemId === id
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light
              }`,
            }}
            // className={`${itemId === id ? "bg-cyan-600" : "bg-cyan-300"}`}
            disablePadding
          >
            <ListItemButton onClick={(e) => setItemId(id)}>
              <ListItemAvatar>{item?.title[0]}</ListItemAvatar>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ItemList;
