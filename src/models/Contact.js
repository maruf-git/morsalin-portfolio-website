/**
 * Contact Form Mongoose Model
 * Stores all contact form submissions from portfolio visitors.
 */

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    /** Visitor's full name */
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    /** Visitor's email address */
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    /** Subject / reason for contact */
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },
    /** Main message body */
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    /** Whether the portfolio owner has read the message */
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    /** Automatically add createdAt and updatedAt timestamps */
    timestamps: true,
  }
);

// Prevent model re-compilation during Next.js hot-reload
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
