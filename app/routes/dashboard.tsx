import { BiBorderRadius } from "react-icons/bi";
import { Outlet, NavLink } from "react-router";

export default function Dashboard() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <h2 style={styles.heading}>Dashboard</h2>
        <nav style={styles.nav}>
          <NavLink to="/dashboard/stats" style={styles.link}>Stats</NavLink>
          <NavLink to="/dashboard/settings" style={styles.link}>Settings</NavLink>
          <NavLink to="/dashboard/profile" style={styles.link}>Profile</NavLink>
          <NavLink to="/dashboard/notifications" style={styles.link}>Notifications</NavLink>
          <NavLink to="/dashboard/activity" style={styles.link}>Activity</NavLink>
          <NavLink to="/dashboard/support" style={styles.link}>Support</NavLink>
        </nav>
        <NavLink to="/" style={styles.back}>Go back home</NavLink>
        <div style={styles.outlet}>
          <Outlet />
        </div>
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
  card: {
    maxWidth: "700px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
  link: {
    background: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    color: "#012934",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    width: "150px",
    top: "10px",
    textAlign: "center" as const,
  },
  back: {
    background: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    color: "#012934",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    width: "100px",
    top: "10px",
    dispaly: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",

  },
  separator: {
    color: "#ccc",
    fontSize: "1rem",
  },
  outlet: {
    marginTop: "1rem",
    textAlign: "left" as const,
  },
};
