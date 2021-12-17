import type { NextPage, GetServerSideProps } from 'next';
import client from 'src/apollo/client';
import { QUERY_CHARACTERS } from 'src/apollo/queries';
import { QueryVariables, CharactersData, Character } from 'src/interfaces';
import Pagination from 'src/components/Shared/Pagination'
import CharactersPage from 'src/components/Characters';
import Chips from 'src/components/Characters/Chips';


export const getServerSideProps: GetServerSideProps = async ({query, req}) => {
  const { page, status, species } = query;
  const currentPage = Number(page) || 1;

  const { data } = await client.query<CharactersData, QueryVariables>({
    query: QUERY_CHARACTERS,
    variables: {
      page: currentPage,
      status: (status === "all" || !status) ? "" : status.toString(),
      species: (species === "all" || !species) ? "" : species.toString()
    }
  });

  const referer = req.headers.referer;
  const previousPage = Number(referer?.slice(referer?.indexOf('=') + 1, (referer?.indexOf('&'))));
  const initialX = (!referer || !referer.includes("page")) ? -150 : (previousPage > currentPage ? 150 : -150);  
  
  return {
    props: { 
      characters: data.characters.results,
      allPages: data.characters.info.pages,
      initialX
    }
  }
};

interface Props {
  characters: Character[],
  allPages: number,
  initialX: number
};

const Characters: NextPage<Props> = ({characters, allPages, initialX}) => {
  
  return (
    <>
      <Pagination allPages={allPages} />
      <Chips forStatus={false} />
      <Chips forStatus={true} />
      <CharactersPage characters={characters} initialX={initialX}/>
    </>
    
  )
};

export default Characters;