import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogProvider } from "@/context/BlogContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "plano B",
  description:
    "Artigos em português sobre Bitcoin, segurança, educação financeira e descentralização.",
  icons: {
    icon: {
      url: "https://web3grants.s3.us-east-1.amazonaws.com/planob.svg",
      href: "https://web3grants.s3.us-east-1.amazonaws.com/planob.svg",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="language" content="pt" />
        <meta httpEquiv="Content-Language" content="pt" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <BlogProvider>{children}</BlogProvider>
        <Footer />
      </body>
    </html>
  );
}
