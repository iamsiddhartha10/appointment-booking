import { useState } from "react";

export default function AppointmentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, date });
    setName("");
    setEmail("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}
