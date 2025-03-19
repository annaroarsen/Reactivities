import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/activities')
      .then(response => {
        setActivities(response.data)
    })
  }, [])

  return (
    <div>
      <h3 className="app" style={{ color: 'red'}}> Reactivities</h3>
      <ul>
        {activities.map((activity) =>
          <li key={activity.id}>
            {activity.title}
          </li>
        )}
      </ul>
    </div>  
  )
}

export default App
