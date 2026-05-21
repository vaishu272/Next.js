export async function GET() {
  return new Response(
    `
      <html>
        <body style="font-family:sans-serif;padding:20px">
          <h2>HTTP Methods & Headers in Next.js</h2>
          <p>Check terminal for headers and cookies.</p>
        </body>
      </html>
    `,
    {
      status: 200,
      headers: { "Content-Type": "text/html" },
    },
  );
}
