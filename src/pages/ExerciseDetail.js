import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData' 
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises  from '../components/SimilarExercises'

const ExcerciseDetail = () => {
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [exerciseDetail, setExerciseDetail] = useState({});

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      //exercise detail call
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      //yt query call
      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      //similar call
      const targetMuscleExercisesData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }
    fetchExercisesData();
  }, [id])
  

  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises equipmentExercises={equipmentExercises} targetMuscleExercises={targetMuscleExercises} />
    </Box>
  )
}

export default ExcerciseDetail