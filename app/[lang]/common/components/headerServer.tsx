import { getDictionary } from '#/app/dictionaries';
import Header from './headerClient';

export default async function HeaderServer({ params }: {params: any}) {
  const dictionary = await getDictionary(params.lang);
  const { header } = dictionary;
  return <Header header={header} params={params} />;
}
