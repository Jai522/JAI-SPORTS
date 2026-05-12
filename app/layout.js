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
    <title>Jai Sports - Latest Sports News, Scores & Updates</title>

<meta name="description" content="Jai Sports provides latest sports news, live scores, updates, and highlights from cricket, football, and more.">

<meta name="keywords" content="sports, cricket news, live scores, football updates, jai sports">

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<meta property="og:title" content="Jai Sports">
<meta property="og:description" content="Latest sports news and live updates">
<meta property="og:url" content="https://jai-sports.vercel.app">
<meta property="og:type" content="website"></meta>
  );
}