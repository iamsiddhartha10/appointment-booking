import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // Import Supabase client

export default function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Insert data into Supabase
    const { data, error } = await supabase.from("appointments").insert([
      { name, email, date, time },
    ]);

    if (error) {
      console.error("Error:", error);
      alert("Failed to book appointment");
    } else {
      alert("Appointment booked successfully!");
      setName("");
      setEmail("");
      setDate("");
      setTime("");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required /><br />
        <button type="submit" disabled={loading}>{loading ? "Booking..." : "Book Appointment"}</button>
      </form>
    </div>
  );
}
