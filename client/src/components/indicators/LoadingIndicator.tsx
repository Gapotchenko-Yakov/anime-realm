import { Skeleton, SkeletonProps, useTheme } from "@mui/material";

interface LoadingIndicatorProps extends SkeletonProps {}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const { palette } = useTheme();

  return (
    <Skeleton
      variant="rounded"
      sx={{ width: "100%", height: "100%", bgcolor: palette.background.alt }}
      {...props}
    />
  );
};

export default LoadingIndicator;
