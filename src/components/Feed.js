import { Box} from '@mui/material';
import React from 'react'
import Post from './Post';
import img from "../assets/christopher.jpg";
import house from '../assets/house.jpg';
import car from '../assets/car.jpg';
import food from '../assets/food.jpg';
import flower from '../assets/flower.jpg'
const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post 
        title = 'John Kerry'
        avatar="J"
        subheader="September 14, 2022"
        image ={img}
        alt ="technology"
      ></Post>
      <Post 
       title = 'Muna Amin'
       avatar="M"
       subheader="April 04, 2023"
       image ={car}
       alt ="car"
      ></Post>
      <Post 
        title = 'Maruf Amin'
        avatar="M"
        subheader="May 07, 2023"
        image ={house}
        alt ="house"
      ></Post>
      <Post 
        title = 'Asma begum'
        avatar="A"
        subheader="June 25, 2023"
        image ={food}
        alt ="food"
      ></Post>
      <Post 
        title = 'Shojib Ahmed'
        avatar="S"
        subheader="Jan 12, 2023"
        image ={flower}
        alt ="flower"
      ></Post>
    </Box>
  )
}

export default Feed
