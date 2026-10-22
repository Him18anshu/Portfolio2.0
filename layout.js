
import "./globals.css";

export const metadata = {
  title: "Your Name | Web Developer Portfolio",
  description:
    "Explore my web development projects, skills, and experience with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
