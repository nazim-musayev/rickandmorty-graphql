// Shared

export interface QueryVariables {
  page: number,
  status?: string,
  species?: string
};

export interface Info {
  pages: number
};

export interface Character {
  id: string,
  name: string,
  species: string,
  status: string,
  image: string,
  location: {
    name: string
  },
  episode: Array<{
    name: string
  }>
};

export interface CharactersData {
  characters: {
    info: Info,
    results: Character[]
  }
};

export interface Location {
  id: string,
  name: string,
  type: string,
  dimension: string,
  residents: Array<{
    name: string
  }>
}

export interface LocationsData {
  locations: {
    info: Info,
    results: Location[]
  }
};

export interface Episode {
  id: string,
  name: string,
  air_date: string,
  episode: string
};

export interface EpisodesData {
  episodes: {
    info: Info,
    results: Episode
  }
};