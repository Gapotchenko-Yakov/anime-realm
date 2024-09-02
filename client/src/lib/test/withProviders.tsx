import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface WithRouterAndQueryClientProps {
  children: React.ReactNode;
}

// HOC для оборачивания компонентов в BrowserRouter и QueryClientProvider
const withRouterAndQueryClient = (
  Component: React.ComponentType<WithRouterAndQueryClientProps>
) => {
  const queryClient = new QueryClient();

  const Wrapper: React.FC<WithRouterAndQueryClientProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Component>{children}</Component>
      </MemoryRouter>
    </QueryClientProvider>
  );

  return Wrapper;
};

export type { WithRouterAndQueryClientProps };
export { withRouterAndQueryClient };
