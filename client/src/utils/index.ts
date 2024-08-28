import { Person, Planet, Starship } from "../types/api/swapi";

const _apiUrl = "https://swapi.dev/api";
const _imageUrl = "https://starwars-visualguide.com/assets/img";

const getPlanetImageURL = (id: number | undefined) =>
  `${_imageUrl}/planets/${id}.jpg`;
const getPersonImageURL = (id: number | undefined) =>
  `${_imageUrl}/characters/${id}.jpg`;
const getStarshipImageURL = (id: number | undefined) =>
  `${_imageUrl}/starships/${id}.jpg`;

const _extractId = (item: Person | Planet | Starship) => {
  return getIdByUrl(item.url);
};
const _transformPlanet = (planet: Planet) => ({
  id: _extractId(planet),
  name: planet.name,
  population: planet.population,
  rotationPeriod: planet.rotation_period,
  diameter: planet.diameter,
});
const _transformPerson = (person: Person) => ({
  ...person,
  id: _extractId(person),
});
const _transformStarship = (starship: Starship) => ({
  ...starship,
  id: _extractId(starship),
});

const getIdByUrl = (url: string) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return parseInt(url.match(idRegExp)![1]);
};

export {
  getIdByUrl,
  _transformPerson,
  _transformPlanet,
  _transformStarship,
  _extractId,
  getPersonImageURL,
  getPlanetImageURL,
  getStarshipImageURL,
};
