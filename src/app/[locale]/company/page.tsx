import CompanyHero from '@/components/CompanyHero'
import CompanyGreeting from '@/components/CompanyGreeting'
import Mission from '@/components/Mission'
import History from '@/components/History'
import ProductionLines from '@/components/ProductionLines'
import Overview from '@/components/Overview'
import Access from '@/components/Access'

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <CompanyHero />
      <CompanyGreeting />
      <Mission />
      <ProductionLines />
      <History />
      <Overview />
      <Access />
    </div>
  )
}