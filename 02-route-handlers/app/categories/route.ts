export async function GET() {
  const categories = [
    { id: 1, name: "Technology" },
    { id: 2, name: "Health" },
    { id: 3, name: "Travel" },
    { id: 4, name: "Food" },
    { id: 5, name: "Education" },
  ];
  return Response.json(categories);
}
