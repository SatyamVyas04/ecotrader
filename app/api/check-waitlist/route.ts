// app/api/check-waitlist/route.ts
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Connect to database
    const { db } = await connectToDatabase();

    // Check if email exists in waitlist
    const existingEntry = await db.collection("waitlist").findOne({
      email: email.toLowerCase().trim(),
    });

    return NextResponse.json({
      exists: !!existingEntry,
    });
  } catch (error) {
    console.error("Waitlist check error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
