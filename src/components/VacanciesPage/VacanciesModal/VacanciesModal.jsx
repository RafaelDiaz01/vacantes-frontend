import { useEffect, useRef } from "react";
import Close from "@mui/icons-material/Close";
import Verified from "@mui/icons-material/Verified";
import WorkOutline from "@mui/icons-material/WorkOutline";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import PaymentsOutlined from "@mui/icons-material/PaymentsOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import WorkOffOutlined from "@mui/icons-material/WorkOffOutlined";

import { VACANCY_DATA } from "../../data/vacanteData";
import {
  Section,
  KeyDetail,
  CheckItem,
  BulletItem,
  BenefitItem,
  ContactRow,
  bodyTextStyle,
  getIconSize,
} from "./VacancyAtoms";

const baseButton =
  "inline-flex h-[var(--button-height-default)] w-full cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-button)] px-[var(--button-padding-x)] sm:h-[var(--button-height-compact)] sm:w-auto " +
  "text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] tracking-[var(--letter-spacing-label-md)] " +
  "transition-colors duration-150 ease-in-out " +
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]";

const secondaryButton = `${baseButton} border border-[color:var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[color:var(--button-secondary-text)] hover:bg-[var(--button-secondary-hover)]`;
const primaryButton = `${baseButton} bg-[var(--button-primary-bg)] text-[color:var(--button-primary-text)] hover:bg-[var(--button-primary-hover)] active:bg-[var(--button-primary-active)]`;

function UnavailableState() {
  return (
    <div
      role="status"
      className="flex flex-col items-center px-[var(--spacing-2)] py-[var(--spacing-8)] text-center"
    >
      <span className="flex size-14 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-neutral-light)] text-[color:var(--color-neutral)]">
        <WorkOffOutlined sx={getIconSize(1.75)} aria-hidden="true" />
      </span>
      <h3 className="mt-[var(--spacing-4)] text-[length:var(--font-size-headline-sm)] leading-[var(--line-height-headline-sm)] font-[number:var(--font-weight-bold)] tracking-[var(--letter-spacing-headline-sm)] text-[color:var(--color-text-primary)]">
        Esta vacante ya no está disponible
      </h3>
      <p className={`mt-[var(--spacing-2)] max-w-sm ${bodyTextStyle}`}>
        Es posible que la empresa la haya cerrado o retirado. Vuelve al listado
        para ver otras vacantes que sí están abiertas.
      </p>
    </div>
  );
}

