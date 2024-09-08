// pages/api/candidates.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb'; // Ensure your MongoDB client is correctly set up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('your-database-name'); // Replace with your database name
  const candidatesCollection = db.collection('runneres');

  try {
    if (req.method === 'GET') {
      // Fetch all candidates
      const candidates = await candidatesCollection.find().toArray();
      res.status(200).json(candidates);
    } else if (req.method === 'POST') {
      // Handle voting
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: 'Candidate ID is required' });
      }

      await candidatesCollection.updateOne(
        { id },
        { $inc: { votes: 1 } } // Assuming you have a `votes` field
      );
      res.status(200).json({ message: 'Vote registered successfully' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
