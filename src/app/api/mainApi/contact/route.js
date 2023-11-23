import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSONBody = await req.json();
  const { fname, lname, email, msg } = JSONBody;
  return NextResponse.json(
    { status: "success", data: JSONBody },
    { status: 200 }
  );
}
