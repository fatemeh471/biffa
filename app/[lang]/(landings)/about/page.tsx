import { getDictionary } from "#/app/dictionaries";

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  return <button>{dict.products.cart}</button>;
}
