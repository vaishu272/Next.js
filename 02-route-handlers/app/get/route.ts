import { type NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function GET(request: NextRequest) {
  // Example of reading headers and cookies in a Next.js route handler
  // and setting a cookie in the response. This is just for demonstration purposes.

  // Request headers
  const reqHeaders = new Headers(request.headers);

  console.log("Authorization:", reqHeaders.get("Authorization"));

  // Next.js headers helper
  const headerList = headers();

  console.log("Host:", (await headerList).get("host"));

  // Read cookie from request
  const theme = request.cookies.get("theme");

  console.log("Theme Cookie:", theme);

  // Cookie store
  const cookieStore = cookies();

  // Set cookie
  (await cookieStore).set("token", "abc123", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  });

  console.log("Token Cookie:", (await cookieStore).get("token"));

  return new Response(
    `
      <html>
        <body style="font-family:sans-serif;padding:20px">
          <h2>HTTP Methods & Headers in Next.js</h2>
          <p>Check terminal for headers and cookies.</p>
            <h3>Examples:</h3>

        <ul>
          <li>Reading request headers</li>
          <li>Reading cookies</li>
          <li>Setting cookies</li>
        </ul>

        <a 
          href="/"
          style="
            display:inline-block;
            margin-top:20px;
            padding:10px 18px;
            background:black;
            color:white;
            text-decoration:none;
            border-radius:8px;
          "
        >
          Go to Home
        </a>
        </body>
      </html>
    `,
    {
      status: 200,
      headers: {
        "set-cookie": "theme=dark;",
        "Content-Type": "text/html",
      },
    },
  );
}
