import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/ConnectMongoDb'
import Offers from '../../../model/OffersModels';


export async function GET() {
  try {
    await connectMongoDB(); 
    const Offerss = await Offers.find(); 
    return NextResponse.json({ Offerss });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching Offers' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectMongoDB();
    const { title, description, price } = await request.json();

    if (!title || !description || !price ) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const newOffers = await Offers.create({ title, description, price });

    return NextResponse.json({ message: "create Offers", contact: newOffers }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating Offers' }, { status: 500 });
  }
}


