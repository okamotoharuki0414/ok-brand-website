import CompanyHero from '@/components/CompanyHero'
import CompanyGreeting from '@/components/CompanyGreeting'
import Mission from '@/components/Mission'
import DomesticCommitment from '@/components/DomesticCommitment'
import ProductionLines from '@/components/ProductionLines'
import History from '@/components/History'
import GroupCompanies from '@/components/GroupCompanies'
import Overview from '@/components/Overview'
import Access from '@/components/Access'

export default function CompanyPage() {
  return (
    <div className="pt-20">
      <CompanyHero />
      <CompanyGreeting />
      <Mission />
      <DomesticCommitment />
      <ProductionLines />
      <History />
      <GroupCompanies />
      <Overview />
      <Access />
    </div>
  )
}