// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import "../lib/fontawesome";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
