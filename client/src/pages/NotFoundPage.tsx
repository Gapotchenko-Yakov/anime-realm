import { Alert } from "@mui/material";

const NotFoundPage = () => (
  <Alert
    severity="error"
    sx={{ mx: "auto", maxWidth: "80%", minWidth: "250px" }}
  >
    Page Not Found.
  </Alert>
);

export default NotFoundPage;
