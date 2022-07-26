import { useState, useEffect } from "react";
import { exerciseOption, fetchData } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import Loader from '../components/Loader'
import {
  Box,
  Stack,
  CircularProgress,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import ExerciseCard from "../components/ExerciseCard";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";

const ExerciseDetail = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const [loaderOne, setLoaderOne] = useState(true);
  const [loaderTwo, setLoaderTwo] = useState(true);
  

  const { id } = useParams();
  const type = {
    background: "#FFE2B7",
    borderRadius: "50%",
    width: "82px",
    height: "82px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const options = {
    perPage: 1,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "1.5rem",
    autoWidth: true,
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseData(data);
    };
    const fetchSimilarExercises = async () => {
      setLoaderOne(true)
      let data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseData.target}`,
        exerciseOption
      );

      setSimilarExercises(data);
      setLoaderOne(false);
    };

    const fetchSimilarEquipment = async () => {
      setLoaderTwo(true);
      let data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseData.equipment}`,
        exerciseOption
      );

      setSimilarEquipment(data);
      setLoaderTwo(false);
    };

    fetchExerciseData();
 if (exerciseData.target) fetchSimilarExercises();
    if (exerciseData.equipment) fetchSimilarEquipment();
  }, [id, exerciseData.target, exerciseData.equipment]);
  return (
    <Stack gap="2rem">
      <Stack
        direction={{ xs: "column", md: "row" }}
        mt="3rem"
        p="0 .5rem"
        gap={{ xs: "2rem", md: "3rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={exerciseData.gifUrl}
          className="detail-image"
          alt={exerciseData.name}
        />
        <Stack direction="column" gap="2rem" p="1rem">
          <Typography
            variant="h2"
            sx={{
              fontSize: { lg: "80px", xs: "40px" },
              fontWeight: 700,
              textTransform: "capitalize",
            }}
          >
            {exerciseData.name}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "40px", xs: "20px" },
            }}
          >
            Exercises keep you strong: {exerciseData.name} bup one of the best{" "}
            <br /> exercises to target your {exerciseData.target}. It will help
            you improve your mood and gain energy
          </Typography>
          <Stack direction="row" alignItems="center" gap="1rem">
            <Box sx={type}>
              <img src={BodyPart} width="60px" />
            </Box>
            <Typography
              fontWeight={500}
              sx={{ fontSize: { lg: "40px", xs: "25px" } }}
              textTransform="capitalize"
            >
              {" "}
              {exerciseData.bodyPart}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap="1rem">
            <Box sx={type}>
              <img src={Target} width="60px" />
            </Box>
            <Typography
              fontWeight={500}
              sx={{ fontSize: { lg: "40px", xs: "25px" } }}
              textTransform="capitalize"
            >
             
              {exerciseData.target}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap="1rem">
            <Box sx={type}>
              <img src={Equipment} width="60px" />
            </Box>
            <Typography
              fontWeight={500}
              sx={{ fontSize: { lg: "40px", xs: "25px" } }}
              textTransform="capitalize"
            >
              {" "}
              {exerciseData.equipment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      
      
      

      <Stack gap="3rem" mt="3rem">
        <Box ml='1rem'>
          <Typography p="1rem 0" fontWeight="bold" variant="h4">
            Similar <span style={{color:'#FF2625'}}>Target Muscle</span> Exercises
          </Typography>
          {loaderOne ? (
            <Loader />
          ) : (
            <Splide options={options} >
              {similarExercises?.map((exercise, index) => (
                <SplideSlide key={index} onClick={()=> (window.scrollTo({
           
          left:0, 
          behavior:'smooth'
          
        }))}>
                  <ExerciseCard exercise={exercise} />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </Box>
        
        <Box ml= '1rem'>
          <Typography p="1rem 0" fontWeight="bold" variant="h4">
            Similar <span style={{color:'#FF2625'}}>Equipment</span> Exercises
            
          </Typography>
          {loaderTwo ? (
            <Loader />
          ) : (
            <Splide options={options}>
              {similarEquipment?.map((exercise, index) => (
                <SplideSlide key={index} onClick={()=> (window.scrollTo({
           
          left:0, 
          behavior:'smooth'
          
        }))}>
                  <ExerciseCard exercise={exercise} />
                </SplideSlide>
              ))}
            </Splide>
          )}
        </Box>
      </Stack>
    </Stack>
  );
};
export default ExerciseDetail;
