import Box from '@mui/material/Box';

interface Props {
  status: string
};

type ColorType = "success" | "error" | "primary"

const StatusIcon: React.FC<Props> = ({status}) => {
  const iconColor: ColorType = status === "alive" ? "success" : status === "dead" ? "error" : "primary";

  return <Box width={9} height={9} bgcolor={`${iconColor}.main`} borderRadius='50%' />
};

export default StatusIcon;
