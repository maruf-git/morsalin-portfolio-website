/**
 * Contact Form API Route
 * POST /api/contact
 * Validates form data and sends an email notification via Gmail (Nodemailer).
 * No database required.
 *
 * Required .env.local variables:
 *   GMAIL_USER=mdmorsalin.hstu@gmail.com
 *   GMAIL_APP_PASSWORD=your_16_char_app_password
 *   CONTACT_RECEIVER_EMAIL=mdmorsalin.hstu@gmail.com
 */

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Gmail transporter ─────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

// ── HTML email template ───────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml({ name, email, subject, message }) {
  const date = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
    timeStyle: "short",
  });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mdmorsalin.vercel.app";

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:16px;border:1px solid #334155;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#3b82f6,#6366f1);padding:32px 40px;text-align:center;">
          <p style="margin:0 0 6px;color:rgba(255,255,255,0.75);font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Portfolio Contact Form</p>
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;">📬 New Message Received</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">

          <!-- Sender info card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:12px;border:1px solid #334155;padding:20px;margin-bottom:28px;">
            <tr><td>
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;">Sender Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:72px;color:#64748b;font-size:13px;font-weight:600;padding-bottom:8px;">Name</td>
                  <td style="color:#f1f5f9;font-size:14px;font-weight:700;padding-bottom:8px;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="color:#64748b;font-size:13px;font-weight:600;padding-bottom:8px;">Email</td>
                  <td style="padding-bottom:8px;"><a href="mailto:${escapeHtml(email)}" style="color:#60a5fa;font-size:14px;font-weight:700;text-decoration:none;">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td style="color:#64748b;font-size:13px;font-weight:600;padding-bottom:8px;">Subject</td>
                  <td style="color:#f1f5f9;font-size:14px;font-weight:700;padding-bottom:8px;">${escapeHtml(subject)}</td>
                </tr>
                <tr>
                  <td style="color:#64748b;font-size:13px;font-weight:600;">Time</td>
                  <td style="color:#94a3b8;font-size:13px;">${date} (BST)</td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- Message -->
          <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;letter-spacing:0.12em;text-transform:uppercase;">Message</p>
          <div style="background:#0f172a;border-radius:12px;border:1px solid #334155;border-left:3px solid #3b82f6;padding:20px 24px;margin-bottom:28px;">
            <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <!-- Reply CTA -->
          <div style="text-align:center;">
            <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject)}"
               style="display:inline-block;padding:13px 32px;background:linear-gradient(135deg,#3b82f6,#6366f1);color:#fff;font-size:14px;font-weight:700;text-decoration:none;border-radius:10px;">
              ↩ Reply to ${escapeHtml(name)}
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px;border-top:1px solid #334155;text-align:center;">
          <p style="margin:0;color:#475569;font-size:12px;">
            Sent via <a href="${siteUrl}" style="color:#60a5fa;text-decoration:none;">Md. Morsalin's Portfolio</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { success: false, message: "Name is too long (max 100 chars)." },
        { status: 400 }
      );
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message too long (max 2000 chars)." },
        { status: 400 }
      );
    }

    // Send email
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[Contact API] Gmail credentials missing in .env.local");
      return NextResponse.json(
        { success: false, message: "Email service not configured. Please try again later." },
        { status: 503 }
      );
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 [Portfolio] ${subject} — from ${name}`,
      html: buildEmailHtml({ name, email, subject, message }),
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json(
      { success: true, message: "Your message has been sent! I will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
