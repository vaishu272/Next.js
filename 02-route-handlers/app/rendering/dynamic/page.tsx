export default async function DynamicPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  console.log("Fetching data for dynamic page...");

  const posts = await res.json();

  return (
    <div>
      <h1>Dynamic Rendering</h1>

      {posts.slice(0, 5).map((post: { id: number; title: string }) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}
