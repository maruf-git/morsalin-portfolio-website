/**
 * Utility Functions
 * Provides class name merging utility (cn) used throughout the project.
 * Combines clsx and tailwind-merge for conflict-free class names.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS conflict resolution
 * @param  {...any} inputs - Class name inputs
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
