import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { useGetAnimeFullByIdQuery } from "../lib/tanstack-query/useAnimeQueries";
import userEvent from "@testing-library/user-event";

import AnimeInfo from "./AnimeInfo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Мокаем хуки и компоненты
vi.mock("../lib/tanstack-query/useAnimeQueries", () => ({
  useGetAnimeFullByIdQuery: vi.fn(),
}));

vi.mock("../components", () => ({
  LoadingIndicator: () => <div>Loading...</div>,
  ErrorIndicator: ({ message }: { message: string }) => <div>{message}</div>,
}));

describe("AnimeInfo", () => {
  const narutoData = {
    mal_id: 20,
    url: "https://myanimelist.net/anime/20/Naruto",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1141/142503t.jpg",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1141/142503l.jpg",
      },
      webp: {
        image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.webp",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1141/142503t.webp",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1141/142503l.webp",
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: "Default",
        title: "Naruto",
      },
      {
        type: "Synonym",
        title: "NARUTO",
      },
      {
        type: "Japanese",
        title: "ナルト",
      },
      {
        type: "English",
        title: "Naruto",
      },
    ],
    title: "Naruto",
    title_english: "Naruto",
    title_japanese: "ナルト",
    title_synonyms: ["NARUTO"],
    type: "TV",
    source: "Manga",
    episodes: 220,
    status: "Finished Airing",
    airing: false,
    aired: {
      from: "2002-10-03T00:00:00+00:00",
      to: "2007-02-08T00:00:00+00:00",
      prop: {
        from: {
          day: 3,
          month: 10,
          year: 2002,
        },
        to: {
          day: 8,
          month: 2,
          year: 2007,
        },
      },
      string: "Oct 3, 2002 to Feb 8, 2007",
    },
    duration: "23 min per ep",
    rating: "PG-13 - Teens 13 or older",
    score: 8,
    scored_by: 2001851,
    rank: 644,
    popularity: 8,
    members: 2900184,
    favorites: 80502,
    synopsis:
      "Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\n\nIn the present, Naruto is a hyperactive and knuckle-headed ninja growing up within Konohagakure. Shunned because of the demon inside him, Naruto struggles to find his place in the village. His one burning desire to become the Hokage and be acknowledged by the villagers who despite him. However, while his goal leads him to unbreakable bonds with lifelong friends, it also lands him in the crosshairs of many deadly foes.\n\n[Written by MAL Rewrite]",
    background:
      'Naruto adapts the first 27 volumes of the original manga. It received numerous awards during its airing, including the "Best Full-Length Animation Program Award" in the Third UStv Awards and the 38th "Best Animated Show" in IGN\'s Top 100 Animated Series.',
    season: "fall",
    year: 2002,
    broadcast: {
      day: "Thursdays",
      time: "19:30",
      timezone: "Asia/Tokyo",
      string: "Thursdays at 19:30 (JST)",
    },
    producers: [
      {
        mal_id: 16,
        type: "anime",
        name: "TV Tokyo",
        url: "https://myanimelist.net/anime/producer/16/TV_Tokyo",
      },
      {
        mal_id: 17,
        type: "anime",
        name: "Aniplex",
        url: "https://myanimelist.net/anime/producer/17/Aniplex",
      },
      {
        mal_id: 1365,
        type: "anime",
        name: "Shueisha",
        url: "https://myanimelist.net/anime/producer/1365/Shueisha",
      },
    ],
    licensors: [
      {
        mal_id: 119,
        type: "anime",
        name: "VIZ Media",
        url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
      },
    ],
    studios: [
      {
        mal_id: 1,
        type: "anime",
        name: "Pierrot",
        url: "https://myanimelist.net/anime/producer/1/Pierrot",
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 2,
        type: "anime",
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        mal_id: 10,
        type: "anime",
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 17,
        type: "anime",
        name: "Martial Arts",
        url: "https://myanimelist.net/anime/genre/17/Martial_Arts",
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: "anime",
        name: "Shounen",
        url: "https://myanimelist.net/anime/genre/27/Shounen",
      },
    ],
    relations: [
      {
        relation: "Adaptation",
        entry: [
          {
            mal_id: 11,
            type: "manga",
            name: "Naruto",
            url: "https://myanimelist.net/manga/11/Naruto",
          },
        ],
      },
      {
        relation: "Sequel",
        entry: [
          {
            mal_id: 1735,
            type: "anime",
            name: "Naruto: Shippuuden",
            url: "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
          },
        ],
      },
      {
        relation: "Side Story",
        entry: [
          {
            mal_id: 761,
            type: "anime",
            name: "Naruto: Akaki Yotsuba no Clover wo Sagase",
            url: "https://myanimelist.net/anime/761/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase",
          },
          {
            mal_id: 594,
            type: "anime",
            name: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
            url: "https://myanimelist.net/anime/594/Naruto__Takigakure_no_Shitou_-_Ore_ga_Eiyuu_Dattebayo",
          },
          {
            mal_id: 442,
            type: "anime",
            name: "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
            url: "https://myanimelist.net/anime/442/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo",
          },
          {
            mal_id: 936,
            type: "anime",
            name: "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
            url: "https://myanimelist.net/anime/936/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo",
          },
          {
            mal_id: 1074,
            type: "anime",
            name: "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
            url: "https://myanimelist.net/anime/1074/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai",
          },
          {
            mal_id: 2144,
            type: "anime",
            name: "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panic Dattebayo!",
            url: "https://myanimelist.net/anime/2144/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panic_Dattebayo",
          },
          {
            mal_id: 7367,
            type: "anime",
            name: "Naruto: The Cross Roads",
            url: "https://myanimelist.net/anime/7367/Naruto__The_Cross_Roads",
          },
        ],
      },
      {
        relation: "Other",
        entry: [
          {
            mal_id: 53236,
            type: "anime",
            name: "Road of Naruto",
            url: "https://myanimelist.net/anime/53236/Road_of_Naruto",
          },
          {
            mal_id: 54688,
            type: "anime",
            name: "Naruto (Shinsaku Anime)",
            url: "https://myanimelist.net/anime/54688/Naruto_Shinsaku_Anime",
          },
        ],
      },
    ],
    theme: {
      openings: [
        '1: "R★O★C★K★S" by Hound Dog (eps 1-25)',
        '2: "Haruka Kanata (遥か彼方)" by Asian Kung-fu Generation (eps 26-53)',
        '3: "Kanashimi wo Yasashisa ni (悲しみをやさしさに)" by little by little (eps 54-77)',
        '4: "GO!!!" by FLOW (eps 78-103)',
        '5: "Seishun Kyosokyoku (青春狂騒曲)" by Sambomaster (eps 104-128)',
        '6: "No Boy, No Cry (ノーボーイ・ノークライ)" by Stance Punks (eps 129-153)',
        '7: "Namikaze Satellite (波風サテライト)" by Snowkel (eps 154-178)',
        '8: "Re:member" by FLOW (eps 179-202)',
        '9: "YURA YURA (ユラユラ)" by Hearts Grow (eps 203-220)',
      ],
      endings: [
        '1: "Wind" by Akeboshi (eps 1-25)',
        '2: "Harmonia" by Rythem (eps 26-51)',
        '3: "Viva Rock ~Japanese Side~" by Orange Range (eps 52-64)',
        '4: "ALIVE" by Raiko (eps 65-77)',
        '5: "Ima made Nando mo" by the Mass Missile (eps 78-89)',
        '6: "Ryusei" by Tia (eps 90-103)',
        '7: "Mountain A Go Go Too" by Captain Straydum (eps 104-115)',
        '8: "Hajimete Kimi to Shabetta" by GagagaSP (eps 116-128)',
        '9: "Nakushita Kotoba" by No Regret Life (eps 129-141)',
        '10: "Speed" by Analogfish (eps 142-153)',
        '11: "Soba ni Iru Kara" by Amadori (eps 154-165)',
        '12: "Parade" by CHABA (eps 166-178)',
        '13: "Yellow Moon" by Akeboshi (eps 179-191)',
        '14: "Pinocchio" by Ore Ska Band (eps 192-202)',
        '15: "Scenario" by SABOTEN (eps 203-220)',
      ],
    },
    external: [
      {
        name: "Official Site",
        url: "http://www.tv-tokyo.co.jp/anime/naruto2002/",
      },
      {
        name: "AniDB",
        url: "https://anidb.net/perl-bin/animedb.pl?show=anime&aid=239",
      },
      {
        name: "ANN",
        url: "https://www.animenewsnetwork.com/encyclopedia/anime.php?id=1825",
      },
      {
        name: "Wikipedia",
        url: "http://en.wikipedia.org/wiki/Naruto",
      },
      {
        name: "Bangumi",
        url: "https://bangumi.tv/subject/3425",
      },
    ],
    streaming: [
      {
        name: "Crunchyroll",
        url: "http://www.crunchyroll.com/series-280621",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com/title/70205012",
      },
    ],
  };

  const queryClient = new QueryClient();

  it("LoadingIndicator", () => {
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimeInfo />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("error indicator", () => {
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({
      data: undefined,
      error: true,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimeInfo />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText("Ошибка загрузки данных")).toBeInTheDocument();
  });

  it("anime data", async () => {
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({
      data: {
        data: narutoData,
      },
      error: null,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimeInfo />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getAllByText("Naruto").length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Moments before Naruto Uzumaki's birth/)
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Naruto/i })).toBeInTheDocument();
    expect(screen.getByText("More Info")).toHaveAttribute(
      "href",
      "https://myanimelist.net/anime/20/Naruto"
    );

    await waitFor(() => {
      expect(screen.getByText("Producers")).toBeInTheDocument();
      expect(screen.getByText("Licensors")).toBeInTheDocument();
      expect(screen.getByText("Studios")).toBeInTheDocument();
      expect(screen.getByText("Genres")).toBeInTheDocument();
      expect(screen.getByText("External Links")).toBeInTheDocument();
      expect(screen.getByText("Streaming")).toBeInTheDocument();
    });
  });
  it("should toggle accordion content", async () => {
    (useGetAnimeFullByIdQuery as Mock).mockReturnValue({
      data: {
        data: narutoData,
      },
      error: null,
      isLoading: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AnimeInfo />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const accordionHeader = screen.getByText(/Producers/i);
    expect(accordionHeader).toBeInTheDocument();

    expect(screen.getByText(/TV Tokyo/i)).not.toBeVisible();

    await userEvent.click(accordionHeader);

    expect(screen.getByText(/TV Tokyo/i)).toBeVisible();

    await userEvent.click(accordionHeader);

    expect(screen.getByText(/TV Tokyo/i)).not.toBeVisible();
  });
});
