import Link from 'next/link';
import { useRouter } from 'next/router';
import MuiLink from '@mui/material/Link';


const Navs: React.FC = () => {
  const { route } = useRouter();
  const navs = [ "Characters", "Episodes", "Locations" ];

  return (
    <>
      {navs.map((item, idx) => (
        <Link href={`${item.toLowerCase()}`} passHref key={idx}>
          <MuiLink 
           variant="overline" 
           fontSize={20} fontWeight={600} 
           underline={route.includes(item.toLowerCase()) ? "always" : "hover"}
           color={route.includes(item.toLowerCase()) ? "secondary" : "primary"}
          >
            {item}
          </MuiLink>
        </Link>
      ))}
    </>
  )
};

export default Navs;