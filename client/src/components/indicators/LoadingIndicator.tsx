import { Skeleton, SkeletonProps } from "@mui/material";

interface LoadingIndicatorProps extends SkeletonProps {}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  return <Skeleton variant="rounded" {...props} />;
};

export default LoadingIndicator;
