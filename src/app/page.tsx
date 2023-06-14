import Image from 'next/image'

import { TopCards } from './components/TopCards'
import { BarChart } from './components/BarChart'
import { RecentOrders } from './components/RecentOrders'

export default function Home() {
  return (
   <>
   <TopCards />
  <section className="grid md:grid-cols-3 grid-cols-1 p-4 gap-4">
  <BarChart />
   <RecentOrders />
  </section>
   </>
  )
}
