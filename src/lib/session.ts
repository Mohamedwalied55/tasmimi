import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

type SessionPayload = {
  userId: string;
  role: "CUSTOMER" | "ADMIN";
};

export async function getSession(): Promise<SessionPayload | null> {
  const token = cookies().get("tasmeemi_token")?.value;

  if (!token) {
    return null;
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return null;
  }

  try {
    const payload = jwt.verify(token, secret) as SessionPayload;

    if (!payload.userId || !payload.role) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
