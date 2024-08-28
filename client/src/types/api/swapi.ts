type Person = {
  name: string;
  height: string; //or number
  mass: string; //or number
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: [];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PeopleResult = {
  count: number;
  next: string;
  previous: object;
  results: Person[];
};

type PlanetResult = {
  count: number;
  next: string;
  previous: object;
  results: Planet[];
};

type StarshipsResult = {
  count: number;
  next: string;
  previous: object;
  results: Starship[];
};

export type {
  Person,
  Planet,
  Starship,
  PeopleResult,
  PlanetResult,
  StarshipsResult,
};
