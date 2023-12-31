import { Box, Typography, Avatar, AvatarGroup, ImageList, itemData, 
  ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider} from '@mui/material'

import React from 'react'

const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    
  
  ];
  
  return (
    <Box  flex={2} p={2}
    sx={{display: {xs: 'none', sm: 'block'}}}
    
    >
      <Box position="fixed" width={300}>
            <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
            {/* online friends */}
            <div justifyContent="start">
              <AvatarGroup total={15}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
            </div>
            <Typography variant='h6' fontWeight={100} mt={3}>Lates Photos</Typography>

            {/* latest photos */}
            <ImageList cols={3} rowHeight={100} gap={2}>
              {itemData.map((item) => (
              <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
            ))}
          </ImageList>
          <Typography variant='h6' fontWeight={100} mt={3}>Lates Conversation</Typography>
            {/* latest conversation*/}


          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          
           
        </List>
      </Box>
     
    </Box>
  )
}

export default Rightbar

