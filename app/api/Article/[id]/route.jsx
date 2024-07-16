
import { NextResponse } from 'next/server';
import Article from '../../../../model/ArticleModels';
import connectMongoDB from '../../../../libs/ConnectMongoDb'


export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    await connectMongoDB();
    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json({ message: "Article deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error deleting Article' }, { status: 500 });
  }
}

// PUT function in API route
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectMongoDB();
    const updatedArticle = await Article.findByIdAndUpdate(id, body, { new: true });
    if (!updatedArticle) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json({ Contact: updatedArticle }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error updating Article' }, { status: 500 });
  }
}



export async function GET(request, { params }) {
  try {
      const { id } = params;
      await connectMongoDB();

      const SingleArticle = await Article.findById(id);
      if (!SingleArticle) {
          return NextResponse.json({ message: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json({ SingleArticle }, { status: 200 });
  } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error fetching Article data' }, { status: 500 });
  }
}
