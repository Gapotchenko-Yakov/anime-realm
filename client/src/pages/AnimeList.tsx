import React, { useEffect, useState } from "react";
import { ItemDetails, ItemList, NavigationPanel } from "../../components";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  useTheme,
  Box,
} from "@mui/material";
import {
  useGetAnimeFullByldQuery,
  useGetAnimeListQuery,
} from "../../store/api/jikan-service";
import { AnimeFull } from "../../types/api/jikan";

const AnimeList = () => {
  const [itemId, setItemId] = useState<number>(17);
  const theme = useTheme();

  const renderItemDetails = (fullItem: AnimeFull["data"] | undefined) => {
    const selectedProps = [
      "title",
      "title_english",
      "title_japanese",
      "status",
      "duration",
      "score",
      "scored_by",
    ];

    const rows = Object.entries(fullItem as object).filter((row) =>
      selectedProps.includes(row[0])
    );

    return (
      <TableContainer component={Paper}>
        <Table
          size="small"
          sx={{ p: 2 }}
          aria-label="Planets charasteristics table"
        >
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row[0]}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: theme.palette.action.hover,
                  },
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        minHeight: 300,
        p: 2,
      }}
    >
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: { sm: "none", md: "flex" } }}
      ></Grid>
      <Grid item xs={12} md={4}>
        <ItemList
          itemId={itemId}
          setItemId={setItemId}
          getData={useGetAnimeListQuery}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <ItemDetails
          itemId={itemId}
          getData={useGetAnimeFullByldQuery}
          renderItemDetails={renderItemDetails}
        />
      </Grid>
    </Grid>
  );
};

export default AnimeList;
