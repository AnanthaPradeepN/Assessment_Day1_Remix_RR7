import { MdMargin } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Chill App</h1>
      <nav style={styles.nav}>
        <NavLink to="/dashboard" style={styles.link}>Dashboard</NavLink> |{" "}
        {/* <NavLink to="/home" style={styles.link}>Home</NavLink> |{" "} */}
        <NavLink to="/about" style={styles.link}>About Us</NavLink> |{" "}
        <NavLink to="/contact" style={styles.link}>Contact</NavLink> |{" "}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)", // ✅ mild royal gradient
    color: "#012934",
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    borderTopLeftRadius: "8px",     
    borderTopRightRadius: "8px",
    
  },
  title: {
    margin: "0 0 0.5rem",
    fontSize: "2rem",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#012934", 
    textDecoration: "none",
    fontWeight: "bold",
  },
  activeLink: {
    borderBottom: "2px solid #61dafb",
  },
};
