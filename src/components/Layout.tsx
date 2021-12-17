import Stack from '@mui/material/Stack'
import { useRouter } from 'next/router';
import Navs from 'src/components/Navs';


const Layout: React.FC = ({children}) => {
  const { route } = useRouter();

  return (
    <> 
      {route !== "/" && (
        <Stack direction="row" py={5} px={10} spacing={4} justifyContent="flex-end">
          <Navs />
        </Stack>
      )}
      <main>
        {children}
      </main>
    </>
  )
};

export default Layout