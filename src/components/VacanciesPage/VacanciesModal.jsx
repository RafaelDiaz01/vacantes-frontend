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

import { VACANTE } from "./vacanteData";
import {
  Seccion,
  DatoClave,
  ItemConCheck,
  ItemConPunto,
  Beneficio,
  FilaContacto,
  textoCuerpo,
  tamanoIcono,
} from "./VacanteAtoms";

// Base styles for the modal buttons
const botonBase =
  "inline-flex h-[var(--button-height-default)] w-full cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-button)] px-[var(--button-padding-x)] sm:h-[var(--button-height-compact)] sm:w-auto " +
  "text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] tracking-[var(--letter-spacing-label-md)] " +
  "transition-colors duration-150 ease-in-out " +
  "focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]";

// Styles for secondary and primary buttons
const botonSecundario = `${botonBase} border border-[color:var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[color:var(--button-secondary-text)] hover:bg-[var(--button-secondary-hover)]`;
const botonPrimario = `${botonBase} bg-[var(--button-primary-bg)] text-[color:var(--button-primary-text)] hover:bg-[var(--button-primary-hover)] active:bg-[var(--button-primary-active)]`;

// Show a message when the vacancy is unavailable
function EstadoNoDisponible() {
  return (
    <div
      role="status"
      className="flex flex-col items-center px-[var(--spacing-2)] py-[var(--spacing-8)] text-center"
    >
      <span className="flex size-14 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-neutral-light)] text-[color:var(--color-neutral)]">
        <WorkOffOutlined sx={tamanoIcono(1.75)} aria-hidden="true" />
      </span>
      <h3 className="mt-[var(--spacing-4)] text-[length:var(--font-size-headline-sm)] leading-[var(--line-height-headline-sm)] font-[number:var(--font-weight-bold)] tracking-[var(--letter-spacing-headline-sm)] text-[color:var(--color-text-primary)]">
        Esta vacante ya no está disponible
      </h3>
      <p className={`mt-[var(--spacing-2)] max-w-sm ${textoCuerpo}`}>
        Es posible que la empresa la haya cerrado o retirado. Vuelve al listado
        para ver otras vacantes que sí están abiertas.
      </p>
    </div>
  );
}

