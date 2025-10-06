import { BiBorderRadius } from "react-icons/bi";
import { Outlet, NavLink } from "react-router";

export default function About() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.text}>
          Chill App is your go-to destination for curated styles, seasonal trends, and effortless shopping.
          We believe in blending comfort with creativity, offering a seamless experience for every user.
        </p>
        <p style={styles.text}>
          Whether you're browsing new arrivals or exploring timeless classics, our mission is to keep things chill,
          stylish, and always within reach.
        </p>
                <NavLink to="/" style={styles.link}>Go back home</NavLink>

      </section>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    flex: 1,
    padding: "2rem",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)",
    color: "white",
    borderRadius: "8px",
  },
  section: {
    maxWidth: "600px",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
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
