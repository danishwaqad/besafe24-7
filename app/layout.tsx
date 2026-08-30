import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteProvider } from "@/components/QuoteDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { EmergencyBar } from "@/components/EmergencyBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Boiler Repair Glasgow | BeSafe 24-7 Gas Safe Engineers",
    template: "%s | BeSafe 24-7",
  },
  description: site.description,
  metadataBase: new URL("https://besafe24-7.co.uk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans">
        <QuoteProvider>
          <EmergencyBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </QuoteProvider>
      </body>
    </html>
  );
}
