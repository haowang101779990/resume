import { useState, useEffect } from 'react'
import avatarImg from './assets/IMG_5473.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {MainContent} from './components/MainContent/MainContent.jsx'
import './App.scss'

function MyAvatar(){
  return (
    <img src={avatarImg} alt="avatar" className="avatar"/>
  )
}



function Contact(){
  return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="tomwangoeuf@126.com" />
      </ListItem>
      
    </List>
    </>
  );
}


function App() {
 
  const THEME = createTheme({
   typography: {
    "fontFamily": "lora"
   }
});

  return (
    <ThemeProvider theme={THEME}>
    <div className="app-container flex flex-row">
      <div className="left basis-1/4">
        <div>
          <MyAvatar/>
        </div>
        <div>
          <Contact/>
        </div>
          
      </div>
      <div className="right">
          <MainContent/>
      </div>
     
    </div>
    </ThemeProvider>
  )
}

export default App
