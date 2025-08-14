import HomeJa from './_components/HomeJa';
import HomeEn from './_components/HomeEn';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (locale === 'en') {
    return <HomeEn />;
  }
  
  return <HomeJa />;
}