import "./globals.css";

export const metadata = {
  title: "artsky",
  description: "Arthur Levitsky's Personal Portfolio and Blog created using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
