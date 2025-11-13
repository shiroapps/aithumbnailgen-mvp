import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Thumbnail Generator – Pay Once $19",
  description: "Paste YouTube link → 8 MrBeast-style thumbnails instantly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 to-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
