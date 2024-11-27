import { NextResponse } from "next/server"

export async function GET(request){
    console.log('Blog Api Hit')
    return NextResponse.json({msg:'API working'})
}