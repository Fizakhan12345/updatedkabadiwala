export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  acceptedItems: string[];
  processSteps: string[];
  idealFor: string[];
  iconName: string;
}

export const SERVICES: Service[] = [
  {
    id: 'household-scrap',
    slug: 'household-scrap-pickup',
    title: 'Household Doorstep Scrap Pickup',
    shortDesc: 'Convenient scrap collection directly from homes, apartments, and residential societies across Bhopal.',
    fullDesc: 'Kabadiwala Bhopal offers doorstep scrap collection services for homes, apartments, and residential societies throughout Bhopal. We collect old newspapers, broken plastic furniture, discarded metal items, obsolete electronics, and kitchen appliances, saving you time and effort.',
    acceptedItems: [
      'Old Newspapers, Books, Magazines & Notebooks',
      'Broken Plastic Chairs, Buckets, Containers & Bottles',
      'Old Iron Utensils, Grills, Pipes & Metal Items',
      'Unused Electronics, Small Home Appliances & Wiring',
      'Cardboard Boxes & Packaging Material'
    ],
    processSteps: [
      'Contact us via Call or WhatsApp (+91 8871600497) with scrap details.',
      'Select a preferred date and time slot for doorstep collection.',
      'Our team arrives at your location with digital weighing scales.',
      'Scrap is evaluated, weighed transparently, and handed over cleanly.'
    ],
    idealFor: ['Independent Houses', 'Apartment Complexes', 'Housing Societies', 'Residential Tenants'],
    iconName: 'Home'
  },
  {
    id: 'office-commercial-scrap',
    slug: 'office-commercial-scrap-pickup',
    title: 'Office & Commercial Scrap Collection',
    shortDesc: 'Systematic scrap removal for corporate offices, IT parks, banks, schools, and commercial establishments in Bhopal.',
    fullDesc: 'We assist businesses, corporate offices, banks, educational institutes, and retail centers in Bhopal with systematic scrap disposal. From old office furniture and discarded files to obsolete computers and server equipment, we handle commercial scrap clearing smoothly.',
    acceptedItems: [
      'Disused Office Desks, Chairs, Cabinets & Partition Scrap',
      'Outdated Desktop Computers, Monitors, Keyboards & Servers',
      'Bulk Office Paper Work, Shredded Files & Corrugated Boxes',
      'Air Conditioners, Ducting Material & Copper Wiring',
      'Aluminum Door Frames, Glass Partition Scrap & Steel Fixtures'
    ],
    processSteps: [
      'Submit your commercial enquiry with an approximate inventory list.',
      'On-site inspection and instant scheduling by our team.',
      'Quick clearing and removal without disturbing regular business operations.',
      'Complete documentation provided upon collection.'
    ],
    idealFor: ['Corporate Offices', 'Banks & Institutions', 'Co-working Spaces', 'Retail Stores & Malls'],
    iconName: 'Building2'
  },
  {
    id: 'industrial-scrap',
    slug: 'industrial-scrap-buying',
    title: 'Industrial & Factory Scrap Buying',
    shortDesc: 'Bulk scrap purchasing and factory dismantling clearance for industrial units across Bhopal.',
    fullDesc: 'Kabadiwala Bhopal purchases heavy industrial scrap, manufacturing offcuts, obsolete machinery, and factory scrap. We offer heavy lifting support and truck-based pickup for industrial plants, fabrication workshops, and manufacturing facilities in regions like Govindpura Industrial Area.',
    acceptedItems: [
      'Heavy Structural Iron, Steel Beams & Sheet Offcuts',
      'Copper Busbars, Cables, Transformers & Motors',
      'Brass Fittings, Aluminum Scrap & Alloy Offcuts',
      'Industrial Machinery Scrap, Lathes & Motors',
      'Factory Storage Racks, Drums & Metal Containers'
    ],
    processSteps: [
      'Initial site assessment for heavy or bulk scrap inventory.',
      'Coordination of lifting equipment and logistics transport.',
      'Systematic clearance with dedicated manpower.',
      'Immediate scrap handover and site clean-up.'
    ],
    idealFor: ['Govindpura Industrial Units', 'Fabrication Workshops', 'Manufacturing Plants', 'Warehouses & Stockyards'],
    iconName: 'Factory'
  },
  {
    id: 'paper-newspaper-scrap',
    slug: 'paper-newspaper-scrap-recycling',
    title: 'Paper, Books & Cardboard Scrap Recycling',
    shortDesc: 'Eco-conscious bulk paper collection for newspapers, office files, textbooks, and packaging boxes.',
    fullDesc: 'Paper constitutes a significant portion of recyclable waste. We collect all varieties of paper scrap including old newspapers (Raddi), school textbooks, office records, magazines, corrugated cartons, and cardboard boxes for systematic recycling.',
    acceptedItems: [
      'Old Newspapers (Raddi) & Daily Periodicals',
      'School Textbooks, Notebooks & Exam Papers',
      'Corrugated Shipping Boxes & Packaging Cartons',
      'Office Paper Files, Computer Sheets & Envelopes',
      'Brochures, Catalogues & Shredded Paper'
    ],
    processSteps: [
      'Gather your paper scrap in accessible bundles or boxes.',
      'Schedule a convenient pickup time.',
      'Verification of paper weight with accurate weighing instruments.',
      'Clean loading onto collection vehicles.'
    ],
    idealFor: ['Publishing Houses & Printers', 'Schools & Coaching Centers', 'Residential Homes', 'E-commerce Warehouses'],
    iconName: 'FileText'
  },
  {
    id: 'metal-scrap',
    slug: 'metal-iron-copper-scrap-recycling',
    title: 'Metal Scrap Collection (Iron, Copper, Aluminum, Brass)',
    shortDesc: 'High-value metal scrap buying for iron grills, copper wire, aluminum sections, and brass fixtures.',
    fullDesc: 'Metals can be endlessly recycled without losing quality. We buy all major types of metal scrap in Bhopal, including ferrous scrap (iron and steel) and non-ferrous scrap (copper wire, aluminum frames, brass utensils, and stainless steel).',
    acceptedItems: [
      'Iron Rods, Window Grills, Gates & Machinery Parts',
      'Stripped & Unstripped Copper Wires, Armatures & Coils',
      'Aluminum Window Sections, Utensils & Sheet Offcuts',
      'Brass Showpieces, Water Taps, Fittings & Utensils',
      'Stainless Steel Sink Units, Pipes & Decorative Items'
    ],
    processSteps: [
      'Separate or specify the type of metal scrap available.',
      'Get a clear evaluation and scheduling over Call or WhatsApp.',
      'Doorstep or site verification with calibrated scales.',
      'Effortless loading and removal.'
    ],
    idealFor: ['Building Renovation Contractors', 'Plumbers & Electricians', 'Residential Households', 'Commercial Workshop Premises'],
    iconName: 'Layers'
  },
  {
    id: 'e-waste-appliances',
    slug: 'electronic-ewaste-scrap-pickup',
    title: 'E-Waste & Discarded Electronic Appliances',
    shortDesc: 'Responsible electronic waste collection for old TVs, refrigerators, washing machines, and computer scrap.',
    fullDesc: 'Proper disposal of electronic waste prevents hazardous materials from reaching landfills. Kabadiwala Bhopal buys obsolete electronic appliances, broken computers, IT hardware, air conditioners, refrigerators, and circuit boards across Bhopal.',
    acceptedItems: [
      'Old CRT / LED Televisions & Display Monitors',
      'Single & Double Door Refrigerators & Washing Machines',
      'Split & Window Air Conditioners, Compressors & Coils',
      'Desktop CPUs, Laptops, Printers & Inverters',
      'Microwaves, Water Heaters (Geysers) & Stabilizers'
    ],
    processSteps: [
      'Share details or images of the electronics over WhatsApp.',
      'Receive pickup coordination from our team.',
      'Safe removal of heavy appliances by our staff.',
      'Responsible recycling channel routing.'
    ],
    idealFor: ['Homes Upgrading Appliances', 'IT Offices & Cyber Cafes', 'Hotels & Restaurants', 'Repair Shops'],
    iconName: 'Cpu'
  }
];
