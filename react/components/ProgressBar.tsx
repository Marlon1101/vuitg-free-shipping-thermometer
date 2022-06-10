import React from 'react';
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

type Props = {
  remainingPercentage: number
}

const ProgressBar = ({remainingPercentage}: Props)=> {
  console.log(remainingPercentage)
  const LinearProgressWithLabel = (props: LinearProgressProps & {value: number})=> {
  return(
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  )
  }
  return(
    <Box sx={{width: "100%"}}>
      <LinearProgressWithLabel value={remainingPercentage} />
    </Box>
  )
}


export default ProgressBar
