import type { NextPage, GetServerSideProps } from 'next';
import client from 'src/apollo/client';
import { QUERY_CHARACTERS } from 'src/apollo/queries';
import { QueryVariables, CharactersData, Character } from 'src/interfaces';
import Pagination from 'src/components/Shared/Pagination'
import CharactersPage from 'src/components/Characters';
import Chips from 'src/components/Characters/Chips';
import Meta from 'src/components/Shared/Meta';


export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const { page, status, species } = query;

  const { data } = await client.query<CharactersData, QueryVariables>({
    query: QUERY_CHARACTERS,
    variables: {
      page: Number(page) || 1,
      status: (status === "all" || !status) ? "" : status.toString(),
      species: (species === "all" || !species) ? "" : species.toString()
    }
  });

  const names: string[] = [];
  data.characters.results.map((item) => {
    names.push(item.name)
  });
  
  return {
    props: { 
      characters: data.characters.results,
      allPages: data.characters.info.pages,
      names,
    }
  }
};

interface Props {
  characters: Character[],
  allPages: number,
  names: string[]
};

const Characters: NextPage<Props> = ({characters, allPages, names}) => {
  
  return (
    <>
      <Meta title="Characters" keywords={names.join(",")} />
      <Pagination allPages={allPages} />
      <Chips forStatus={false} />
      <Chips forStatus={true} />
      <CharactersPage characters={characters} />
    </>
  )
};

export default Characters;