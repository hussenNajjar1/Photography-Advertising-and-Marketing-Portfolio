import connectMongoDB from '../../../libs/ConnectMongoDb'
import { NextResponse } from 'next/server'
import Article from '../../../model/ArticleModels'
import Contact from '../../../model/ContactModels'
import Offers from '../../../model/OffersModels'


export async function GET() {
    try {
        await connectMongoDB();
        const articlesCount = await Article.countDocuments();
        const contactsCount = await Contact.countDocuments();
        const offersCount = await Offers.countDocuments();
        return NextResponse.json({
            articlesCount,
            contactsCount,
            offersCount,
        }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({
            message: 'Error fetching data'
        }, {
            status: 500
            
        })
    }
}