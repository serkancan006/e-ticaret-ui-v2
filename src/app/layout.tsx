import type { Metadata } from "next";
import localFont from "next/font/local";
import ProviderContainer from "@/context/ProviderContainer";
import "../../styles/globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
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
        <ProviderContainer>{children}</ProviderContainer>
      </body>
    </html>
  );
}
