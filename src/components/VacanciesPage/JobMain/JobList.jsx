import JobCard from './JobCard.jsx';
import Pagination from './Pagination.jsx';

const jobsData = [
  { title: "Senior Frontend Engineer React / Next.js", company: "TechNova Solutions", location: "Remoto (Global)", type: "Jornada Completa", salary: "€ 60,000 - € 75,000 / año", logoColor: "bg-blue-600" },
  { title: "Product Designer Lead (Design Systems)", company: "Creative Pulse", location: "Madrid (Híbrido)", type: "Jornada Completa", salary: "€ 50,000 - € 65,000 / año", logoColor: "bg-purple-600" },
  { title: "DevOps Specialist AWS & Kubernetes", company: "CloudScale", location: "Remoto (España y LATAM)", type: "Jornada Completa", salary: "€ 55,000 - € 70,000 / año", logoColor: "bg-orange-500" },
  { title: "Data Analyst BI & Analytics Engineer", company: "DataDriven Co.", location: "Barcelona (Híbrido)", type: "Jornada Completa", salary: "€ 45,000 - € 55,000 / año", logoColor: "bg-green-600" },
  { title: "Product Manager - Enterprise SaaS", company: "Innovate Hub", location: "Remoto (Global)", type: "Jornada Completa", salary: "€ 60,000 - € 85,000 / año", logoColor: "bg-slate-800" },
];
/**
 * Renders a list of job cards.
 * @returns {JSX.Element} - The rendered job list.
 */
export default function JobList() {
  return (
    <section className="w-full mx-auto px-[var(--layout-margin)] pb-16 pt-4">
      <div className="flex justify-between items-end mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-[var(--font-size-headline-md)] font-bold text-[var(--color-text-primary)]">Ofertas de Empleo Disponibles</h2>
          <span className="bg-[var(--color-primary-light)] text-[var(--color-primary-hover)] px-2.5 py-0.5 rounded-[var(--badge-radius)] text-[var(--badge-font-size)] font-bold">145 vacantes</span>
        </div>
        <div className="text-[var(--font-size-label-sm)] text-[var(--color-text-muted)]">
          Mostrando <span className="font-semibold text-[var(--color-text-secondary)]">1-6</span> de 145 resultados
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {jobsData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>

      <Pagination />
    </section>
  );
}