import Stack from '@mui/material/Stack';
import MuiPagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
 

type PathnameType = "characters" | "episodes" | "locations";

interface Props {
  allPages: number
};

const Pagination: React.FC<Props> = ({allPages}) => {
  const router = useRouter();
  const { route } = router;
  const { page, status, species } = router.query;

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    const pathname: PathnameType = route.includes("characters") ? "characters" : route.includes("episodes") ? "episodes" : "locations";
    const speciesQuery = species ?? 'all';
    const statusQuery = status ?? 'all';

    router.push({
      pathname: `${pathname}`,
      query: pathname === "characters" ? {
        page: newPage,
        status: statusQuery,
        species: speciesQuery
      } : {
        page: newPage
      }
    });
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <MuiPagination 
       count={allPages}
       variant="outlined" 
       color="secondary" 
       size="large"
       page={Number(page) || 1}
       onChange={handleChange}
      />
    </Stack>
  )
};

export default Pagination;
