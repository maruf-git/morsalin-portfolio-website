/**
 * MongoDB Connection Utility
 * Implements a singleton connection pattern to prevent multiple connections
 * during Next.js hot-reload in development. Reuses existing connections in production.
 */

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

/**
 * Global cached connection to prevent re-connections on hot-reload
 * Using global variable to persist across module reloads in development
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes or reuses a MongoDB connection
 * @returns {Promise<mongoose.Connection>} Mongoose connection instance
 */
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
