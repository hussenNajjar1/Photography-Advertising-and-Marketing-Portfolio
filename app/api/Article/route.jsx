import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/ConnectMongoDb';
import Article from '../../../model/ArticleModels';
// import Contact from '../../../model/ContactModels';





export async function GET() {
    try {
        await connectMongoDB();
        const articles = await Article.find();
        return NextResponse.json({ success: true, articles });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Error fetching articles' }, { status: 500 });
    }
}
export async function POST(request) {
    try {

        await connectMongoDB();
        const { title, image } = await request.json();

        if (!title || !image) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        const newArticle = await Article.create({ title, image });

        return NextResponse.json({ message: "Article Created", contact: newArticle }, { status: 201 });
    }
    catch (error) {
        return NextResponse.json({
            message: 'Error creating Article',
            error: error.message
        },
            {
                status: 500
            })
    }
}





// // دالة لجلب عدد جميع المقالات مع عدد الحجوزات
// export const getAllArticlesWithReservationsCount = async () => {
//     try {
//         // جلب عدد جميع المقالات
//         const articlesCount = await Article.countDocuments();

//         // جلب عدد جميع الحجوزات (مثال افتراضي)
//         const reservationsCount = await Contact.countDocuments();

//         return { articlesCount, reservationsCount };
//     } catch (error) {
//         console.error('حدث خطأ في جلب عدد المقالات والحجوزات:', error);
//         throw new Error('حدث خطأ أثناء جلب عدد المقالات والحجوزات');
//     }
// };



