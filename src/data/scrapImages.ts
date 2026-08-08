import heroScrapPickup from '../assets/images/hero_kabadiwala_bhopal_clean_1786147200_1786147182267.jpg';
import step1Contact from '../assets/images/step1_contact_pickup_1786140976520.jpg';
import step2Doorstep from '../assets/images/step2_doorstep_collection_1786140987790.jpg';
import step3Weigh from '../assets/images/step3_weigh_and_sort_1786140998696.jpg';
import step4Loading from '../assets/images/step4_loading_vehicle_1786141012078.jpg';
import categoryPaper from '../assets/images/category_paper_raddi_1786141027255.jpg';
import categoryMetal from '../assets/images/category_metal_scrap_1786141038920.jpg';
import categoryEwaste from '../assets/images/category_ewaste_1786141050279.jpg';
import categoryPlastic from '../assets/images/category_plastic_household_1786141060815.jpg';
import categoryAppliances from '../assets/images/category_old_appliances_1786141073357.jpg';
import teamWork from '../assets/images/kabadiwala_team_work_1786141084071.jpg';

export const HERO_IMAGE = {
  src: heroScrapPickup,
  alt: 'Professional Kabadiwala Bhopal team with pickup vehicle and digital weighing scale for doorstep scrap collection',
  caption: 'Professional doorstep scrap pickup across Bhopal residential & commercial areas'
};

export const WORKFLOW_IMAGES = [
  {
    step: 1,
    title: 'Contact Us',
    src: step1Contact,
    alt: 'Customer calling or sending WhatsApp message to book scrap pickup',
    caption: 'Step 1: Share your location and scrap details via phone or WhatsApp'
  },
  {
    step: 2,
    title: 'Scrap Pickup',
    src: step2Doorstep,
    alt: 'Worker collecting old newspapers and cardboard bundles from home doorstep',
    caption: 'Step 2: On-time collection directly from your doorstep'
  },
  {
    step: 3,
    title: 'Weigh & Sort',
    src: step3Weigh,
    alt: 'Scrap material being weighed on calibrated electronic platform scale',
    caption: 'Step 3: Honest digital weighing conducted in front of you'
  },
  {
    step: 4,
    title: 'Collection & Transport',
    src: step4Loading,
    alt: 'Worker loading sorted scrap bundles into collection vehicle',
    caption: 'Step 4: Clean loading and transport for eco-friendly recycling'
  }
];

export const CATEGORY_IMAGES = {
  paper: {
    src: categoryPaper,
    alt: 'Bundled old newspapers, books, and corrugated boxes ready for recycling',
    caption: 'Paper, raddi, and cardboard packaging collected in Bhopal'
  },
  metal: {
    src: categoryMetal,
    alt: 'Sorted iron grills, steel pipes, copper wiring, and aluminum scrap',
    caption: 'Ferrous and non-ferrous metal scrap sorting'
  },
  ewaste: {
    src: categoryEwaste,
    alt: 'Discarded computer CPUs, monitors, cables, and electronic hardware',
    caption: 'Responsible e-waste and electronics recycling'
  },
  plastic: {
    src: categoryPlastic,
    alt: 'Stacked rigid plastic chairs, buckets, drums, and storage containers',
    caption: 'Household plastic scrap items collected for recycling'
  },
  appliances: {
    src: categoryAppliances,
    alt: 'Old air conditioners, refrigerators, washing machines, and desert coolers',
    caption: 'Large home appliances scrap collection'
  }
};

export const ABOUT_TEAM_IMAGE = {
  src: teamWork,
  alt: 'Kabadiwala Bhopal ground team sorting and organizing collected scrap',
  caption: 'Local Bhopal team managing daily scrap collection and sorting operations'
};

// Rotation pool for the 33 locality pages so each page gets authentic visual context without exact duplicate layouts
export const LOCALITY_PHOTOGRAPHY_POOL = [
  {
    src: step2Doorstep,
    caption: 'Household newspaper and cardboard pickup in Bhopal',
    altTemplate: (locality: string) => `Doorstep scrap collection service in ${locality} Bhopal`
  },
  {
    src: step3Weigh,
    caption: 'Digital scale weighing at customer location',
    altTemplate: (locality: string) => `Transparent scrap weighing process in ${locality} Bhopal`
  },
  {
    src: categoryPaper,
    caption: 'Raddi and paper scrap collection',
    altTemplate: (locality: string) => `Paper and corrugated box scrap pickup in ${locality} Bhopal`
  },
  {
    src: categoryMetal,
    caption: 'Iron, steel, and copper scrap collection',
    altTemplate: (locality: string) => `Metal scrap pickup service in ${locality} Bhopal`
  },
  {
    src: step4Loading,
    caption: 'Scrap loaded onto collection vehicle',
    altTemplate: (locality: string) => `Scrap pickup vehicle dispatched in ${locality} Bhopal`
  },
  {
    src: categoryEwaste,
    caption: 'E-waste and computer scrap collection',
    altTemplate: (locality: string) => `Electronics and IT e-waste collection in ${locality} Bhopal`
  },
  {
    src: categoryAppliances,
    caption: 'Old AC, cooler, and fridge scrap collection',
    altTemplate: (locality: string) => `Home appliance scrap collection in ${locality} Bhopal`
  },
  {
    src: categoryPlastic,
    caption: 'Household plastic scrap pickup',
    altTemplate: (locality: string) => `Plastic scrap collection service in ${locality} Bhopal`
  },
  {
    src: teamWork,
    caption: 'Local scrap collection team in operation',
    altTemplate: (locality: string) => `Scrap pickup team operating near ${locality} Bhopal`
  },
  {
    src: heroScrapPickup,
    caption: 'Doorstep scrap pickup action',
    altTemplate: (locality: string) => `Scrap collection service active in ${locality} Bhopal`
  }
];

export function getLocalityImage(index: number, localityName: string) {
  const poolItem = LOCALITY_PHOTOGRAPHY_POOL[index % LOCALITY_PHOTOGRAPHY_POOL.length];
  return {
    src: poolItem.src,
    caption: poolItem.caption,
    alt: poolItem.altTemplate(localityName)
  };
}
