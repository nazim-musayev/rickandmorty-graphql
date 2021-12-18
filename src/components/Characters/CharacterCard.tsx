import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CustomImage from 'src/components/Characters/CustomImage';
import StatusIcon from 'src/components/Characters/StatusIcon';
import { Character } from 'src/interfaces';
import { Dispatch, SetStateAction } from 'react';
import { ImCancelCircle} from 'react-icons/im';


interface Props {
  character: Character,
  selected: string | null,
  setSelected: Dispatch<SetStateAction<string | null>>
};

const CharacterCard: React.FC<Props> = ({character, selected, setSelected}) => {
  const { id, image, name, status, species, location, episode } = character; 

  return ( 
    <Stack 
     sx={{ cursor: selected ? "auto" : "pointer"}}
     position="relative"
     direction="row" 
     bgcolor="info.main" 
     borderRadius={5} 
     spacing={2} 
     width={600} 
    >
      <CustomImage image={image} />
      <Stack py={2} spacing={1}>
        <Typography variant="h5" fontWeight={700} color="secondary"  >
          {name}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <StatusIcon status={status.toLowerCase()} />
          <Typography fontWeight={600}>
            {status} - {species}
          </Typography>
        </Stack>
        <Typography color="grey.400" variant="subtitle2">
          Last known location:
        </Typography>
        <Typography>
          {location.name}
        </Typography>
        <Typography color="grey.400" variant="subtitle2">
          First seen in:
        </Typography>
        <Typography>
          {episode[0].name}
        </Typography>
      </Stack>
      {selected === id && (
        <Stack position="absolute" right={0} p={2}>
          <IconButton sx={{color: "aquamarine"}} onClick={() => setSelected(null)}>
            <ImCancelCircle />
          </IconButton>
        </Stack>
      )}
    </Stack>
  )
};

export default CharacterCard;