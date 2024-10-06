import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/c-bootstrap.min.css";
import "./globals.css";
import InstallBootstrap from "../components/installBootstrap";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ScKaya",
  description:
    "serkan can kaya tarafından geliştirilmiş e-ticaret uygulamasıdır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
