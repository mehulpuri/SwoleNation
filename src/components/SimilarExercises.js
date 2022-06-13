import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px' , xs:'0'}}}>
      <Typography mb={6} variant="h3">Exercises That Target Same Muscle Group</Typography>
      <Stack mb={5} direction="row" sx={{p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? 
        <HorizontalScrollBar data={targetMuscleExercises} />
        :<Loader /> }
      </Stack>

      <Typography mb={6} variant="h3">Exercises That Use The Same Equipment</Typography>
      <Stack mb={5} direction="row" sx={{p:'2', position:'relative'}}>
        {equipmentExercises.length ? 
        <HorizontalScrollBar data={equipmentExercises.slice(5)} />
        :<Loader /> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises