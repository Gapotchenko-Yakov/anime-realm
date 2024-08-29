import { Alert, SxProps, Theme, Typography } from "@mui/material";

interface ErrorIndicatorProps {
  message?: string;
  sx?: SxProps<Theme>;
}

const ErrorIndicator = ({ message, sx }: ErrorIndicatorProps) => (
  <Alert severity="error" sx={{ ...sx, p: 3 }}>
    <Typography variant="h6" textAlign="center">
      {message || "An error has occurred."}
    </Typography>
  </Alert>
);

export default ErrorIndicator;
