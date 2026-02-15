import "./global.css";


export const metadata = {
  title: "Study Vault",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}   {/* page only */}
      </body>
    </html>
  );
}

