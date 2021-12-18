import Head from 'next/head';

interface Props {
  title?: string,
  keywords?: string, 
  description?: string
};

const Meta: React.FC<Props> = ({
   title = "Rick And Morty", keywords = "rick, morty, rick and morty, pickle rick, wubba lubba dub dub", 
   description = "An animated series on adult-swim about the infinite adventures of Rick, a genius alcoholic and careless scientist, with his grandson Morty, a 14 year-old anxious boy who is not so smart. Together, they explore the infinite universes; causing mayhem and running into trouble."
  }) => {
    
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{title}</title>
    </Head>
  )
};

export default Meta;