export const metadata = {
  title: "Jai Sports - Latest Sports News, Scores & Updates",
  description:
    "Jai Sports provides latest sports news, live scores, updates, and sports gear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}