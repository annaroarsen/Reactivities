import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
//import NavBar from 'NavBar.tsx';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities')
      .then(response => 
        setActivities(response.data))
    return () => {}
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  const handleCancelActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline/>
      <NavBar/>
      <Container maxWidth='xl' sx={{mt: 3}}>
      <ActivityDashboard 
      activities={activities}
      selectActivity={handleSelectActivity}
      cancelSelectActivity={handleCancelActivity}
      selectedActivity={selectedActivity}
      />

      </Container>
      
    </Box>  
  )
}

export default App
