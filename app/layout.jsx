import "../styles/global.css";

export const metadata = {
  title: "AWS VGU Cloud Club",
  description: "Login System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

