import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexLearn futuristic learning",
  description: "NexLearn is an innovative MCQ exam platform offering secure, customizable assessments with real-time grading and performance analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to Favicon */}
        <link rel="icon" href="/fav.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
