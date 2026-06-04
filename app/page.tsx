import Hero from "./components/hero"
import ProductsSection from "./components/products-section"
import CommunitySection from "./components/community-section"

export default function Home() {
  return (
    <div className="min-w-full pt-24">
      <main className="px-4 py-6">
        <Hero />
      </main>
      <ProductsSection />
      <CommunitySection />
    </div>
  )
}
