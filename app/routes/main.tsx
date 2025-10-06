import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <main style={layoutStyles.main}>
      <section style={layoutStyles.section}>
        <Outlet />
      </section>
    </main>
  );
}

const layoutStyles = {
  main: {
    height: "75vh",
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4169e1 0%, #839deb 100%)",
    color: "white",
  },
  section: {
    maxWidth: "600px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center" as const,
  },
};
