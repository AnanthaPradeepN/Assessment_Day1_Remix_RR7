export default function MainBody() {
  const cards = ["Shop Now", "Explore Styles", "New Arrivals", "Sale"];
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        {cards.map((label, idx) => (
          <button key={idx} style={styles.button}>{label}</button>
        ))}
      </section>
    </main>
  );
}

const styles = {
  main: {
    height: "75vh",
    flex: 1,
    padding: "2rem",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)", 
    color: "white",
  },
  section: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  button: {
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};
