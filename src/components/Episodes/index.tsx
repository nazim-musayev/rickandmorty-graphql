import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { episodeCards } from 'src/variants';
import { motion } from 'framer-motion';
import { Episode } from 'src/interfaces';


interface Props {
  episodes: Episode[]
};

const EpisodeCards: React.FC<Props> = ({episodes}) => {
  return (
    <Grid container p={8} spacing={4} position="relative">
      {episodes.map(({id, name, air_date, episode}) => (
        <Grid item xs={6} key={id}>
          <motion.div variants={episodeCards} initial="hidden" animate="visible" exit="out">
            <Stack bgcolor="info.main" borderRadius={5} width={600} p={2} spacing={2}>
              <Typography variant="h5" fontWeight={700} color="secondary">
                {name}
              </Typography>
              <Typography color="grey.400" variant="subtitle2">
                Season, episode:
              </Typography>
              <Typography>
                {episode}
              </Typography>
              <Typography color="grey.400" variant="subtitle2">
                Aired:
              </Typography>
              <Typography>
                {air_date}
              </Typography>
            </Stack>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  )
};

export default EpisodeCards;