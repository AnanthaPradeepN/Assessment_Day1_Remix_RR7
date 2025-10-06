import { BiError } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <BiError style={styles.icon} />
        <h2 style={styles.heading}>404 - Page Not Found</h2>
        <p style={styles.text}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to="/" style={styles.link}>Go back home</NavLink>
      </section>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)",
    color: "white",
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center" as const,
    animation: "fadeIn 0.8s ease-in-out",
  },
  icon: {
    fontSize: "4rem",
    color: "#ff4c4c",
    animation: "bounce 1.2s infinite",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
  },
  link: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};
