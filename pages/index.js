import { useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

export default function Home() {
  const [appointments, setAppointments] = useState([]);

  const handleAppointmentSubmit = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Appointment Booking</h1>
      <AppointmentForm onSubmit={handleAppointmentSubmit} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}