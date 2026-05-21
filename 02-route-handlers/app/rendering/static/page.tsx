export default async function StaticPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  console.log("Fetching data for static page...");

  const posts = await res.json();

  return (
    <div>
      <h1>Static Rendering</h1>

      {posts.slice(0, 5).map((post: { id: number; title: string }) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}
