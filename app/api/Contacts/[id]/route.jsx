import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/ConnectMongoDb'
import Contact from '../../../../model/ContactModels';

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    await connectMongoDB();
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ message: "Contact deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error deleting contact' }, { status: 500 });
  }
}

// PUT function in API route
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectMongoDB();
    const updatedContact = await Contact.findByIdAndUpdate(id, body, { new: true });
    if (!updatedContact) {
      return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
    }
    return NextResponse.json({ Contact: updatedContact }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating Contact' }, { status: 500 });
  }
}



export async function GET(request, { params }) {
  try {
      const { id } = params;
      await connectMongoDB();

      const contact = await Contact.findById(id);
      if (!contact) {
          return NextResponse.json({ message: 'Contact not found' }, { status: 404 });
      }
      return NextResponse.json({ contact }, { status: 200 });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error fetching contact data' }, { status: 500 });
  }
}
