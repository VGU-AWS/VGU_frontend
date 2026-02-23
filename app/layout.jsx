import "./global.css";

export const metadata = {
  title: "Study Vault",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>

      </body>

    </html>
  );
}

