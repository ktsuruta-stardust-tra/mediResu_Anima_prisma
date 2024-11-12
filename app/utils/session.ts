import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET as string],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});
