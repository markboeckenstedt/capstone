import axios from "axios";
import { useState, useEffect } from "react";
import { ActivitiesIndex } from "./ActivitiesIndex";

export function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/activites.json").then((response) => {
      setActivities(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ActivitiesIndex activities={activities} />
    </main>
  );
}