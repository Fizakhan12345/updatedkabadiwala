export interface ScrapCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  acceptedMaterials: Array<{
    item: string;
    description: string;
  }>;
}

export const SCRAP_CATEGORIES: ScrapCategory[] = [
  {
    id: 'paper-and-cardboard',
    name: 'Paper & Cardboard',
    iconName: 'Newspaper',
    description: 'All grades of dry paper, publications, office records, and shipping boxes.',
    acceptedMaterials: [
      { item: 'Newspapers (Raddi)', description: 'Daily newspapers, magazines, and periodicals.' },
      { item: 'Books & Notebooks', description: 'School textbooks, registers, copybooks, and novels.' },
      { item: 'Corrugated Boxes', description: 'Cartons, e-commerce packaging boxes, and brown paper sheets.' },
      { item: 'Office Paper Files', description: 'A4 printing papers, confidential files, shredded paper, and letterheads.' }
    ]
  },
  {
    id: 'metals-ferrous-nonferrous',
    name: 'Ferrous & Non-Ferrous Metals',
    iconName: 'Hammer',
    description: 'High-density iron, steel, copper wiring, aluminum sections, and brass items.',
    acceptedMaterials: [
      { item: 'Iron & Steel Scrap', description: 'Grills, reinforcement bars, gates, old pipes, and heavy machinery offcuts.' },
      { item: 'Copper Wire & Coils', description: 'Electric cable wiring, motor windings, and copper tubing.' },
      { item: 'Aluminum Scrap', description: 'Window frames, aluminum utensils, cans, and section channels.' },
      { item: 'Brass & Bronze', description: 'Taps, valves, antique items, hardware fittings, and utensils.' },
      { item: 'Stainless Steel', description: 'Kitchen sinks, utensils, industrial tanks, and railing scrap.' }
    ]
  },
  {
    id: 'e-waste-and-appliances',
    name: 'E-Waste & Appliances',
    iconName: 'Tv',
    description: 'Consumer electronics, IT hardware, large home appliances, and electrical items.',
    acceptedMaterials: [
      { item: 'Computers & IT Hardware', description: 'Desktops, CPUs, laptops, monitors, printers, and UPS systems.' },
      { item: 'Air Conditioners & Coolers', description: 'Split ACs, window ACs, desert coolers, and compressors.' },
      { item: 'Refrigerators & Washing Machines', description: 'Single/double door fridges, washing machines, and geysers.' },
      { item: 'Small Home Electronics', description: 'Microwaves, induction stoves, music systems, and wiring.' }
    ]
  },
  {
    id: 'plastics-and-fibers',
    name: 'Plastics & Household Items',
    iconName: 'Package',
    description: 'Rigid plastic products, household furniture, buckets, and water tanks.',
    acceptedMaterials: [
      { item: 'Rigid Plastics', description: 'Plastic chairs, tables, buckets, mugs, and crates.' },
      { item: 'Water Tanks & Drums', description: 'Old Sintex water tanks, plastic barrels, and storage containers.' },
      { item: 'Broken Furniture', description: 'Wooden office tables, metal chairs, and steel almirahs.' }
    ]
  }
];
