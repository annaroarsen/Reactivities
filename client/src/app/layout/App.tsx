import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/ActivityDashboard';
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
      <ActivityDashboard activities={activities}/>

      </Container>
      
    </>  
  )
}

export default App
