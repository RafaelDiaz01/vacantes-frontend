// Datos de prueba para los filtros, cambiar por los catalogos de la API 

export const INITIAL_FILTERS = {
  location: "",
  category: "",
  employmentType: "",
};

export const FILTER_OPTIONS = {
  location: [
    { value: "remoto", label: "Remoto" },
    { value: "hibrido", label: "Híbrido" },
    { value: "oaxaca", label: "Oaxaca" },
    { value: "cdmx", label: "Ciudad de México" },
    { value: "guadalajara", label: "Guadalajara" },
    { value: "monterrey", label: "Monterrey" },
  ],
  category: [
    { value: "desarrollo", label: "Desarrollo de software" },
    { value: "diseno", label: "Diseño" },
    { value: "datos", label: "Datos y analítica" },
    { value: "devops", label: "DevOps e infraestructura" },
    { value: "producto", label: "Producto" },
  ],
  employmentType: [
    { value: "tiempo-completo", label: "Jornada completa" },
    { value: "medio-tiempo", label: "Medio tiempo" },
    { value: "temporal", label: "Temporal" },
    { value: "practicas", label: "Prácticas" },
    { value: "freelance", label: "Freelance" },
  ],
};