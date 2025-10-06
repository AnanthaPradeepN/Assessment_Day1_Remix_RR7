import { useParams } from "react-router";
import { BiUserCircle } from "react-icons/bi";

export default function UserPage() {
  const { id } = useParams();

  return (
    <section style={styles.card}>
      <BiUserCircle style={styles.icon} />
      <h2 style={styles.heading}>Welcome, User #{id}</h2>
      <p style={styles.text}>
        This is your personalized dashboard. You can explore your activity, settings, and more.
      </p>
    </section>
  );
}

const styles = {
  card: {
    margin: "2rem auto",
    maxWidth: "600px",
    backgroundColor: "#012934",
    padding: "2rem",
    borderRadius: "12px",
    color: "white",
    textAlign: "center" as const,
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
    animation: "fadeIn 0.8s ease-in-out",
  },
  icon: {
    fontSize: "4rem",
    color: "#e6e6e6ff",
    marginBottom: "1rem",
    animation: "bounce 1.2s infinite",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};
