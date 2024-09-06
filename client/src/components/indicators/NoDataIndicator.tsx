import { Alert, AlertProps, Typography } from "@mui/material";

interface NoDataIndicatorProps extends AlertProps {
  message?: string;
}

const NoDataIndicator = ({ message, sx }: NoDataIndicatorProps) => (
  <Alert severity="warning" sx={{ width: "100%", height: "100%", p: 3, ...sx }}>
    <Typography variant="h6" textAlign="center">
      {message || "No data to display"}
    </Typography>
  </Alert>
);

export default NoDataIndicator;
