export default async function BlogISR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 }, // ⏱ refresh every 10 sec
  });

  const posts = await res.json();

  return (
    <div>
      <h1>ISR Blog (updates every 10 sec)</h1>
      <p>Rendered at: {new Date().toLocaleTimeString()}</p>

      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
