import { NextResponse } from "next/server"
import { ConnectDB } from "../../../../lib/config/db"
import {writeFile} from 'fs/promises'
import BlogModel from "../../../../lib/models/BlogModel"
import { Buffer } from 'buffer';
const LoadDB = async()=>{
    await ConnectDB()
}
LoadDB()

export async function GET(request){
    
    return NextResponse.json({msg:'API working'})
}

// export async function POST(request){
//     const formData = await request.formData();
//     const timestamp = Date.now();
//     const image = formData.get('image');
//     const imageByteData = await image.arrayBuffer();
//     const buffer = Buffer.from(imageByteData);
//     const path = `./public/${timestamp}_${image.name}`
//     await writeFile(path,buffer);
//     const imgUrl = `/${timestamp}_${image.name}`
//     const blogData = {
//         title:`${formData.get('title')}`,
//         description:`${formData.get('description')}`,
//         category:`${formData.get('category')}`,
//         author:`${formData.get('author')}`,
//         image:`${imgUrl}`,
//         authorImg:`${formData.get('authorImg')}`,
//     }
//     await BlogModel.create(blogData)
//     console.log('Blog saved')
//     return NextResponse.json({success:true,msg:'Blog Added'})
// }

// Copy code
// export async function POST(request) {
//     try {
//       const formData = await request.formData();
//       const timestamp = Date.now();
      
//       const image = formData.get('image');
//       if (!image) {
//         return NextResponse.json({ success: false, msg: 'No image provided in form data' });
//       }
  
//       const imageByteData = await image.arrayBuffer();
//       const buffer = Buffer.from(imageByteData);
//       const path = `./public/${timestamp}_${image.name}`;
//       await writeFile(path, buffer);
  
//       const imgUrl = `/${timestamp}_${image.name}`;
//       const blogData = {
//         title: formData.get('title'),
//         description: formData.get('description'),
//         category: formData.get('category'),
//         author: formData.get('author'),
//         image: imgUrl,
//         authorImg: formData.get('authorImg'),
//       };
  
//       await BlogModel.create(blogData);
//       console.log('Blog saved');
//       return NextResponse.json({ success: true, msg: 'Blog Added' });
//     } catch (error) {
//       console.error('Error in POST /api/blog:', error);
//       return NextResponse.json({ success: false, msg: 'Something went wrong', error: error.message });
//     }
//   }

//   Copy Again for solving issue
export async function POST(request) {
    try {
      await ConnectDB(); // Ensure DB connection
      const formData = await request.formData();
      const timestamp = Date.now();
      
      const image = formData.get("image");
      if (!image) {
        return NextResponse.json({ success: false, msg: "No image provided in form data" });
      }
  
      const imageByteData = await image.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const publicDir = "./public";
      const path = `${publicDir}/${timestamp}_${image.name}`;
  
      await mkdir(publicDir, { recursive: true }); // Create public directory if it doesn't exist
      await writeFile(path, buffer);
  
      const imgUrl = `/${timestamp}_${image.name}`;
      const blogData = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        author: formData.get("author"),
        image: imgUrl,
        authorImg: formData.get("authorImg"),
      };
  
      console.log("Blog data to save:", blogData);
  
      const createdBlog = await BlogModel.create(blogData);
      console.log("Blog successfully saved:", createdBlog);
      return NextResponse.json({ success: true, msg: "Blog Added", blog: createdBlog });
    } catch (error) {
      console.error("Error in POST /api/blog:", error);
      return NextResponse.json({ success: false, msg: "Something went wrong", error: error.message });
    }
  }
  