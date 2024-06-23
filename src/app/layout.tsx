import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Navbar } from "@/components";
import { Container } from "@mui/material";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test - NextJS",
  description: "Test - NextJS - Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
