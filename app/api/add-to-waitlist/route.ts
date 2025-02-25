// app/api/add-to-waitlist/route.ts
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

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Connect to database
    const { db } = await connectToDatabase();

    // Check if email already exists
    const existingEntry = await db.collection("waitlist").findOne({
      email: normalizedEmail,
    });

    if (existingEntry) {
      return NextResponse.json(
        { success: false, error: "Email already in waitlist" },
        { status: 400 },
      );
    }

    // Add to waitlist
    const result = await db.collection("waitlist").insertOne({
      email: normalizedEmail,
      timestamp: new Date(),
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Add to waitlist error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
