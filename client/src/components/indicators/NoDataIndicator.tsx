import { Alert, AlertProps, Typography } from "@mui/material";

interface NoDataIndicatorProps extends AlertProps {
  message?: string;
}

const NoDataIndicator = ({ message, sx }: NoDataIndicatorProps) => (
  <Alert severity="warning" sx={{ ...sx, p: 3 }}>
    <Typography variant="h6" textAlign="center">
      {message || "No data to display"}
    </Typography>
  </Alert>
);

export default NoDataIndicator;
