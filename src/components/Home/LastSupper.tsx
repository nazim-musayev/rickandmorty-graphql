import Stack from '@mui/material/Stack';
import Image from 'next/image';

const LastSupper: React.FC = () => {
  return (
    <Stack position="relative" width="100%" height="70%">
      <Image 
       src="/lastSupper.jpg" 
       alt="Rick and Morty - Last Supper" 
       layout="fill"
       objectFit='cover'
       priority
      />
    </Stack>
  )
};

export default LastSupper;
