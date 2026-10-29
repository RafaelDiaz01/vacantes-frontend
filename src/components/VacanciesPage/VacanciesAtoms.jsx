import Check from "@mui/icons-material/Check";

// Shared text styles for body content
export const textoCuerpo =
  "text-[length:var(--font-size-body-md)] leading-[var(--line-height-body-md)] tracking-[var(--letter-spacing-body-md)] text-[color:var(--color-text-tertiary)]";

// Set the icon size in rem units
export const tamanoIcono = (rem) => ({ fontSize: `${rem}rem` });

// Display a section with a title and content
export function Seccion({ titulo, children }) {
  return (
    <section>
      <h3 className="mb-[var(--spacing-2)] text-[length:var(--font-size-label-sm)] leading-[var(--line-height-label-sm)] font-[number:var(--font-weight-bold)] tracking-[0.06em] text-[color:var(--color-text-primary)] uppercase">
        {titulo}
      </h3>
      {children}
    </section>
  );
}

// Display a key detail with an icon, label, and value
export function DatoClave({ icono: Icono, etiqueta, valor }) {
  return (
    <div className="flex items-start gap-[var(--spacing-3)] rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[var(--color-background)] p-[var(--spacing-3)]">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-primary-light)] text-[color:var(--color-primary)]">
        <Icono sx={tamanoIcono(1.125)} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-[length:var(--font-size-caption)] leading-[var(--line-height-caption)] font-[number:var(--font-weight-semibold)] tracking-[var(--letter-spacing-caption)] text-[color:var(--color-text-muted)]">
          {etiqueta}
        </dt>
        <dd
          className={`mt-0.5 text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] font-[number:var(--font-weight-medium)] break-words ${
            valor
              ? "text-[color:var(--color-text-secondary)]"
              : "text-[color:var(--color-text-placeholder)]"
          }`}
        >
          {valor || "No especificado"}
        </dd>
      </div>
    </div>
  );
}

// Display a list item with a check icon
export function ItemConCheck({ children }) {
  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-primary-subtle)] text-[color:var(--color-primary)]">
        <Check sx={tamanoIcono(0.75)} aria-hidden="true" />
      </span>
      <span className={textoCuerpo}>{children}</span>
    </li>
  );
}

// Display a list item with a bullet point
export function ItemConPunto({ children }) {
  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span
        className="mt-[0.55rem] size-1.5 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-text-placeholder)]"
        aria-hidden="true"
      />
      <span className={textoCuerpo}>{children}</span>
    </li>
  );
}

// Display a benefit with a custom icon and colors
export function Beneficio({ texto, icono: Icono, fondo, color }) {
  return (
    <li className="flex items-center gap-[var(--spacing-3)] rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[var(--color-background)] p-[var(--spacing-3)]">
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-default)] ${fondo} ${color}`}
      >
        <Icono sx={tamanoIcono(1.125)} aria-hidden="true" />
      </span>
      <span className="text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-text-secondary)]">
        {texto}
      </span>
    </li>
  );
}

// Display contact information with an optional link
export function FilaContacto({ icono: Icono, etiqueta, valor, href, externo }) {
  // Use a link when a URL is provided
  const contenido = href ? (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded-[var(--radius-sm)] break-all text-[color:var(--color-primary)] transition-colors duration-150 ease-in-out hover:text-[color:var(--color-primary-hover)] hover:underline focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
    >
      {valor}
    </a>
  ) : (
    <span className="text-[color:var(--color-text-secondary)]">{valor}</span>
  );

  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-[color:var(--color-text-muted)]">
        <Icono sx={tamanoIcono(1.125)} aria-hidden="true" />
      </span>
      <div className="min-w-0 text-[length:var(--font-size-body-md)] leading-[var(--line-height-body-md)]">
        <span className="sr-only">{etiqueta}: </span>
        {contenido}
      </div>
    </li>
  );
}
