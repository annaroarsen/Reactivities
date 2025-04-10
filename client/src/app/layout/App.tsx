import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
//import NavBar from 'NavBar.tsx';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

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

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    if(activity.id){
      //oppdater eksisterende aktivitet
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
    } else {
      //legg til ny aktivitet
      setActivities([...activities, {...activity, id: activities.length.toString()}])
    }
  }

  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline/>
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{mt: 3}}>
      <ActivityDashboard 
      activities={activities}
      selectActivity={handleSelectActivity}
      cancelSelectActivity={handleCancelActivity}
      selectedActivity={selectedActivity}
      editMode={editMode}
      openForm={handleOpenForm}
      closeForm={handleFormClose}
      submitForm={handleSubmitForm}
      />

      </Container>
      
    </Box>  
  )
}

export default App
