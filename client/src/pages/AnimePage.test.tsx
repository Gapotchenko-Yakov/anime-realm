import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, Mock, vi, expect, beforeAll } from "vitest";
import AnimePage from "./AnimePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import {
  useGetAnimeFullByIdQuery,
  useGetAnimeListQuery,
} from "../lib/tanstack-query/useAnimeQueries";

vi.mock("../lib/tanstack-query/useAnimeQueries", () => ({
  useGetAnimeListQuery: vi.fn(),
  useGetAnimeFullByIdQuery: vi.fn(),
}));

vi.mock("../components", () => ({
  LoadingIndicator: () => <div>Loading...</div>,
  ErrorIndicator: ({ message }: { message: string }) => <div>{message}</div>,
}));

describe("AnimePage", () => {
  let queryClient: QueryClient;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  it("отображает Spinner при загрузке данных", () => {
    (useGetAnimeListQuery as Mock).mockReturnValue({ isLoading: true });
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({ isLoading: true });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getAllByText("Loading...").length).toBeGreaterThan(0);

    // expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("отображает ErrorIndicator при ошибке загрузки данных", async () => {
    (useGetAnimeListQuery as Mock).mockReturnValue({ error: true });
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({ error: true });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Ошибка загрузки данных/i)).toBeInTheDocument();
    });
  });

  it("отображает список аниме при успешной загрузке данных", async () => {
    (useGetAnimeListQuery as Mock).mockReturnValue({
      data: {
        data: [
          {
            images: { jpg: { large_image_url: "image_url" } },
            title: "Anime Title",
            genres: [{ name: "Action" }],
            mal_id: 1,
          },
        ],
        pagination: { items: { total: 100, per_page: 10 } },
      },
      isLoading: false,
      error: null,
    });
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({
      data: {},
      isLoading: false,
      error: null,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText(/Anime List/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Anime Title/i)).toBeInTheDocument();
  });

  it("отображает Skeleton при загрузке случайного аниме", async () => {
    (useGetAnimeListQuery as Mock).mockReturnValue({
      data: {
        data: [
          {
            images: { jpg: { large_image_url: "image_url" } },
            title: "Anime Title",
            genres: [{ name: "Action" }],
            mal_id: 1,
          },
        ],
        pagination: { items: { total: 100, per_page: 10 } },
      },
      isLoading: false,
      error: null,
    });
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({ isLoading: true });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimePage />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getAllByText("Loading...").length).toBeGreaterThan(0);

    // expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
