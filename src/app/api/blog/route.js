import { NextResponse } from "next/server"
import { ConnectDB } from "../../../../lib/config/db"
import {writeFile} from 'fs/promises'

const LoadDB = async()=>{
    await ConnectDB()
}
LoadDB()

export async function GET(request){
    console.log('Blog Api Hit')
    return NextResponse.json({msg:'API working'})
}

export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path,buffer);
    const imgUrl = `/${timestamp}_${image.name}`
    console.log(imgUrl)
    return NextResponse.json(imgUrl)
}