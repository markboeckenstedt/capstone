import { useState, useEffect } from "react";
import axios from "axios";

export function HomePage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/activities.json")
      .then((response) => {
        setActivities(response.data);  // Set activities in state
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
      });
  }, []);  // Empty dependency array to fetch once on mount

  return (
    <div>
      <h1>Recent Activities</h1>
      {activities.length > 0 ? (
        activities.map((activity) => (
          <div key={activity.id}>
            <p>{activity.communication_type}: {activity.notes} on {new Date(activity.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No recent activities.</p>
      )}
    </div>
  );
}