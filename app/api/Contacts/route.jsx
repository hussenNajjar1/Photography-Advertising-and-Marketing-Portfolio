import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/ConnectMongoDb';
import Contact from '../../../model/ContactModels';


export async function GET() {
  try {
    await connectMongoDB(); // Connect to MongoDB
    const contacts = await Contact.find(); // Fetch contacts from MongoDB
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching contacts' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectMongoDB();
    const { name, phone, address, message } = await request.json();

    if (!name || !phone || !address || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const newContact = await Contact.create({ name, phone, address, message });

    return NextResponse.json({ message: "Post Created", contact: newContact }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}


export async function DELETE(request)
{
  NextResponse.json({message:'hero'})
}
