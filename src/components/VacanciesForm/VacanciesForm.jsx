import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { validateVacancyForm } from "./vacancyValidation";

// Initial state matching all inputs in the form
const INITIAL_FORM = {
  title: "",
  description: "",
  requirements: "",
  contractType: "Tiempo completo",
  locationMode: "",
  salary: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  companyWebsite: "",
};

export default function VacanciesForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update field value and clear its validation error when typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Reset form values, errors, and feedback message
  const handleCancel = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus({ type: "", message: "" });
  };

  // Validate fields and submit form data while keeping inputs on error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const { isValid, errors: validationErrors } = validateVacancyForm(formData);
    setErrors(validationErrors);
    if (!isValid) return;

    setIsSubmitting(true);
    try {
      // TODO: Replace with real backend endpoint
      const response = await fetch("http://localhost:3000/api/vacancies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to publish vacancy");

      setStatus({
        type: "success",
        message: "La vacante se publicó correctamente.",
      });
      setFormData(INITIAL_FORM);
    } catch {
      setStatus({
        type: "error",
        message: "No se pudo publicar la vacante. Intenta de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build input classes using design tokens and error state
  const getInputClass = (field) =>
    `w-full h-[var(--input-height)] px-[var(--input-padding-x)] py-[var(--input-padding-y)] text-[var(--font-size-body-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] bg-[var(--color-surface)] border rounded-[var(--radius-input)] transition-colors focus:outline-none ${
      errors[field]
        ? "border-[var(--color-error)] shadow-[var(--shadow-error)]"
        : "border-[var(--color-border-strong)] hover:border-[var(--color-border-hover)] focus:border-[var(--color-primary)] focus:shadow-[var(--shadow-focus)]"
    }`;

  // Build textarea classes using design tokens and error state
  const getTextareaClass = (field) =>
    `w-full px-[var(--input-padding-x)] py-[var(--input-padding-y)] text-[var(--font-size-body-md)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] bg-[var(--color-surface)] border rounded-[var(--radius-input)] transition-colors focus:outline-none ${
      errors[field]
        ? "border-[var(--color-error)] shadow-[var(--shadow-error)]"
        : "border-[var(--color-border-strong)] hover:border-[var(--color-border-hover)] focus:border-[var(--color-primary)] focus:shadow-[var(--shadow-focus)]"
    }`;

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      {/* Call existing navigation bar */}
      <Navbar />

      {/* Main form container */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-[var(--font-size-headline-lg)] leading-[var(--line-height-headline-lg)] font-[var(--font-weight-bold)] tracking-[var(--letter-spacing-headline-lg)] text-[var(--color-text-primary)] mb-6">
          Publicar Nueva Vacante
        </h1>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-[var(--shadow-card)]">
          {/* Form header */}
          <div className="flex flex-wrap items-start justify-between gap-2 pb-5 mb-6 border-b border-[var(--color-border)]">
            <div>
              <h2 className="text-[var(--font-size-headline-sm)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
                Formulario de Registro de Vacante
              </h2>
              <p className="text-[var(--font-size-body-sm)] text-[var(--color-text-muted)] mt-1">
                Completa los detalles de la oferta para publicar y atraer a los
                mejores perfiles de desarrollo.
              </p>
            </div>
            <span className="text-[var(--font-size-label-sm)] text-[var(--color-text-muted)]">
              <span className="text-[var(--color-error)] font-[var(--font-weight-semibold)]">
                *
              </span>{" "}
              Campos obligatorios
            </span>
          </div>

          {/* Feedback banner for success or error */}
          {status.message && (
            <div
              className={`mb-6 px-4 py-3 rounded-[var(--radius-default)] text-[var(--font-size-body-sm)] font-[var(--font-weight-medium)] border ${
                status.type === "success"
                  ? "bg-[var(--color-success-light)] text-[var(--color-success)] border-[var(--color-success-border)]"
                  : "bg-[var(--color-error-light)] text-[var(--color-error)] border-[var(--color-error-border)]"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Job title */}
            <div>
              <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                Título del Puesto{" "}
                <span className="text-[var(--color-error)]">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ingeniero/a Frontend Senior (React & TypeScript)"
                className={getInputClass("title")}
              />
              {errors.title && (
                <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                  {errors.title}
                </p>
              )}
            </div>

            {/* Job description */}
            <div>
              <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                Descripción del Puesto{" "}
                <span className="text-[var(--color-error)]">*</span>
              </label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe las responsabilidades principales, el stack tecnológico y el impacto del rol..."
                className={getTextareaClass("description")}
              />
              {errors.description && (
                <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Essential requirements */}
            <div>
              <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                Requisitos Indispensables
              </label>
              <textarea
                name="requirements"
                rows="3"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Enumera los conocimientos técnicos, años de experiencia o certificaciones requeridas..."
                className={getTextareaClass("requirements")}
              />
            </div>

            {/* Key job conditions */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--color-border)]">
                <h3 className="text-[var(--font-size-title-md)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
                  Condiciones Clave del Puesto
                </h3>
                <span className="text-[var(--font-size-label-sm)] text-[var(--color-text-muted)]">
                  Contrato, ubicación y retribución
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Tipo de Contrato{" "}
                    <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <select
                    name="contractType"
                    value={formData.contractType}
                    onChange={handleChange}
                    className={getInputClass("contractType")}
                  >
                    <option value="Tiempo completo">Tiempo completo</option>
                    <option value="Medio tiempo">Medio tiempo</option>
                    <option value="Por proyecto">Por proyecto</option>
                  </select>
                  {errors.contractType && (
                    <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                      {errors.contractType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Ubicación / Modalidad{" "}
                    <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="locationMode"
                    value={formData.locationMode}
                    onChange={handleChange}
                    placeholder="Oaxaca / Híbrido o Remoto"
                    className={getInputClass("locationMode")}
                  />
                  {errors.locationMode && (
                    <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                      {errors.locationMode}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Rango Salarial Bruto
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="15000"
                    className={getInputClass("salary")}
                  />
                  {errors.salary && (
                    <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                      {errors.salary}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--color-border)]">
                <h3 className="text-[var(--font-size-title-md)] font-[var(--font-weight-bold)] text-[var(--color-text-primary)]">
                  Datos de Contacto
                </h3>
                <span className="text-[var(--font-size-label-sm)] text-[var(--color-text-muted)]">
                  Canales de recepción de candidaturas
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Nombre de Contacto / Reclutador
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Equipo de Talento Tech"
                    className={getInputClass("contactName")}
                  />
                </div>

                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Correo Electrónico{" "}
                    <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="talento@appvacantes.example"
                    className={getInputClass("contactEmail")}
                  />
                  {errors.contactEmail && (
                    <p className="text-[var(--font-size-label-sm)] text-[var(--color-error)] mt-1">
                      {errors.contactEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+52 951 000 0000"
                    className={getInputClass("contactPhone")}
                  />
                </div>

                <div>
                  <label className="block text-[var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-secondary)] mb-1.5">
                    Sitio Web de la Compañía
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://empresa-ejemplo.com"
                    className={getInputClass("companyWebsite")}
                  />
                </div>
              </div>
            </div>

            {/* Form buttons */}
            <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="h-[var(--button-height-default)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-[var(--button-font-size)] font-[var(--button-font-weight)] text-[var(--button-secondary-text)] bg-[var(--button-secondary-bg)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] rounded-[var(--radius-button)] transition-colors"
              >
                Cancelar Cambios
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[var(--button-height-default)] px-5 py-[var(--button-padding-y)] text-[var(--button-font-size)] font-[var(--button-font-weight)] text-[var(--button-primary-text)] bg-[var(--button-primary-bg)] hover:bg-[var(--button-primary-hover)] active:bg-[var(--button-primary-active)] disabled:opacity-60 rounded-[var(--radius-button)] transition-colors"
              >
                {isSubmitting ? "Publicando..." : "Publicar Vacante"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
