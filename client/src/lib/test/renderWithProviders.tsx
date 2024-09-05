import React from "react";
import { render } from "@testing-library/react";
import {
  withRouterAndQueryClient,
  WithRouterAndQueryClientProps,
} from "./withProviders";

// Обертка для рендеринга компонента с провайдерами
const renderWithProviders = (
  Component: React.ComponentType<WithRouterAndQueryClientProps>,
  props?: Omit<React.ComponentProps<typeof Component>, "children">
) => {
  const WrappedComponent = withRouterAndQueryClient((props) => (
    <Component {...props} />
  ));

  // return render(<WrappedComponent {...props} />); TODO
};

export { renderWithProviders };
