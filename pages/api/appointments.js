import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, date } = req.body;
    const appointment = await prisma.appointment.create({
      data: { name, email, date: new Date(date) },
    });
    return res.status(201).json(appointment);
  }

  if (req.method === "GET") {
    const appointments = await prisma.appointment.findMany();
    return res.status(200).json(appointments);
  }

  res.status(405).json({ message: "Method not allowed" });
}
