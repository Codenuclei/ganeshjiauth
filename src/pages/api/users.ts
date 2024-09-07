import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name'); // Replace with your actual database name
    const usersCollection = db.collection('users');

    switch (req.method) {
      // Create a new user
      case 'POST': {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
          return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = await usersCollection.insertOne({ name, email, password });
        return res.status(201).json(newUser.ops[0]);
      }

      // Get all users
      case 'GET': {
        const users = await usersCollection.find({}).toArray();
        return res.status(200).json(users);
      }

      // Update a user by ID
      case 'PUT': {
        const { id, name, email, password } = req.body;

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: 'Invalid user ID' });
        }

        const updatedUser = await usersCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { name, email, password } }
        );

        if (updatedUser.modifiedCount === 0) {
          return res.status(404).json({ message: 'User not found or data not modified' });
        }

        return res.status(200).json({ message: 'User updated successfully' });
      }

      // Delete a user by ID
      case 'DELETE': {
        const { id } = req.body;

        if (!ObjectId.isValid(id)) {
          return res.status(400).json({ message: 'Invalid user ID' });
        }

        const deletedUser = await usersCollection.deleteOne({ _id: new ObjectId(id) });

        if (deletedUser.deletedCount === 0) {
          return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
      }

      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
