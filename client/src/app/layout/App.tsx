import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, CssBaseline, List, ListItem, ListItemText } from '@mui/material';
import NavBar from './NavBar';
//import NavBar from 'NavBar.tsx';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities')
      .then(response => 
        setActivities(response.data))
    return () => {}
  }, [])

  return (
    <>
      <CssBaseline/>
      <NavBar/>
      <Container maxWidth='xl' sx={{mt: 3}}>
      <List>
        {activities.map((activity) =>
          <ListItem key={activity.id}>
           <ListItemText>{activity.title}</ListItemText> 
          </ListItem>
        )}
      </List>

      </Container>
      
    </>  
  )
}

export default App
