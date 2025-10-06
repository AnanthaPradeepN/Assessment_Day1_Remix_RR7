import { Form, useLoaderData, useActionData, NavLink } from "react-router";

export async function loader() {
  return { email: "support@example.com" };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const msg = formData.get("msg");
  const phone = formData.get("phone");
  return {
    message: `Message received: ${msg}${phone ? ` | Phone: ${phone}` : ""}`,
  };
}

export default function Contact() {
  const { email } = useLoaderData() as { email: string };
  const actionData = useActionData() as { message?: string };

  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.text}>
          Reach out anytime at <strong>{email}</strong>
        </p>

        <Form method="post" style={styles.form}>
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number (optional)"
            style={styles.input}
          />
          <textarea
            name="msg"
            placeholder="Type your message..."
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Send</button>
        </Form>

        {actionData?.message && (
          <p style={{ ...styles.response, animation: "fadeIn 0.5s ease-in-out" }}>
            {actionData.message}
          </p>
        )}
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
  card: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  text: {
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "1rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    resize: "vertical" as const,
    minHeight: "100px",
  },
  button: {
    padding: "0.75rem 1rem",
    backgroundImage: "linear-gradient(to right, #282c34, #3a3f47)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-image 0.3s ease",
  },
  response: {
    fontSize: "1rem",
    color: "#f6f6f6",
    fontWeight: "bold",
  },
  link: {
    background: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    color: "#012934",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};
