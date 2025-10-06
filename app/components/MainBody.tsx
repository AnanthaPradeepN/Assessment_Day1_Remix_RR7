import { MdMargin } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { NavLink, useLocation } from "react-router-dom";

const cards = [
  { label: "Shop Now", path: "shop" },
  { label: "Explore Styles", path: "styles" },
  { label: "New Arrivals", path: "new" },
  { label: "Sale", path: "sale" },
];

const userIds = [101, 102, 103, 104];

export default function MainBody() {
  const location = useLocation();
  const showBackButton = location.pathname.startsWith("/user/");

  return (
    <main style={styles.main as React.CSSProperties}>
      <section style={styles.card}>
        <h2 style={styles.heading}>Explore Our Collection</h2>
        <nav style={styles.nav}>
          {cards.map(({ label, path }, idx) => (
            <NavLink key={idx} to={`/mainbody/${path}`} style={styles.link}>
              {label}
            </NavLink>
          ))}
        </nav>
      </section>

      <section style={{ ...styles.card, position: "relative" }}>
        {showBackButton && (
          <NavLink to="/" style={styles.back as React.CSSProperties}>
            <BiArrowBack style={styles.backIcon} />
            Home
          </NavLink>
        )}
        <h2 style={styles.heading}>User Profiles</h2>
        <nav style={styles.nav}>
          {userIds.map((id) => (
            <NavLink key={id} to={`/user/${id}`} style={styles.link}>
              View User {id}
            </NavLink>
          ))}
        </nav>
      </section>
    </main>
  );
}

const styles = {
  main: {
    height: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "2rem",
    overflowY: "auto",
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)",
    color: "white",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
  },
  card: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    textAlign: "center" as const,
    boxSizing: "border-box" as const,
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
    marginBottom: "1rem",
  },
  link: {
    backgroundColor: "#282c34",
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
    transition: "background-color 0.3s ease",
  },
  back: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.3rem",
    backgroundColor: "#282c34",
    color: "white",
    padding: "0.3rem 0.6rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.8rem",
    zIndex: 1,
  },
  backIcon: {
    fontSize: "1rem",
  },
};
