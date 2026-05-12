import "./globals.css";

export const metadata = {
  title: "JAI SPORTS",
  description: "Sports equipment website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}