import HomeWorkOutlined from "@mui/icons-material/HomeWorkOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";

// Mock data for the job vacancy
export const VACANTE = {
  // Availability status
  disponible: true,

  // Basic job info
  titulo: "Senior Frontend Engineer React / Next.js",
  empresa: "App Vacantes",
  verificada: true,
  publicada: "Publicada hace 2 días",
  contrato: "Tiempo completo, indefinido",
  ubicacion: "Madrid, España (modelo híbrido)",
  sueldo: "45.000 € - 60.000 € brutos / año",

  // Job description parts
  descripcion: {
    antes: "Buscamos un/a ",
    resaltado: "Senior Frontend Engineer React / Next.js",
    despues:
      " para liderar el desarrollo, la arquitectura y la optimización de nuestras interfaces de usuario de alta escala. Trabajarás en estrecha colaboración con los equipos de Producto y Diseño para garantizar un rendimiento óptimo, arquitectura de componentes escalable y una experiencia de usuario fluida en todas las aplicaciones web de la compañía.",
  },

  // Responsibilities list
  responsabilidades: [
    "Liderar la arquitectura técnica y el desarrollo de componentes con React, Next.js y TypeScript.",
    "Coordinar la integración de sistemas de diseño junto al equipo de Diseño, sincronizando tokens y componentes de interfaz.",
    "Optimizar el rendimiento web, la velocidad de carga (Core Web Vitals) y la accesibilidad en todas las plataformas.",
  ],

  // Requirements list
  requisitos: [
    "Más de 5 años de experiencia en desarrollo frontend utilizando React, Next.js y arquitecturas modernas de JavaScript/TypeScript.",
    "Dominio sólido de renderizado del lado del servidor (SSR), Server Components, gestión de estado y optimización de rendimiento.",
    "Conocimiento riguroso de normativas de accesibilidad web (WCAG 2.1 AA/AAA).",
  ],

  // Perks and benefits with styles
  beneficios: [
    {
      texto: "Modelo flexible: 2d oficina / 3d remoto",
      icono: HomeWorkOutlined,
      fondo: "bg-[var(--color-primary-light)]",
      color: "text-[color:var(--color-primary)]",
    },
    {
      texto: "Presupuesto formativo 1.500 € / año",
      icono: MenuBookOutlined,
      fondo: "bg-[var(--color-success-light)]",
      color: "text-[color:var(--color-success)]",
    },
    {
      texto: "Seguro de salud privado completo",
      icono: FavoriteBorderOutlined,
      fondo: "bg-[var(--color-primary-subtle)]",
      color: "text-[color:var(--color-primary-dark)]",
    },
    {
      texto: "25 días laborables de vacaciones",
      icono: EventAvailableOutlined,
      fondo: "bg-[var(--color-warning-light)]",
      color: "text-[color:var(--color-warning)]",
    },
  ],

  // Contact details
  contacto: {
    nombre: "Equipo de Talento",
    correo: "talento@appvacantes.example",
    telefono: "+34 600 000 000",
    sitioWeb: "https://appvacantes.example",
  },
};
