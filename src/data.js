import periPeriImg from './assets/PeriPeriImage.jpeg'
import saltedImg from './assets/SaltedImage.jpeg'
import pudinaImg from './assets/PudinaImage.jpeg'
import flaxSeedImg from './assets/FlaxSeedImage.jpeg'
import combo80gImg from './assets/Combo80g.png'
import comboFamilySaverImg from './assets/FamilyComboPack.png'
import raw2PackImg from './assets/RawFamilyFack.png'
import combo50gImg from './assets/Combo50g.png'

// Shared across all flavours
export const flavourSizes = [
  { size: '50g', price: 130, mrp: 150 },
  { size: '80g', price: 170, mrp: 220 },
]

export const products = [
  {
    id: 'flax-seed',
    name: 'Flax Seed',
    tagline: 'Nutty, seed-crusted crunch',
    accent: '#8B5E3C',
    // TODO: replace with real Flax Seed packet photo
    image: flaxSeedImg,
  },
  {
    id: 'pudina',
    name: 'Pudina',
    tagline: 'Cool, minty & refreshing',
    accent: '#4E8E4A',
    // TODO: replace with real Pudina packet photo
    image: pudinaImg,
  },
  {
    id: 'salted',
    name: 'Salted',
    tagline: 'Classic lightly-salted crunch',
    accent: '#3A6EA5',
    // TODO: replace with real Salted packet photo
    image: saltedImg,
  },
  {
    id: 'peri-peri',
    name: 'Peri Peri',
    tagline: 'Fiery, tangy & bold',
    accent: '#C33B3B',
    // TODO: replace with real Peri Peri packet photo
    image: periPeriImg,
  },
]

export const comboPacks = [
  {
    id: 'combo-80g',
    name: '4 Flavour Combo 80g',
    tagline: 'All four bold flavours in one go. More flavours, more happiness!',
    contents: ['4 Flavoured Jars', '4 Jars × 80g each', 'Total 320g'],
    badge: '4 JARS · 80g EACH',
    price: 590,
    mrp: 880,
    accent: '#C33B3B',
    image: combo80gImg,
  },
  {
    id: 'family-saver',
    name: 'Family Saver Combo',
    tagline: 'Healthy bites for the whole family. Our best value pack!',
    contents: ['4 Flavoured Jars', '+ 250g Raw Makhana', 'Total 570g'],
    badge: 'BEST VALUE',
    price: 890,
    mrp: 1255,
    accent: '#3A6EA5',
    image: comboFamilySaverImg,
  },
  {
    id: 'combo-50g',
    name: '4 Flavour Combo 50g',
    tagline: 'Try all four flavours in snack-sized portions. Perfect starter pack.',
    contents: ['4 Flavoured Jars', '4 Packs × 50g each', 'Total 200g'],
    badge: '4 PACKS · 50g EACH',
    price: 450,
    mrp: 600,
    accent: '#4E8E4A',
    image: combo50gImg,
  },
  {
    id: 'raw-2pack',
    name: 'Raw Makhana 2 Pack',
    tagline: 'Pure goodness of nature. Daily snacking for travel, work & study.',
    contents: ['2 Packs × 250g Raw Makhana', '100% Natural · No Preservatives', 'Total 500g'],
    badge: '2 PACK · 250g × 2',
    price: 625,
    mrp: 750,
    accent: '#8B5E3C',
    image: raw2PackImg,
  },
]

export const benefits = [
  {
    title: 'Plant-based protein',
    desc: 'Naturally protein-rich, a great plant-based source.',
    icon: 'Dumbbell',
  },
  {
    title: 'High in fiber',
    desc: 'Good fibre to support digestion and satiety.',
    icon: 'Feather',
  },
  {
    title: 'Low in fat',
    desc: 'Light and airy, very low total fat per 100 g.',
    icon: 'Leaf',
  },
  {
    title: 'Naturally gluten-free',
    desc: 'Safe for gluten-sensitive diets, nothing artificial.',
    icon: 'Wheat',
  },
]

export const nutrition = [
  { label: 'Energy', value: '347 kcal' },
  { label: 'Protein', value: '9.7 g' },
  { label: 'Carbs', value: '76.9 g' },
  { label: 'Fiber', value: '7.6 g' },
  { label: 'Total Fat', value: '0.1 g' },
]

export const didYouKnow = [
  { stat: '5+ Suta', label: 'Export-grade sizing for consistent quality' },
  { stat: '100% Natural', label: 'No artificial colours, flavours, or preservatives' },
  { stat: 'Gluten-free', label: 'Naturally free of gluten' },
  { stat: 'All ages', label: 'Suitable for everyone — kids to elders' },
]
