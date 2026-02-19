import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const { type, title, author, description, submittedBy } = await request.json();

    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const submission = await db.collection('bookSubmissions').insertOne({
      type,
      title,
      author: author || '',
      description,
      submittedBy: submittedBy || 'Anonymous',
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: submission.insertedId });
  } catch (error) {
    console.error('Error saving book submission:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    
    const submissions = await db.collection('bookSubmissions')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}
