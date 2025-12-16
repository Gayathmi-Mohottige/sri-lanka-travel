import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