export default function VacanteModal({
  open = true,
  vacante = VACANTE,
  onVolver = () => {},
  onPostular = () => {},
}) {
  // Store a reference to the dialog
  const dialogoRef = useRef(null);

  // Check if the vacancy is unavailable
  const noDisponible = !vacante || vacante.disponible === false;

  // Handle the Escape key and prevent background scrolling
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && onVolver();
    document.addEventListener("keydown", onKeyDown);

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogoRef.current?.focus();

    // Restore the previous settings when the modal closes
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflowPrevio;
    };
  }, [open, onVolver]);

  // Hide the modal when it is closed
  if (!open) return null;

  // Get the vacancy details and set default values
  const {
    titulo,
    empresa,
    verificada,
    publicada,
    contrato,
    ubicacion,
    sueldo,
    descripcion,
    responsabilidades = [],
    requisitos = [],
    beneficios = [],
    contacto = {},
  } = vacante ?? {};

  // Build the contact list from the available data
  const filasContacto = [
    { icono: PersonOutline, etiqueta: "Contacto", valor: contacto.nombre },
    {
      icono: EmailOutlined,
      etiqueta: "Correo",
      valor: contacto.correo,
      href: contacto.correo && `mailto:${contacto.correo}`,
    },
    {
      icono: PhoneOutlined,
      etiqueta: "Teléfono",
      valor: contacto.telefono,
      href: contacto.telefono && `tel:${contacto.telefono.replace(/\s/g, "")}`,
    },
    {
      icono: LanguageOutlined,
      etiqueta: "Sitio web",
      valor: contacto.sitioWeb,
      href: contacto.sitioWeb,
      externo: true,
    },
  ].filter((fila) => fila.valor);

  return (
    <div
      className="fixed inset-0 z-[var(--z-index-modal)] flex items-stretch justify-center sm:items-center sm:p-[var(--spacing-4)]"
      role="presentation"
    >
      {/* Close the modal when clicking the background */}
      <div
        className="absolute inset-0 bg-[var(--overlay-bg)] backdrop-blur-[var(--overlay-blur)]"
        onClick={onVolver}
        aria-hidden="true"
      />

      {/* Main modal container */}
      <div
        ref={dialogoRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="vacante-titulo"
        className="relative flex h-full w-full flex-col overflow-hidden bg-[var(--color-surface)] shadow-[var(--shadow-modal)] focus:outline-none sm:h-auto sm:max-h-[90vh] sm:max-w-xl sm:rounded-[var(--radius-modal)]"
      >
        {/* Show the vacancy title and company information */}
        <header className="flex items-start justify-between gap-[var(--spacing-4)] border-b border-[color:var(--color-border)] px-[var(--spacing-4)] py-[var(--spacing-4)] sm:px-[var(--spacing-6)] sm:py-[var(--spacing-5)]">
          <div className="min-w-0">
            <h2
              id="vacante-titulo"
              className="text-[length:var(--font-size-headline-sm)] leading-[var(--line-height-headline-sm)] font-[number:var(--font-weight-bold)] tracking-[var(--letter-spacing-headline-md)] break-words text-[color:var(--color-text-primary)] sm:text-[length:var(--font-size-headline-md)] sm:leading-[var(--line-height-headline-md)]"
            >
              {noDisponible ? "Vacante no disponible" : titulo}
            </h2>

            {!noDisponible && (
              <div className="mt-[var(--spacing-1)] flex flex-wrap items-center gap-x-[var(--spacing-2)] text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)]">
                <span className="font-[number:var(--font-weight-medium)] text-[color:var(--color-text-secondary)]">
                  {empresa}
                </span>
                {verificada && (
                  <Verified
                    sx={tamanoIcono(1)}
                    className="text-[color:var(--color-primary)]"
                    titleAccess="Empresa verificada"
                  />
                )}
                {publicada && (
                  <>
                    <span
                      className="size-1 rounded-[var(--radius-full)] bg-[var(--color-border-strong)]"
                      aria-hidden="true"
                    />
                    <span className="text-[length:var(--font-size-label-sm)] text-[color:var(--color-text-muted)]">
                      {publicada}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Close the modal */}
          <button
            type="button"
            onClick={onVolver}
            aria-label="Cerrar y volver al listado"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-[var(--radius-default)] text-[color:var(--color-text-muted)] transition-colors duration-150 ease-in-out hover:bg-[var(--color-surface-subtle)] hover:text-[color:var(--color-text-primary)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] sm:size-8"
          >
            <Close sx={tamanoIcono(1.25)} aria-hidden="true" />
          </button>
        </header>

        {/* Show the vacancy details */}
        <div className="flex-1 overflow-y-auto px-[var(--spacing-4)] py-[var(--spacing-5)] sm:px-[var(--spacing-6)] sm:py-[var(--spacing-6)]">
          {noDisponible ? (
            <EstadoNoDisponible />
          ) : (
            <div className="space-y-[var(--spacing-6)]">
              {/* Show the main job information */}
              <dl className="grid grid-cols-1 gap-[var(--spacing-3)] sm:grid-cols-3">
                <DatoClave
                  icono={WorkOutline}
                  etiqueta="Tipo de contrato"
                  valor={contrato}
                />
                <DatoClave
                  icono={LocationOnOutlined}
                  etiqueta="Ubicación"
                  valor={ubicacion}
                />
                <DatoClave
                  icono={PaymentsOutlined}
                  etiqueta="Sueldo"
                  valor={sueldo}
                />
              </dl>

              {/* Show the job description */}
              <Seccion titulo="Descripción del puesto">
                <p className={textoCuerpo}>
                  {descripcion?.antes}
                  <strong className="font-[number:var(--font-weight-bold)] text-[color:var(--color-text-primary)]">
                    {descripcion?.resaltado}
                  </strong>
                  {descripcion?.despues}
                </p>
              </Seccion>

              {/* Show the job responsibilities */}
              {responsabilidades.length > 0 && (
                <Seccion titulo="Responsabilidades clave">
                  <ul className="space-y-[var(--spacing-2)]">
                    {responsabilidades.map((texto) => (
                      <ItemConCheck key={texto}>{texto}</ItemConCheck>
                    ))}
                  </ul>
                </Seccion>
              )}

              {/* Show the job requirements */}
              {requisitos.length > 0 && (
                <Seccion titulo="Requisitos indispensables">
                  <ul className="space-y-[var(--spacing-2)]">
                    {requisitos.map((texto) => (
                      <ItemConPunto key={texto}>{texto}</ItemConPunto>
                    ))}
                  </ul>
                </Seccion>
              )}

              {/* Show the available benefits */}
              {beneficios.length > 0 && (
                <Seccion titulo="Beneficios del equipo">
                  <ul className="mt-[var(--spacing-3)] grid grid-cols-1 gap-[var(--spacing-3)] sm:grid-cols-2">
                    {beneficios.map((b) => (
                      <Beneficio key={b.texto} {...b} />
                    ))}
                  </ul>
                </Seccion>
              )}

              {/* Show the company contact information */}
              <Seccion titulo="Datos de contacto">
                {filasContacto.length > 0 ? (
                  <ul className="space-y-[var(--spacing-2)]">
                    {filasContacto.map((fila) => (
                      <FilaContacto key={fila.etiqueta} {...fila} />
                    ))}
                  </ul>
                ) : (
                  <p className={textoCuerpo}>
                    La empresa no publicó datos de contacto para esta vacante.
                  </p>
                )}
              </Seccion>
            </div>
          )}
        </div>

        {/* Show the modal action buttons */}
        <footer className="flex flex-col-reverse gap-[var(--spacing-3)] border-t border-[color:var(--color-border)] bg-[var(--color-background)] px-[var(--spacing-4)] py-[var(--spacing-4)] sm:flex-row sm:items-center sm:justify-end sm:px-[var(--spacing-6)]">
          <button type="button" onClick={onVolver} className={botonSecundario}>
            <ArrowBack sx={tamanoIcono(1)} aria-hidden="true" />
            Volver al listado
          </button>

          {/* Show the apply button only when the vacancy is available */}
          {!noDisponible && (
            <button
              type="button"
              onClick={onPostular}
              className={botonPrimario}
            >
              Postularme a esta vacante
              <ArrowForward sx={tamanoIcono(1)} aria-hidden="true" />
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
