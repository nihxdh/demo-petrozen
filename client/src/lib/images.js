// Local assets – imported so Vite bundles them and URLs work in production
import logo from "@/assets/logo.png";
import industryRefinery from "@/assets/images/industry-refinery.jpg";
import industrialManufacturing from "@/assets/images/industrial-manufacturing.jpg";
import heroOilGas from "@/assets/images/hero-oil-gas.png";
import safety from "@/assets/images/safety.png";
import servicesHero from "@/assets/images/servicesHero.avif";
import aboutUsHero from "@/assets/images/aboutUsHero.jpg";
import aboutUS from "@/assets/images/aboutUS.jpg";
import missionVisionAbout from "@/assets/images/missionandvisiomAbout.png";
import airCompService from "@/assets/images/airCompService.jpeg";
import vaccumPumpServices from "@/assets/images/vaccumPumpServives.png";
import cncServices from "@/assets/images/cncServices.jpeg";

// Central image variables for use across all pages
export const IMAGES = {
  LOGO: logo,
  INDUSTRY_REFINERY: industryRefinery,
  INDUSTRIAL_MANUFACTURING: industrialManufacturing,
  HERO_OIL_GAS: heroOilGas,
  SAFETY: safety,
  SERVICES_HERO: servicesHero,
  ABOUT_HERO: aboutUsHero,
  ABOUT_US: aboutUS,
  MISSION_VISION_ABOUT: missionVisionAbout,
  AIR_COMP_SERVICE: airCompService,
  VACUUM_PUMP_SERVICE: vaccumPumpServices,
  CNC_SERVICE: cncServices,
};

// External hero/placeholder URLs (used where no local asset)
export const HERO_URLS = {
  ABOUT:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
  CONTACT:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80",
  PRIVACY:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2400&q=80",
  INDUSTRIES:
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2400&q=80",
  LEADERSHIP_1:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  LEADERSHIP_2:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  COMPANY:
    "https://images.unsplash.com/photo-1581093458791-9ab0a2e7b0e5?auto=format&fit=crop&w=2200&q=80",
  OIL_GAS:
    "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1600&q=80",
  INFRASTRUCTURE_1:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  INFRASTRUCTURE_2:
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
};
