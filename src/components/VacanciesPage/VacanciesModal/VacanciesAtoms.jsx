import Check from "@mui/icons-material/Check";

// Styles exported as simple variables
export const bodyTextStyle =
  "text-[length:var(--font-size-body-md)] leading-[var(--line-height-body-md)] tracking-[var(--letter-spacing-body-md)] text-[color:var(--color-text-tertiary)]";

export function getIconSize(rem) {
  return { fontSize: `${rem}rem` };
}

//Simple Section wrapper
export function Section(props) {
  return (
    <section>
      <h3 className="mb-[var(--spacing-2)] text-[length:var(--font-size-label-sm)] leading-[var(--line-height-label-sm)] font-[number:var(--font-weight-bold)] tracking-[0.06em] text-[color:var(--color-text-primary)] uppercase">
        {props.title}
      </h3>
      {props.children}
    </section>
  );
}

//Key Detail Card (Job Info)
export function KeyDetail(props) {
  const IconComponent = props.icon;
  const valueText = props.value || "No especificado";

  return (
    <div className="flex items-start gap-[var(--spacing-3)] rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[var(--color-background)] p-[var(--spacing-3)]">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-primary-light)] text-[color:var(--color-primary)]">
        <IconComponent sx={getIconSize(1.125)} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-[length:var(--font-size-caption)] leading-[var(--line-height-caption)] font-[number:var(--font-weight-semibold)] tracking-[var(--letter-spacing-caption)] text-[color:var(--color-text-muted)]">
          {props.label}
        </dt>
        <dd
          className={`mt-0.5 text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] font-[number:var(--font-weight-medium)] break-words ${
            props.value
              ? "text-[color:var(--color-text-secondary)]"
              : "text-[color:var(--color-text-placeholder)]"
          }`}
        >
          {valueText}
        </dd>
      </div>
    </div>
  );
}

//Checked List Item
export function CheckItem(props) {
  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-primary-subtle)] text-[color:var(--color-primary)]">
        <Check sx={getIconSize(0.75)} aria-hidden="true" />
      </span>
      <span className={bodyTextStyle}>{props.text}</span>
    </li>
  );
}

//Bullet List Item
export function BulletItem(props) {
  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span
        className="mt-[0.55rem] size-1.5 shrink-0 rounded-[var(--radius-full)] bg-[var(--color-text-placeholder)]"
        aria-hidden="true"
      />
      <span className={bodyTextStyle}>{props.text}</span>
    </li>
  );
}

//Benefit Card Item
export function BenefitItem(props) {
  const IconComponent = props.icon;

  return (
    <li className="flex items-center gap-[var(--spacing-3)] rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[var(--color-background)] p-[var(--spacing-3)]">
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-default)] ${props.bgColor} ${props.textColor}`}
      >
        <IconComponent sx={getIconSize(1.125)} aria-hidden="true" />
      </span>
      <span className="text-[length:var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] font-[number:var(--font-weight-medium)] text-[color:var(--color-text-secondary)]">
        {props.text}
      </span>
    </li>
  );
}

//Contact Row Item
export function ContactRow(props) {
  const IconComponent = props.icon;

  let content = (
    <span className="text-[color:var(--color-text-secondary)]">
      {props.value}
    </span>
  );

  if (props.href) {
    content = (
      <a
        href={props.href}
        target={props.isExternal ? "_blank" : undefined}
        rel={props.isExternal ? "noopener noreferrer" : undefined}
        className="rounded-[var(--radius-sm)] break-all text-[color:var(--color-primary)] transition-colors duration-150 ease-in-out hover:text-[color:var(--color-primary-hover)] hover:underline focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
      >
        {props.value}
      </a>
    );
  }

  return (
    <li className="flex items-start gap-[var(--spacing-3)]">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-[color:var(--color-text-muted)]">
        <IconComponent sx={getIconSize(1.125)} aria-hidden="true" />
      </span>
      <div className="min-w-0 text-[length:var(--font-size-body-md)] leading-[var(--line-height-body-md)]">
        <span className="sr-only">{props.label}: </span>
        {content}
      </div>
    </li>
  );
}
