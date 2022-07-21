import {  Stack, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'





let ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`}
    onClick={() => (
       window.scrollTo({
          top:0, 
          behavior:'smooth'
        }))}
    className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' /> 
      <Stack direction='row'> 
        <Button sx={{
          ml:'21px',
          color:'#fff',
          background:'#ffa9a9',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform: 'capitalize'
        }}> 
        {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml:'21px',
          color:'#fff',
          background:'#fcc757',
          fontSize:'14px',
          borderRadius:'20px',
          textTransform: 'capitalize'
        }}> 
        {exercise.target}
        </Button>
      </Stack> 
      <Typography ml='21px' mt='11px' pb='10px' textTransform='capitalize' color='#000' fontWeight='bold' fontSize='22px' > 
         {exercise.name}
      </Typography>
    
    </Link>
    )
}
export default ExerciseCard