import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/router';

interface Props {
  forStatus: boolean
};

const Chips: React.FC<Props> = ({forStatus}) => {
  const router = useRouter();
  const { status, species } = router.query;
  const activeStatus = (status === "all" || !status) ? "all" : status;
  const activeSpecies = (species === "all" || !species) ? "all" : species;
  const activeChip = forStatus ? activeStatus : activeSpecies

  const statusChips = ["all", "alive", "dead", "unknown"];

  const speciesChips = ["all", "human", "alien", "humanoid", "animal", "robot", "mythological creature", "cronenberg", "unknown"];

  const handleClick = (label: string) => {
    if(label === activeChip) return;
   
    router.push({
      pathname: `/characters`,
      query: {
        page: 1,
        status: forStatus ? label : activeStatus,
        species: forStatus ? activeSpecies : label
      }
    });
  };

  return (
    <Stack direction="row" spacing={2} ml={10} mt={5} alignItems='center'>
      <Typography variant="overline" fontSize={14}>
        {forStatus ? "status" : "species"} :
      </Typography>
      <Stack direction="row" spacing={1}>
        {(forStatus ? statusChips : speciesChips).map((label, idx) => (
          <Chip 
           key={label} 
           label={label} 
           color="secondary"
           clickable={activeChip !== label}  
           onClick={() => handleClick(label)} 
           variant={activeChip === label ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Chips;
