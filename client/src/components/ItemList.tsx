import ErrorIndicator from "./indicators/ErrorIndicator";
import LoadingIndicator from "./indicators/LoadingIndicator";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useThemeStore } from "../lib/zustand/useThemeStore";

type ItemListProps = {
  itemId: number;
  setItemId: (id: number) => void;
  getData: any; //UseQueryData<AnimeList, GetAnimeListArg>;
};

const ItemList = (props: ItemListProps) => {
  const { mode } = useThemeStore();

  const { getData, itemId, setItemId } = props;

  const { data: { data: items = [] } = {}, isLoading, error } = getData({});
  const theme = useTheme();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <List>
      {items.map((item: any) => {
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
            <ListItemButton onClick={() => setItemId(id)}>
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
