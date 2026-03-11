/**
 * Contact Form API Route
 * POST /api/contact
 * Validates form data and saves contact messages to MongoDB.
 *
 * Request body: { name, email, subject, message }
 * Response: { success: boolean, message: string }
 */

import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // ── Input validation ──────────────────────────────────────────────────────
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Name is too long." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message exceeds 2000 characters." },
        { status: 400 }
      );
    }

    // ── Connect to MongoDB and save ───────────────────────────────────────────
    await connectDB();

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received! I will get back to you soon.",
        id: contact._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact — Not allowed
 */
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
