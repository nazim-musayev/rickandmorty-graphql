import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { portal } from 'src/variants';
import { motion } from 'framer-motion';
import LastSupper from 'src/components/Home/LastSupper';
import CategoryCards from 'src/components/Home/CategoryCards';


const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack height="100vh">
      {loading && (
        <Stack justifyContent="center" alignItems="center" bgcolor="primary.dark" height="100vh">
          <motion.picture variants={portal} initial="hidden" animate="visible" exit="out"> 
            <Image src="/200.webp" alt="Portal" width={225} height={225} />
          </motion.picture>
        </Stack>
      )}
      {!loading && (
        <>
          <LastSupper />
          <CategoryCards />
        </>
      )}
    </Stack>
  )
};

export default HomePage;
