import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Material Calculators",
  description:
    "Free mulch and bark calculators. Find out how many cubic yards or bags you need for your project, or how far a quantity will cover — instantly.",
  alternates: { canonical: "https://www.seqhort.com/calculators" },
  openGraph: {
    title: "Material Calculators | Sequoia Horticultural Products",
    description: "Calculate how much bark or mulch your project needs. Free quantity and coverage calculators.",
    url: "https://www.seqhort.com/calculators",
  },
}

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
