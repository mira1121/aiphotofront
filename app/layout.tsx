import "./globals.css";
import type { ReactNode } from "react";
import Footer from "../components/Footer";

export const metadata = {
  title: "Зураг аа бүтээ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
