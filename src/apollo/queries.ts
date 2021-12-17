import { gql } from '@apollo/client';


export const QUERY_CHARACTERS = gql`
  query getCharacters($page: Int!, $status: String, $species: String) {
    characters( page: $page, filter: { status: $status, species: $species }) {
      info {
        pages
      }
      results {
		    id
        name
        status
        species
  		  image
        location {
          name
        }
        episode {
			  	name
        }
      }
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query getLocations($page: Int!) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          name
        }
      }
    }
  }
`;

export const QUERY_EPISODES = gql`
  query getEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        air_date,
        episode
      }
    }
  }
`;