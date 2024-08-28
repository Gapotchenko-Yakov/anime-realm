import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Column 1</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            corporis earum vero perspiciatis optio unde doloribus enim veritatis
            laboriosam vel. Adipisci corporis quia minus libero itaque a,
            voluptatibus vitae aliquam!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Column 2</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            corporis earum vero perspiciatis optio unde doloribus enim veritatis
            laboriosam vel. Adipisci corporis quia minus libero itaque a,
            voluptatibus vitae aliquam!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Column 3</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            corporis earum vero perspiciatis optio unde doloribus enim veritatis
            laboriosam vel. Adipisci corporis quia minus libero itaque a,
            voluptatibus vitae aliquam!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
