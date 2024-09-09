export function ActivitiesIndex({ activities }) {
  return (
    <div>
      <h1>All Activities</h1>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h2>{activity.communication_type}</h2>
          <p>{activity.notes}</p>
          <p>Date: {new Date(activity.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}