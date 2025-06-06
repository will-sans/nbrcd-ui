
import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerInitializer from "./ServiceWorkerInitializer";
import { TimezoneProvider } from "@/lib/timezone-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nbrcd",
  description: "A philosophical chat application",
  icons: {
    icon: "/nbrcd_logo.png",
    apple: "/nbrcd_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-title" content="nbrcd"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <ServiceWorkerInitializer />
        <TimezoneProvider>{children}</TimezoneProvider>
      </body>
    </html>
  );
}
