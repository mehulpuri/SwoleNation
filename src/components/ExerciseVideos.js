import React from 'react'
import {Box, Stack , Typography} from '@mui/material'
import Loader from './Loader';


const ExerciseVideos = ({exerciseVideos,  name}) => {
  if(!exerciseVideos.length) return <Loader />;

  return (
    <Box p="20px" sx={{ mt:{lg:'200px', xs:'20px'}}}>
      <Typography textTransform="capitalize" variant="h4" mb="33px">
        Watch more <span style={{color:'#ff2625'}}>{name}</span> exercise videos 
      </Typography>
      <Stack justifyContent='flex-start' flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:'row'}, gap:{lg:'110px' , xs:'0'}}}>
        {exerciseVideos?.slice(0,3).map((item,index) => (
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          >
            <img className='exercise-thumb' src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000"> {item.video.title}</Typography>
              <Typography variant="h6" color="#808080"> {item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos