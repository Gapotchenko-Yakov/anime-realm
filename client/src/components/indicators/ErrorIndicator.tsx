import { Alert, AlertProps, Typography } from "@mui/material";

interface ErrorIndicatorProps extends AlertProps {
  message?: string;
}

const ErrorIndicator = ({ message, sx }: ErrorIndicatorProps) => (
  <Alert severity="error" sx={{ width: "100%", height: "100%", p: 3, ...sx }}>
    <Typography variant="h6" textAlign="center">
      {message || "An error has occurred."}
    </Typography>
  </Alert>
);

export default ErrorIndicator;
