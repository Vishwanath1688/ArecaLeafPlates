export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  coverImage: string
  readTime: string
  content: string   // HTML string — no MDX needed, keeps it simple
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-areca-leaf-plates-better-than-plastic',
    title: 'Why Areca Leaf Plates Are Better Than Plastic & Paper',
    date: '2026-06-01',
    category: 'Sustainability',
    excerpt: 'Plastic plates take 500 years to decompose. Paper plates need trees. Areca leaf plates need neither — here\'s why they\'re the smartest choice for bulk buyers.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    readTime: '4 min read',
    content: `
      <p>Every year, billions of disposable plates are used and thrown away — clogging landfills, polluting oceans, and sitting in the earth for centuries. Plastic plates take <strong>450–500 years</strong> to decompose. Paper plates require trees to be cut and bleached. There's a better way.</p>

      <h2>What Are Areca Leaf Plates?</h2>
      <p>Areca leaf plates are made from the fallen sheaths of the areca palm tree — the same palm that produces betel nut. When the palm naturally sheds its leaf sheath, that fallen leaf is collected, cleaned, sun-dried, and pressed into plates, bowls, and trays using heat and pressure. No trees are cut. No chemicals are used.</p>

      <h2>Plastic vs Paper vs Areca Leaf</h2>
      <p>Plastic plates release microplastics and never fully decompose. Paper plates require deforestation, bleaching, and chemical treatment. Areca leaf plates decompose in <strong>2–4 weeks</strong>, require no synthetic inputs, and are made from a material that would otherwise be agricultural waste.</p>

      <h2>Why Bulk B2B Buyers Are Switching</h2>
      <p>Restaurants, caterers, and event companies are switching for three reasons: India's single-use plastic ban, customer demand for eco-friendly alternatives, and the EU's Single-Use Plastics Directive for companies exporting to Europe. Areca leaf plates tick every compliance box.</p>

      <h2>Strength & Performance</h2>
      <p>A common concern is durability. Areca leaf plates are naturally heat-resistant and handle hot curries, gravies, rice, and beverages without softening or leaking — something paper plates fail at entirely.</p>

      <p>At Sri Kalleshwara Enterprises, we produce over 10 lakh (1 million) areca leaf plates per month from our factory in Tumakuru District, Karnataka. Direct from factory, no middlemen.</p>
    `,
  },
  {
    slug: 'bulk-areca-leaf-plate-supplier-karnataka',
    title: 'Bulk Areca Leaf Plate Supplier in Karnataka — Direct from Factory',
    date: '2026-05-20',
    category: 'Sourcing',
    excerpt: 'Looking for a bulk areca leaf plate supplier in Karnataka? Here\'s what to look for, what questions to ask, and why direct-from-factory buying saves you 20–30%.',
    coverImage: 'https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=800&q=80',
    readTime: '5 min read',
    content: `
      <p>Karnataka is one of India's largest areca leaf plate producing regions — the same belt that grows arecanut also produces the raw material for biodegradable tableware. If you're a bulk buyer, sourcing direct from a Karnataka manufacturer is the most cost-effective approach.</p>

      <h2>Why Karnataka?</h2>
      <p>Karnataka's Tumakuru, Shimoga, and Dakshina Kannada districts are in the heart of India's arecanut growing belt. Raw material is abundant, local, and low-cost. This translates directly into better pricing for bulk buyers compared to sourcing from resellers or brokers.</p>

      <h2>What to Look for in a Supplier</h2>
      <p>When evaluating a bulk supplier, check for: GST registration (ensures legitimate business), consistent production capacity, quality of press (plates should be smooth with no cracks), and flexibility on order quantity. Avoid suppliers who can't confirm monthly capacity — it signals unreliable supply.</p>

      <h2>Direct vs Middleman Pricing</h2>
      <p>Buying direct from the manufacturer typically saves 20–30% compared to purchasing through a trader or reseller. The difference is significant when you're ordering by the lakh.</p>

      <h2>Sri Kalleshwara Enterprises</h2>
      <p>Based in Somalapura Village, Gubbi Taluk, Tumakuru District, we produce ~10 lakh plates per month. Buyers from Tamil Nadu, Bengaluru, and other states regularly collect by lorry. GST registered. WhatsApp us for current pricing and MOQ.</p>
    `,
  },
  {
    slug: 'eu-single-use-plastics-ban-areca-alternative',
    title: 'EU Single-Use Plastics Ban: Why Areca Leaf Is the Perfect Alternative',
    date: '2026-05-10',
    category: 'Export & Regulations',
    excerpt: 'The EU\'s Single-Use Plastics Directive has banned plastic plates, cutlery, and stirrers across all member states. Here\'s why areca leaf is the natural replacement for European importers.',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    readTime: '6 min read',
    content: `
      <p>In 2021, the European Union's Single-Use Plastics (SUP) Directive came into force. By 2025, plastic plates, cutlery, stirrers, straws, and expanded polystyrene food containers are banned across all 27 EU member states. This is creating one of the largest shifts in the global disposable tableware industry in decades.</p>

      <h2>What the EU Ban Covers</h2>
      <p>The directive bans single-use plastic items including: plates, cutlery (forks, knives, spoons, chopsticks), straws, stirrers, balloon sticks, expanded polystyrene cups and food containers. Businesses that were buying these items now need compliant alternatives.</p>

      <h2>Why Areca Leaf Qualifies</h2>
      <p>Areca leaf plates are 100% natural, contain no plastics or synthetic materials, and are fully compostable. They meet EN 13432 — the European standard for compostable packaging — when certified. They are not derived from forest trees, making them also FSC-friendly.</p>

      <h2>Market Opportunity for Indian Exporters</h2>
      <p>Europe imported significant volumes of disposable tableware from China — most of which was plastic or paper. Indian areca leaf manufacturers now have a significant competitive advantage: a natural, compostable product that Europe needs and India can produce at scale.</p>

      <h2>What Exporters Need</h2>
      <p>To export areca leaf plates to Europe, manufacturers need: IEC (Import Export Code), FSSAI certification for food-contact items, and ideally EN 13432 or OK Compost certification to market products as "compostable" in EU countries.</p>

      <p>At Sri Kalleshwara Enterprises, we are actively pursuing these certifications. International buyers are welcome to enquire — we supply ex-factory from Karnataka and can fulfil large orders.</p>
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}
