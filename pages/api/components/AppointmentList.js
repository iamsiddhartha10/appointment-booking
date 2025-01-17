export default function AppointmentList({ appointments }) {
    return (
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.name} - {appointment.email} - {new Date(appointment.date).toLocaleString()}
          </li>
        ))}
      </ul>
    );
  }
  