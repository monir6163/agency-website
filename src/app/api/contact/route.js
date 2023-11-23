import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSONBody = await req.json();
  try {
    const rawResponse = await axios.post(
      "http://localhost:3000/api/mainApi/contact",
      JSONBody
    );
    return NextResponse.json({ status: "success" });
  } catch (e) {
    return NextResponse.json(e);
  }
}
