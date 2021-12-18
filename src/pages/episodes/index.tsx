import type { NextPage, GetServerSideProps } from 'next';
import client from 'src/apollo/client';
import { QUERY_EPISODES } from 'src/apollo/queries';
import { QueryVariables, EpisodesData, Episode } from 'src/interfaces';
import Pagination from 'src/components/Shared/Pagination';
import EpisodeCards from 'src/components/Episodes';
import Meta from 'src/components/Shared/Meta';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = Number(context.query.page) || 1;
  const { data } = await client.query<EpisodesData, QueryVariables>({
    query: QUERY_EPISODES,
    variables: {
      page
    }
  });
  
  return {
    props: { 
      episodes: data.episodes.results,
      allPages: data.episodes.info.pages
    }
  }
};

interface Props {
  episodes: Episode[],
  allPages: number
};

const EpisodesPage: NextPage<Props> = ({episodes, allPages}) => {
  return (
      <>
        <Meta title="Episodes" />
        <Pagination allPages={allPages} />
        <EpisodeCards episodes={episodes} />
      </>
  
  )
};

export default EpisodesPage;