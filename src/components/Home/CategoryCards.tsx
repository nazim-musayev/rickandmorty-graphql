import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { categoryVariants } from 'src/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categoryStyle = {
  position: "relative" as "relative", 
  flexGrow: 1, 
  overflow: "hidden", 
  cursor: "pointer"
};

const CategoryCards: React.FC = () => {
  const cards = [
    {
      title: "characters",
      image: "/characters.jpg"
    },
    {
      title: "episodes",
      image: "/episodes.png"
    },
    {
      title: "locations",
      image: "/locations.jpg"
    }
  ];

  return (
    <Stack direction="row" width="100%" height="30%" overflow="hidden">
      {cards.map(({title, image}) => (
        <Link href={`/${title}`} passHref key={title}>
          <motion.div 
           variants={categoryVariants}
           style={categoryStyle}
           whileHover="hover"
           whileTap="tap"
          >
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
            <Stack 
             position="absolute" 
             bgcolor="text.secondary" 
             width="100%" 
             height="100%" 
             justifyContent="center" 
             alignItems='center'
            >
              <Typography
               fontSize={28} 
               color="darkkhaki" 
               align="center" 
               border={1} 
               borderColor="darkkhaki"
               width="275px"
              >
                {title}
              </Typography>
            </Stack>
          </motion.div>
        </Link>
      ))}
    </Stack>
  )
}

export default CategoryCards;