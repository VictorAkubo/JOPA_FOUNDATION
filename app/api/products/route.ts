// app/api/products/route.js
import { NextResponse } from 'next/server';

export async function GET(request:Request) {
  const {searchParams} =new URL(request.url)
  let name = searchParams.get("name")
  let audit = searchParams.get("audit")
  return NextResponse.json({ name,audit});
}


