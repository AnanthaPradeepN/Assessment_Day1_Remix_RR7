import { FaCopyright, FaSnowflake } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer style={styles.footer}>

            <p style={styles.brand}>
                <FaCopyright style={styles.icon} /> Chill App
            </p>
            <div>
                <a href="/privacy" style={styles.link}>Privacy Policy</a> |{" "}
                <a href="/terms" style={styles.link}>Terms</a>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)", 
        padding: "1rem 2rem",
        textAlign: "center" as const,
        fontSize: "0.9rem",
        borderTop: "1px solid #ddd",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        color: "#012934",
    },
    brand: {
        marginBottom: "0.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
    },
    icon: {
        fontSize: "1.2rem",
        color: "#012934",
    },
    link: {
        color: "#012934",
        textDecoration: "none",
        margin: "0 0.5rem",
        fontWeight: "bold",
    },
};
