import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StyledImage = styled(Image)({
  borderRadius: "20px 0 0 20px"
});

interface Props {
  image: string
};

const CustomImage: React.FC<Props> = ({image}) => {
  return <StyledImage src={image} alt="Alt" width={220} height={230} placeholder="blur" blurDataURL={image} />
};

export default CustomImage;
