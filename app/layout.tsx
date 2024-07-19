import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'material-symbols';
import "../styles/bootstrap.scss";
import "./preview.css";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import NavigationEvents from "@/components/helpers/NavigationEvents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function getEnvironment(): string {
  return process.env.ENVIRONMENT || "production";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const environment = getEnvironment();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
        <Suspense fallback={null}>
          <NavigationEvents environment={environment} />
        </Suspense>
      </body>
    </html>
  );
}
