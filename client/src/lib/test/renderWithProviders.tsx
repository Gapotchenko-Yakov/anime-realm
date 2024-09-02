import { render } from "@testing-library/react";
import {
  withRouterAndQueryClient,
  WithRouterAndQueryClientProps,
} from "./withProviders";

const renderWithProviders = (
  Component: React.ComponentType<WithRouterAndQueryClientProps>
) => {
  return render(withRouterAndQueryClient(Component));
};

export { renderWithProviders };
