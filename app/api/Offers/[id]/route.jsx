import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/ConnectMongoDb';
import Offers from '../../../../model/OffersModels';
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    await connectMongoDB();
    const deletedOffers = await Offers.findByIdAndDelete(id);

    if (!deletedOffers) {
      return NextResponse.json({ message: 'Offers not found' }, { status: 404 });
    }

    return NextResponse.json({ message: "Offers deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error deleting Offers' }, { status: 500 });
  }
}

// PUT function in API route
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectMongoDB();
    const updatedOffers= await Offers.findByIdAndUpdate(id, body, { new: true });
    if (!updatedOffers) {
      return NextResponse.json({ message: 'Offers not found' }, { status: 404 });
    }
    return NextResponse.json({ Contact: updatedOffers }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating Offers' }, { status: 500 });
  }
}



export async function GET(request, { params }) {
  try {
      const { id } = params;
      await connectMongoDB();

      const Offerss = await Offers.findById(id);
      if (!Offerss) {
          return NextResponse.json({ message: 'Offers not found' }, { status: 404 });
      }
      return NextResponse.json({ Offerss }, { status: 200 });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error fetching Offers data' }, { status: 500 });
  }
}
