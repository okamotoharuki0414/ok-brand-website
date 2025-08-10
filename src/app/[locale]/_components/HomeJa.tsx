import HeroSectionJa from './HeroSectionJa';
import CompanyIntro from '../../../components/CompanyIntro';
import ProductGallery from '../../../components/ProductGallery';
import Features from '../../../components/Features';
import Mission from '../../../components/Mission';
import NewsSection from '../../../components/NewsSection';
import FoodTableSection from '../../../components/FoodTableSection';

export default function HomeJa() {
  return (
    <main>
      <HeroSectionJa />
      <ProductGallery />
      <CompanyIntro />
      <Features />
      <Mission />
      <NewsSection />
      <FoodTableSection />
    </main>
  );
}
