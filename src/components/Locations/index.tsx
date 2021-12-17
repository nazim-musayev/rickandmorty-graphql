import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { locationCards } from 'src/variants';
import { motion } from 'framer-motion';
import { Location } from 'src/interfaces';


interface Props {
  locations: Location[]
};

const LocationCards: React.FC<Props> = ({locations}) => {
  return (
    <Grid container p={8} spacing={4} position="relative">
      {locations.map(({id, name, type, dimension, residents}) => (
        <Grid item xs={6} key={id}>
          <motion.div variants={locationCards} initial="hidden" animate="visible" exit="out">
            <Stack bgcolor="info.main" borderRadius={5} width={600} p={2} spacing={2}>
              <Typography variant="h5" fontWeight={700} color="secondary">
                {name}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {type}
              </Typography>
              <Typography color="grey.400" variant="subtitle2">
                Dimension:
              </Typography>
              <Typography>
                {dimension}
              </Typography>
              <Typography color="grey.400" variant="subtitle2">
                Residents:
              </Typography>
              <Typography pl={2}>
                {residents.length}
              </Typography>
            </Stack>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  )
};

export default LocationCards;
