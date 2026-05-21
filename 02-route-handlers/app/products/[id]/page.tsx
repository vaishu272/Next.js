import CurrentDate from "./CurrentDate";
export const dynamicParams = false;

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Products({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1>Product ID: {id}</h1>

      <CurrentDate />
    </div>
  );
}
