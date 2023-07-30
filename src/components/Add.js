import React, { useState } from 'react'
import { Tooltip, Modal, Box, Typography, Avatar, TextField, Stack, 
  Button, ButtonGroup} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",

})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick ={e => setOpen(true)} 
        sx={{position: 'fixed', 
        bottom: 20,
        left: {xs: "calc(50% - 25px)", md: 30}
      }}
      >
      <Fab color="primary" aria-label="add">
         <AddIcon />
      </Fab>
      </Tooltip>
      <StyledModal
          open={open}
          onClose ={e => setOpen(false)}
         
        >
          <Box width={400} 
               
              bgcolor={"background.default"}
              color={"text.primary"}
              p={3}
              borderRadius={5}>
              <Typography variant='h6' color='gray' textAlign="center">
                Create Post
              </Typography>
              <UserBox>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </UserBox>
              <TextField
                sx={{width: "100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                defaultValue="What's on your mind"
                variant="standard"
              />
              <Stack direction="row" gap={1} mt={2} mb={2}>
                <SentimentSatisfiedAltIcon />
                <MoodBadIcon />
                <EmojiEmotionsIcon />
              </Stack>
              <ButtonGroup variant="contained" 
                  aria-label="outlined primary button group"
                  fullWidth
              >
                <Button>Post</Button>
                <Button sx={{width: '100px'}}><DateRangeIcon></DateRangeIcon></Button>
              
              </ButtonGroup>
          </Box>


      </StyledModal>
    </>
  )
}

export default Add
