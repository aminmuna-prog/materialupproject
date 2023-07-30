 import React from 'react';
 import {Card, CardHeader, Avatar, IconButton,
    CardMedia, CardContent, CardActions, Typography, Checkbox} from '@mui/material';
 import ShareIcon from '@mui/icons-material/Share';
 import MoreVertIcon from '@mui/icons-material/MoreVert';
 import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
 import Favorite from '@mui/icons-material/Favorite';

const Post = ({title, avatar, subheader, image, alt}) => {
  return (
   
    <Card sx={{margin:2}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary'}} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="20%"
        image={image}
        alt={alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
    
    </Card> 
    
  )
}

export default Post
