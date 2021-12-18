import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Character } from 'src/interfaces';
import { characterCards } from 'src/variants';
import { motion, AnimatePresence } from 'framer-motion';
import CharacterCard from 'src/components/Characters/CharacterCard';


const sx = {
  position: "fixed" as "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  background: "#162b3be1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface Props {
  characters: Character[]
};

const Characters: React.FC<Props> = ({characters}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedItem = characters.find(item => item.id === selected);

  return (
    <Grid container p={8} spacing={4}>
      {characters.map((character) => (
        <Grid item xs={6} key={character.id}>
          <motion.div
           variants={characterCards}
           initial="hidden"
           animate="visible"
           exit="out"
           layoutId={character.id}
           onClick={() => setSelected(character.id)}
          >
            <CharacterCard character={character} selected={selected} setSelected={setSelected} />
          </motion.div>
        </Grid>
      ))}
      <Stack sx={selected ? sx : undefined}>
        <AnimatePresence>
          {selected && (
            <motion.div layoutId={selected}>
              <CharacterCard character={selectedItem!} selected={selected} setSelected={setSelected} />
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </Grid>
  )
};

export default Characters;