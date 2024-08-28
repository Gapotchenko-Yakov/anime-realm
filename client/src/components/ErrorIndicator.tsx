import { Alert } from "@mui/material";

interface ErrorIndicatorProps {
  message?: string;
}

const ErrorIndicator = ({ message }: ErrorIndicatorProps) => (
  <Alert severity="error">{message || "An error has occurred."}</Alert>
);

export default ErrorIndicator;
