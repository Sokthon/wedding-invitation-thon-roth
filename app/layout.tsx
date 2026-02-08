import { battambang } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" scroll-smooth">
      <body className={battambang.className}>{children}</body>
    </html>
  );
}
