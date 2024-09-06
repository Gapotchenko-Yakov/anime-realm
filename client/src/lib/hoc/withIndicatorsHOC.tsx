import React from "react";
import { ErrorIndicator, LoadingIndicator } from "../../components";
import NoDataIndicator from "../../components/indicators/NoDataIndicator";

interface WithIndicatorsProps {
  isLoading: boolean;
  error: Error | null;
  noData?: boolean;
  noDataMessage?: string;
  errorMessage?: string;
}

const withIndicatorsHOC = <P extends object>(
  Wrapped: React.ComponentType<P>
): React.FC<P & WithIndicatorsProps> => {
  const ResultComponent: React.FC<P & WithIndicatorsProps> = ({
    isLoading,
    error,
    noData,
    noDataMessage = "No data to display",
    errorMessage = "An error has occurred",
    ...props
  }) => {
    if (error)
      return <ErrorIndicator message={errorMessage} {...(props as P)} />;
    if (isLoading) return <LoadingIndicator {...(props as P)} />;
    if (noData)
      return <NoDataIndicator message={noDataMessage} {...(props as P)} />;
    return <Wrapped {...(props as P)} />;
  };

  return ResultComponent;
};

export { withIndicatorsHOC };
