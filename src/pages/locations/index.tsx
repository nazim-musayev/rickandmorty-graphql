import type { NextPage, GetServerSideProps } from 'next';
import client from 'src/apollo/client';
import { QUERY_LOCATIONS } from 'src/apollo/queries';
import { QueryVariables, LocationsData, Location } from 'src/interfaces';
import Pagination from 'src/components/Shared/Pagination';
import LocationCards from 'src/components/Locations';
import Meta from 'src/components/Shared/Meta';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query.page) || 1;
  const { data } = await client.query<LocationsData, QueryVariables>({
    query: QUERY_LOCATIONS,
    variables: {
      page
    }
  });
  
  return {
    props: { 
      locations: data.locations.results,
      allPages: data.locations.info.pages
    }
  }
};

interface Props {
  locations: Location[],
  allPages: number
};

const LocationsPage: NextPage<Props> = ({locations, allPages}) => {
  return (
    <>
      <Meta title="Locations" />
      <Pagination allPages={allPages} />
      <LocationCards locations={locations} />
    </>
  )
};

export default LocationsPage;
