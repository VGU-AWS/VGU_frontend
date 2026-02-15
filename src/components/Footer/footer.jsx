export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a>About</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>Gallery</a>
        <a>Team</a>
      </div>

      <button style={styles.button}>Contact Us</button>

      <p style={{ marginTop: 20 }}>
        VGU AWS Club © 2025 All Rights Reserved
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "40px 20px",
    marginTop: 80,
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    marginBottom: 16,
  },
  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: 20,
    cursor: "pointer",
  },
};
