import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use an environment variable in production

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    name,
    email,
    password,
    fatherName,
    motherName,
    mobileNumber,
    document, // Updated to match the form
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !fatherName ||
    !motherName ||
    !mobileNumber ||
    !document // Updated to match the form
  ) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('your-database-name'); // Replace with your database name
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password and any other sensitive fields
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedDocument = document ? await bcrypt.hash(document, 10) : undefined;

    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword,
      fatherName,
      motherName,
      mobileNumber,
      document: hashedDocument, // Updated to match the form
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: result.insertedId,
        email,
        document: hashedDocument, // Updated to match the form
      },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
