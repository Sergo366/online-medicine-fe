import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t = await getDictionary(lang);

  return <div>{t.pages.mainPage}</div>;
}
