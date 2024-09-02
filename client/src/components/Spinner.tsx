import { CircularProgress, SxProps, Theme } from "@mui/material";

interface SpinnerProps {
  sx?: SxProps<Theme>;
}

const Spinner = (props: SpinnerProps) => <CircularProgress {...props} />;

export default Spinner;
