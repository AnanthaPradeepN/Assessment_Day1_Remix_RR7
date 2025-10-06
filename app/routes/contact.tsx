import { Form, useLoaderData, useActionData } from "react-router";

export async function loader() {
  return { email: "support@example.com" };
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  return { message: `Message received: ${formData.get("msg")}` };
}

export default function Contact() {
  const { email } = useLoaderData() as { email: string };
  const actionData = useActionData() as { message?: string };

  return (
    <div>
      <h2> Contact Page</h2>
      <p>Email us at: {email}</p>

      <Form method="post">
        <input type="text" name="msg" placeholder="Enter message" />
        <button type="submit">Send</button>
      </Form>

      {actionData?.message && <p>{actionData.message}</p>}
    </div>
  );
}
