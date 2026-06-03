import { WA } from './whatsappMessages'

export type ProductCategory = 'round-plate' | 'square-plate' | 'bowl' | 'other'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  sizes: string[]
  variants: string[]
  useCases: string[]
  image: string
  whatsappUrl: string
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  // ── Round Plates ─────────────────────────────────────────────────────────
  {
    id: 'round-4', name: '4" Round Snack Plate', category: 'round-plate',
    sizes: ['4 inch'], variants: ['Standard'],
    useCases: ['Tea-time snacks', 'Starters', 'Street food stalls'],
    image: '/images/products/round-plate.jpg', whatsappUrl: WA.roundPlate4,
  },
  {
    id: 'round-6', name: '6" Round Snack Plate', category: 'round-plate',
    sizes: ['6 inch'], variants: ['Standard'],
    useCases: ['Breakfast', 'Café service', 'Bakery use'],
    image: '/images/products/round-plate.jpg', whatsappUrl: WA.roundPlate6,
  },
  {
    id: 'round-8', name: '8" Round Meal Plate', category: 'round-plate',
    sizes: ['8 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Standard lunch/dinner', 'Restaurant service', 'Catering'],
    image: '/images/products/round-plate.jpg', whatsappUrl: WA.roundPlate8, featured: true,
  },
  {
    id: 'round-10', name: '10" Round Meal Plate', category: 'round-plate',
    sizes: ['10 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Full meal', 'Hotel service', 'Events'],
    image: '/images/products/round-plate.jpg', whatsappUrl: WA.roundPlate10, featured: true,
  },
  {
    id: 'round-12', name: '12" Round Thali Plate', category: 'round-plate',
    sizes: ['12 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Thali meals', 'Banquets', 'Institutional catering'],
    image: '/images/products/round-plate.jpg', whatsappUrl: WA.roundPlate12,
  },
  // ── Square Plates ─────────────────────────────────────────────────────────
  {
    id: 'square-4', name: '4" Square Snack Plate', category: 'square-plate',
    sizes: ['4 inch'], variants: ['Standard'],
    useCases: ['Premium snacks', 'Appetisers', 'Fusion food'],
    image: '/images/products/square-plate.jpg', whatsappUrl: WA.squarePlate4,
  },
  {
    id: 'square-6', name: '6" Square Snack Plate', category: 'square-plate',
    sizes: ['6 inch'], variants: ['Standard'],
    useCases: ['Café/bakery', 'Premium street food'],
    image: '/images/products/square-plate.jpg', whatsappUrl: WA.squarePlate6,
  },
  {
    id: 'square-8', name: '8" Square Meal Plate', category: 'square-plate',
    sizes: ['8 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Meal plate', 'Restaurant/hotel service'],
    image: '/images/products/square-plate.jpg', whatsappUrl: WA.squarePlate8, featured: true,
  },
  {
    id: 'square-10', name: '10" Square Meal Plate', category: 'square-plate',
    sizes: ['10 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Full meal', 'Premium dining'],
    image: '/images/products/square-plate.jpg', whatsappUrl: WA.squarePlate10,
  },
  {
    id: 'square-12', name: '12" Square Thali Plate', category: 'square-plate',
    sizes: ['12 inch'], variants: ['Deep', 'Shallow'],
    useCases: ['Banquet', 'Large thali', 'Catering events'],
    image: '/images/products/square-plate.jpg', whatsappUrl: WA.squarePlate12,
  },
  // ── Bowls ─────────────────────────────────────────────────────────────────
  {
    id: 'bowl-round', name: 'Round Bowls', category: 'bowl',
    sizes: ['Small', 'Medium', 'Large'], variants: ['Deep', 'Shallow'],
    useCases: ['Curry', 'Dal', 'Rice', 'Soup', 'Desserts', 'Chutney'],
    image: '/images/products/round-bowl.jpg', whatsappUrl: WA.roundBowl, featured: true,
  },
  {
    id: 'bowl-square', name: 'Square Bowls', category: 'bowl',
    sizes: ['Small', 'Medium', 'Large'], variants: ['Deep', 'Shallow'],
    useCases: ['Premium hotel/restaurant serving', 'Modern plating'],
    image: '/images/products/square-bowl.jpg', whatsappUrl: WA.squareBowl,
  },
  {
    id: 'bowl-oval', name: 'Oval Bowls', category: 'bowl',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Salads', 'Sides', 'Indo-western service'],
    image: '/images/products/oval-bowl.jpg', whatsappUrl: WA.ovalBowl,
  },
  {
    id: 'bowl-heart', name: 'Heart-Shaped Bowls', category: 'bowl',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Gifting', 'Weddings', 'Events', 'Premium eco kits'],
    image: '/images/products/heart-bowl.jpg', whatsappUrl: WA.heartBowl, featured: true,
  },
  // ── Other ─────────────────────────────────────────────────────────────────
  {
    id: 'divided-plate', name: '2-Compartment Plate', category: 'other',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Meal + side', 'School/office lunch', 'Thali service'],
    image: '/images/products/divided-plate.jpg', whatsappUrl: WA.dividedPlate,
  },
  {
    id: 'flat-tray', name: 'Flat Tray', category: 'other',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Event serving tray', 'Street food', 'Catering'],
    image: '/images/products/tray.jpg', whatsappUrl: WA.tray,
  },
  {
    id: 'spoon', name: 'Areca Leaf Spoon', category: 'other',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Desserts', 'Snacks', 'Eco gifting kits'],
    image: '/images/products/spoon.jpg', whatsappUrl: WA.spoon,
  },
  {
    id: 'cup', name: 'Cup / Tumbler', category: 'other',
    sizes: ['Standard'], variants: ['Standard'],
    useCases: ['Hot/cold beverages', 'Events', 'Eco hospitality'],
    image: '/images/products/cup.jpg', whatsappUrl: WA.cup,
  },
]

export const CATEGORIES: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'round-plate', label: 'Round Plates' },
  { id: 'square-plate', label: 'Square Plates' },
  { id: 'bowl', label: 'Bowls' },
  { id: 'other', label: 'Other' },
]
