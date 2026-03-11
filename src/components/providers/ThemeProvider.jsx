/**
 * Theme Provider Component
 * Wraps the app with next-themes for light/dark mode support.
 * Must be a Client Component since it uses React context.
 */

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * @param {Object} props - ThemeProvider props passed to next-themes
 */
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