// Simple and clear component definition using standard props
export default function VacanteModal(props) {
  const dialogRef = useRef(null);

  // Fallback values defined simply
  const isOpen = props.open !== undefined ? props.open : true;
  const vacancy = props.vacante || VACANCY_DATA;
  const isUnavailable = !vacancy || vacancy.isAvailable === false;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && props.onVolver) {
        props.onVolver();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (dialogRef.current) {
      dialogRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, props.onVolver]);

  if (!isOpen) return null;

  // Contact list prepared cleanly
  const contactList = [];
  if (vacancy.contact?.name) {
    contactList.push({
      icon: PersonOutline,
      label: "Contacto",
      value: vacancy.contact.name,
    });
  }
  if (vacancy.contact?.email) {
    contactList.push({
      icon: EmailOutlined,
      label: "Correo",
      value: vacancy.contact.email,
      href: `mailto:${vacancy.contact.email}`,
    });
  }
  if (vacancy.contact?.phone) {
    contactList.push({
      icon: PhoneOutlined,
      label: "Teléfono",
      value: vacancy.contact.phone,
      href: `tel:${vacancy.contact.phone.replace(/\s/g, "")}`,
    });
  }
  if (vacancy.contact?.website) {
    contactList.push({
      icon: LanguageOutlined,
      label: "Sitio web",
      value: vacancy.contact.website,
      href: vacancy.contact.website,
      isExternal: true,
    });
  }

  return (
    <div
      className="fixed inset-0 z-[var(--z-index-modal)] flex items-stretch justify-center sm:items-center sm:p-[var(--spacing-4)]"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-[var(--overlay-blur)]"
        onClick={props.onVolver}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="vacante-titulo"
        className="relative flex h-full w-full flex-col overflow-hidden bg-[var(--color-surface)] shadow-[var(--shadow-modal)] focus:outline-none sm:h-auto sm:max-h-[90vh] sm:max-w-xl sm:rounded-[var(--radius-modal)]"
      >
        <header className="flex items-start justify-between gap-[var(--spacing-4)] border-b border-[color:var(--color-border)] px-[var(--spacing-4)] py-[var(--spacing-4)] sm:px-[var(--spacing-6)] sm:py-[var(--spacing-5)]">
          <div className="min-w-0">
            <h2
              id="vacante-titulo"
              className="text-[length:var(--font-size-headline-sm)] leading-[var(--line-height-headline-sm)] font-[number:var(--font-weight-bold)] tracking-[var(--letter-spacing-headline-md)] break-words text-[color:var(--color-text-primary)] sm:text-[length:var(--font-size-headline-md)] sm:leading-[var(--line-height-headline-md)]"
            >
              {isUnavailable ? "Vacante no disponible" : vacancy.title}
            </h2>

            {!isUnavailable && (
              <div className="mt-[var(--spacing-1)] flex flex-wrap items-center gap-x-[var(--spacing-2)] text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)]">
                <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-text-secondary)]">
                  {vacancy.company}
                </span>
                {vacancy.isVerified && (
                  <Verified
                    sx={getIconSize(1)}
                    className="text-[color:var(--color-primary)]"
                    titleAccess="Empresa verificada"
                  />
                )}
                {vacancy.postedDate && (
                  <>
                    <span
                      className="size-1 rounded-[var(--radius-full)] bg-[var(--color-border-strong)]"
                      aria-hidden="true"
                    />
                    <span className="text-[length:var(--font-size-label-sm)] text-[color:var(--color-text-muted)]">
                      {vacancy.postedDate}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={props.onVolver}
            aria-label="Cerrar y volver al listado"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-[var(--radius-default)] text-[color:var(--color-text-muted)] transition-colors duration-150 ease-in-out hover:bg-[var(--color-surface-subtle)] hover:text-[color:var(--color-text-primary)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] sm:size-8"
          >
            <Close sx={getIconSize(1.25)} aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-[var(--spacing-4)] py-[var(--spacing-5)] sm:px-[var(--spacing-6)] sm:py-[var(--spacing-6)]">
          {isUnavailable ? (
            <UnavailableState />
          ) : (
            <div className="space-y-[var(--spacing-6)]">
              <dl className="grid grid-cols-1 gap-[var(--spacing-3)] sm:grid-cols-3">
                <KeyDetail
                  icon={WorkOutline}
                  label="Tipo de contrato"
                  value={vacancy.contractType}
                />
                <KeyDetail
                  icon={LocationOnOutlined}
                  label="Ubicación"
                  value={vacancy.location}
                />
                <KeyDetail
                  icon={PaymentsOutlined}
                  label="Sueldo"
                  value={vacancy.salary}
                />
              </dl>

              <Section title="Descripción del puesto">
                <p className={bodyTextStyle}>
                  {vacancy.description?.beforeText}
                  <strong className="font-[number:var(--font-weight-bold)] text-[color:var(--color-text-primary)]">
                    {vacancy.description?.highlightText}
                  </strong>
                  {vacancy.description?.afterText}
                </p>
              </Section>

              {vacancy.responsibilities?.length > 0 && (
                <Section title="Responsabilidades clave">
                  <ul className="space-y-[var(--spacing-2)]">
                    {vacancy.responsibilities.map((item) => (
                      <CheckItem key={item} text={item} />
                    ))}
                  </ul>
                </Section>
              )}

              {vacancy.requirements?.length > 0 && (
                <Section title="Requisitos indispensables">
                  <ul className="space-y-[var(--spacing-2)]">
                    {vacancy.requirements.map((item) => (
                      <BulletItem key={item} text={item} />
                    ))}
                  </ul>
                </Section>
              )}

              {vacancy.benefits?.length > 0 && (
                <Section title="Beneficios del equipo">
                  <ul className="mt-[var(--spacing-3)] grid grid-cols-1 gap-[var(--spacing-3)] sm:grid-cols-2">
                    {vacancy.benefits.map((benefit) => (
                      <BenefitItem
                        key={benefit.id}
                        text={benefit.text}
                        icon={benefit.icon}
                        bgColor={benefit.bgColor}
                        textColor={benefit.textColor}
                      />
                    ))}
                  </ul>
                </Section>
              )}

              <Section title="Datos de contacto">
                {contactList.length > 0 ? (
                  <ul className="space-y-[var(--spacing-2)]">
                    {contactList.map((row) => (
                      <ContactRow
                        key={row.label}
                        icon={row.icon}
                        label={row.label}
                        value={row.value}
                        href={row.href}
                        isExternal={row.isExternal}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className={bodyTextStyle}>
                    La empresa no publicó datos de contacto para esta vacante.
                  </p>
                )}
              </Section>
            </div>
          )}
        </div>

        <footer className="flex flex-col-reverse gap-[var(--spacing-3)] border-t border-[color:var(--color-border)] bg-[var(--color-background)] px-[var(--spacing-4)] py-[var(--spacing-4)] sm:flex-row sm:items-center sm:justify-end sm:px-[var(--spacing-6)]">
          <button
            type="button"
            onClick={props.onVolver}
            className={secondaryButton}
          >
            <ArrowBack sx={getIconSize(1)} aria-hidden="true" />
            Volver al listado
          </button>

          {!isUnavailable && (
            <button
              type="button"
              onClick={props.onPostular}
              className={primaryButton}
            >
              Postularme a esta vacante
              <ArrowForward sx={getIconSize(1)} aria-hidden="true" />
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
