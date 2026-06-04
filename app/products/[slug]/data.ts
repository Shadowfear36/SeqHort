export type Product = {
  name: string
  size: string
  description: string
  image: string
  alt: string
  options?: string[]
}

export type ProductCategory = {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  products: Product[]
}

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "decorative-bark",
    name: "Decorative Bark",
    tagline: "Graded by particle size for every landscape application.",
    description:
      "Our decorative bark is carefully graded from premium fir and pine, providing reliable moisture retention, organic nutrient cycling, and a clean, professional finish for residential and commercial landscapes.",
    image: "/DecorativeBark.jpg",
    products: [
      {
        name: "Mini Decorative Bark",
        size: '1/8" – 3/8"',
        description:
          "Flat-screened fir bark nuggets containing very little wood. Ideal for fine-detail planting beds and tight spaces.",
        image: "/products/mini-500.jpg",
        alt: "Mini decorative fir bark nuggets, 1/8 to 3/8 inch particle size",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Small Decorative Bark",
        size: '1/4" – 3/4"',
        description: "Versatile fir bark suitable for residential beds and borders.",
        image: "/products/small-500.jpg",
        alt: "Small decorative fir bark, 1/4 to 3/4 inch particle size",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Medium Decorative Bark",
        size: '3/4" – 1.5"',
        description: "The most popular all-purpose decorative bark for general landscaping applications.",
        image: "/products/medium-500.jpg",
        alt: "Medium decorative fir bark nuggets, 3/4 to 1.5 inch particle size",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Large Decorative Bark",
        size: '2" – 5"',
        description: "Bold, statement-making fir or pine bark for expansive landscape beds.",
        image: "/products/largedeco-500.jpg",
        alt: "Large decorative fir and pine bark nuggets, 2 to 5 inch particle size",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Walk On Bark",
        size: '1" – 3"',
        description:
          "An economical pathway material with a pleasant forest fragrance. Great for trails and walkways.",
        image: "/products/wob-500.jpg",
        alt: "Walk-on fir bark pathway material, 1 to 3 inch particle size",
        options: ["Bulk"],
      },
    ],
  },
  {
    slug: "orchid-bark",
    name: "Orchid Bark",
    tagline: "Precision-graded for epiphytic cultivation and premium potting.",
    description:
      "Airlift-cleaned and carefully sized Douglas Fir bark designed specifically for orchid growers and commercial greenhouse operations. Provides superior drainage and aeration while maintaining the moisture balance orchids need.",
    image: "/OrchidBark.jpg",
    products: [
      {
        name: "Small Orchid Bark",
        size: '1/8" – 1/4"',
        description:
          "Fine-grade fir or pine bark ideal for young orchids, small epiphytes, and high-moisture potting mixes.",
        image: "/products/smorchid-500.jpg",
        alt: "Small orchid bark, fine-grade fir and pine, 1/8 to 1/4 inch particle size",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Medium Orchid Bark",
        size: '1/4" – 3/8"',
        description:
          "The standard choice for mature orchids and commercial epiphytic cultivation. Excellent drainage and longevity.",
        image: "/products/medorchid-500.jpg",
        alt: "Medium orchid bark, fir and pine, 1/4 to 3/8 inch particle size",
        options: ["Bulk", "Bagged"],
      },
    ],
  },
  {
    slug: "redwood-products",
    name: "Redwood Products",
    tagline: "California's most iconic mulch — naturally resistant, enduringly beautiful.",
    description:
      "Sustainably sourced California Redwood mulches prized for their natural decay resistance, rich color, and fibrous texture. Gorilla Hair is our most popular product and a staple of California landscapes.",
    image: "/redwoodbark.jpg",
    products: [
      {
        name: "Single Grind Redwood Bark (Gorilla Hair)",
        size: '1" – 3" (up to 6")',
        description:
          "Fibrous, stringy, dark red-colored product. Knits together to resist blowing and washing. Our most popular redwood mulch.",
        image: "/products/shrw-500.jpg",
        alt: "Single grind redwood bark, also known as Gorilla Hair, fibrous stringy mulch in dark red",
        options: ["Bulk"],
      },
      {
        name: "Double Grind Redwood Bark",
        size: '0" – 2"',
        description:
          "A finer alternative to Gorilla Hair with the same natural decay resistance and iconic California color palette.",
        image: "/products/doublegrind-500.jpg",
        alt: "Double grind redwood bark mulch, finer texture, 0 to 2 inch particle size",
        options: ["Bulk"],
      },
      {
        name: "Triple Grind Redwood Bark (Ligna Peat)",
        size: '0" – 1/4"',
        description:
          "Finely-ground redwood bark that serves as an organic, sustainable alternative to sphagnum peat moss.",
        image: "/products/triplegrind-500.jpg",
        alt: "Triple grind redwood bark, also known as Ligna Peat, finely ground organic peat alternative",
        options: ["Bulk", "Bagged"],
      },
    ],
  },
  {
    slug: "wood-chips",
    name: "Wood Chips",
    tagline: "Long-lasting, durable, and economical ground cover.",
    description:
      "From certified playground chips to colored landscape chips, our wood chip line covers every project type. Long-lasting, highly economical, and available in bulk for large-scale applications.",
    image: "/WoodChips.jpg",
    products: [
      {
        name: "Redwood Wood Chips",
        size: '2" – 4"',
        description: "Suitable for pneumatic application. Natural redwood color and decay resistance.",
        image: "/products/rw-chips-500.jpg",
        alt: "Redwood wood chips, 2 to 4 inch particles, suitable for pneumatic application",
        options: ["Bulk"],
      },
      {
        name: "White Wood Chips",
        size: '2" – 4"',
        description: "Mixed species chips suitable for pneumatic application and general ground cover.",
        image: "/products/white-chips-500.jpg",
        alt: "White mixed-species wood chips, 2 to 4 inch particles",
        options: ["Bulk"],
      },
      {
        name: "Certified Playground Chips",
        size: "Mixed",
        description:
          "California conifer chips meeting ASTM-C136, ASTM F1292-96, F-355-95, and 16CFR 1500.44 safety standards.",
        image: "/products/playpad-500.jpg",
        alt: "Certified playground safety chips made from California conifers, ASTM certified",
        options: ["Bulk", "Bagged"],
      },
      {
        name: '1/4" Nursery Chips',
        size: '0" – 1/4"',
        description: "Mixed species with minimal wood fines. Ideal for nursery ground cover.",
        image: "/products/qtrchip-500.jpg",
        alt: "Fine nursery wood chips, mixed species, 0 to 1/4 inch particle size",
        options: ["Bulk"],
      },
      {
        name: '1/4" – 3/4" Chips',
        size: '1/4" – 3/4"',
        description: "Mixed species economical ground cover option for large-scale projects.",
        image: "/products/qtr-3qtr-500.jpg",
        alt: "Mixed species wood chips, 1/4 to 3/4 inch particle size, economical ground cover",
        options: ["Bulk"],
      },
      {
        name: "Colored Wood Chips",
        size: '2" – 4"',
        description: "Mixed species chips available in red, brown, and black for decorative applications.",
        image: "/products/redchip-500.jpg",
        alt: "Colored decorative wood chips in red, available in red, brown, and black colorways",
        options: ["Bulk"],
      },
    ],
  },
  {
    slug: "shavings-sawdust",
    name: "Shavings & Sawdust",
    tagline: "Versatile wood by-products for bedding, storage, and amendment.",
    description:
      "Available in a wide range of species, our shavings and sawdust products are used for animal bedding, bare root tree storage, and soil amendment. Treated options are available.",
    image: "/ShavingsAndSawDust.jpg",
    products: [
      {
        name: "Sawdust",
        size: '0" – 1/4"',
        description:
          "Fir, pine, cedar, or redwood sawdust. Treated form available for specialized applications.",
        image: "/products/firsd-500.jpg",
        alt: "Fine fir sawdust, 0 to 1/4 inch, available in multiple species including pine, cedar, and redwood",
        options: ["Bulk", "Treated"],
      },
      {
        name: "Shavings",
        size: '3/4"+ particles',
        description:
          "From lumber surfacing operations. Multiple species available. Excellent for animal bedding.",
        image: "/products/rw-shavings-500.jpg",
        alt: "Redwood wood shavings from lumber surfacing, 3/4 inch and larger particles",
        options: ["Bulk", "Treated"],
      },
      {
        name: "Shadust",
        size: '0" – 3/4"+',
        description:
          "A blend of mixed shavings and sawdust. Available in fir, pine, or cedar. Economical and versatile.",
        image: "/products/shadust-500.jpg",
        alt: "Shadust blend of mixed wood shavings and sawdust in fir, pine, or cedar",
        options: ["Bulk"],
      },
    ],
  },
  {
    slug: "fines-humus",
    name: "Fines & Humus",
    tagline: "Powerful soil amendments for nurseries, growers, and landscape pros.",
    description:
      "Our bark fines and humus products enrich soil structure and support healthy plant growth. Used in nursery mixes, soil preparation, and as organic peat alternatives. Available plain and treated.",
    image: "/FinesAndHummus.jpg",
    products: [
      {
        name: '0-1/8" Bark Fines',
        size: '0" – 1/8"',
        description:
          "Fine fir particles for soil amendment in nurseries and greenhouses. Treated form available.",
        image: "/products/finespf-500.jpg",
        alt: "Fine fir bark particles, 0 to 1/8 inch, for nursery and greenhouse soil amendment",
        options: ["Bulk", "Treated"],
      },
      {
        name: '0-1/4" Bark Fines',
        size: '0" – 1/4"',
        description: "Fir and pine fines available fresh, aged, or treated to suit any soil amendment need.",
        image: "/products/0-q-aged-500.jpg",
        alt: "Aged fir and pine bark fines, 0 to 1/4 inch, available fresh, aged, or treated",
        options: ["Fresh", "Aged", "Treated"],
      },
      {
        name: "Turf-n-Tee",
        size: '0" – 1/8"',
        description:
          "Fir or pine treated with iron, nitrogen, and wetting agent. Designed for turf and golf course applications.",
        image: "/products/tnt-500.jpg",
        alt: "Turf-n-Tee treated bark fines with iron, nitrogen, and wetting agent for turf and golf courses",
        options: ["Bulk"],
      },
      {
        name: "Treated Forest Humus",
        size: '0" – 1/4"',
        description: "Fir or pine with performance additives for enhanced soil conditioning.",
        image: "/products/deck-500.jpg",
        alt: "Treated forest humus, fir and pine bark with performance additives for soil conditioning",
        options: ["Bulk", "Bagged"],
      },
      {
        name: "Black Humus",
        size: '0" – 1/4"',
        description:
          "Aged bark fines and sawdust blend with a rich dark color. Excellent organic matter for soil building.",
        image: "/products/0-q-aged-500.jpg",
        alt: "Black humus, aged bark fines and sawdust blend with rich dark color for soil building",
        options: ["Bulk"],
      },
      {
        name: "Sequoia Planting Mix",
        size: '0" – 1/4"',
        description:
          "50/50 blend of bark humus and sawdust. A reliable base for custom planting and nursery mixes.",
        image: "/products/plantingmix-500.jpg",
        alt: "Sequoia planting mix, 50/50 blend of bark humus and sawdust for nursery and planting use",
        options: ["Bulk", "Bagged"],
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}
