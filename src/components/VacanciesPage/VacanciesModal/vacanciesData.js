import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";

// Mock data for the job vacancy
export const VACANCY_DATA = {
  // Availability status
  isAvailable: true,

  // Basic job info
  title: "Senior Frontend Engineer React / Next.js",
  company: "App Vacantes",
  isVerified: true,
  postedDate: "Publicada hace 2 días",
  contractType: "Tiempo completo, indefinido",
  location: "Madrid, España (modelo híbrido)",
  salary: "45.000 € - 60.000 € brutos / año",

  // Job description parts
  description: {
    beforeText: "Buscamos un/a ",
    highlightText: "Senior Frontend Engineer React / Next.js",
    afterText:
      " para liderar el desarrollo, la arquitectura y la optimización de nuestras interfaces de usuario de alta escala. Trabajarás en estrecha colaboración con los equipos de Producto y Diseño para garantizar un rendimiento óptimo, arquitectura de componentes escalable y una experiencia de usuario fluida en todas las aplicaciones web de la compañía.",
  },

  // Responsibilities list
  responsibilities: [
    "Liderar la arquitectura técnica y el desarrollo de componentes con React, Next.js y TypeScript.",
    "Coordinar la integración de sistemas de diseño junto al equipo de Diseño, sincronizando tokens y componentes de interfaz.",
    "Optimizar el rendimiento web, la velocidad de carga (Core Web Vitals) y la accesibilidad en todas las plataformas.",
  ],

  // Requirements list
  requirements: [
    "Más de 5 años de experiencia en desarrollo frontend utilizando React, Next.js y arquitecturas modernas de JavaScript/TypeScript.",
    "Dominio sólido de renderizado del lado del servidor (SSR), Server Components, gestión de estado y optimización de rendimiento.",
    "Conocimiento riguroso de normativas de accesibilidad web (WCAG 2.1 AA/AAA).",
  ],

  // Perks and benefits with styles
  benefits: [
    {
      id: 1,
      text: "Modelo flexible: 2d oficina / 3d remoto",
      icon: HomeWorkOutlined,
      bgColor: "bg-[var(--color-primary-light)]",
      textColor: "text-[color:var(--color-primary)]",
    },
    {
      id: 2,
      text: "Presupuesto formativo 1.500 € / año",
      icon: MenuBookOutlined,
      bgColor: "bg-[var(--color-success-light)]",
      textColor: "text-[color:var(--color-success)]",
    },
    {
      id: 3,
      text: "Seguro de salud privado completo",
      icon: FavoriteBorderOutlined,
      bgColor: "bg-[var(--color-primary-subtle)]",
      textColor: "text-[color:var(--color-primary-dark)]",
    },
    {
      id: 4,
      text: "25 días laborables de vacaciones",
      icon: EventAvailableOutlined,
      bgColor: "bg-[var(--color-warning-light)]",
      textColor: "text-[color:var(--color-warning)]",
    },
  ],

  // Contact details
  contact: {
    name: "Equipo de Talento",
    email: "talento@appvacantes.example",
    phone: "+34 600 000 000",
    website: "https://appvacantes.example",
  },
};
