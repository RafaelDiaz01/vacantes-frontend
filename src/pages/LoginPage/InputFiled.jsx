import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import WorkIcon from "@mui/icons-material/Work";

// Reusable Brand Logo component with custom sizes
export function LogoBrand(props) {
  const iconSize = props.iconSize || 18;
  const containerSize = props.containerSize || "size-8";

  return (
    <div className="flex items-center gap-2">
      {/* Icon container box */}
      <div
        className={`flex ${containerSize} items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-primary)] text-white`}
      >
        <WorkIcon sx={{ fontSize: iconSize }} />
      </div>
      {/* App brand title text */}
      <span className="text-[length:var(--font-size-headline-sm)] font-[number:var(--font-weight-bold)] text-[color:var(--color-text-primary)]">
        Vacantes<span className="text-[color:var(--color-primary)]">App</span>
      </span>
    </div>
  );
}

// Reusable Input Field component with icon support and password toggle functionality
export default function InputField(props) {
  // State to manage password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = props.type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : props.type || "text";
  const IconComponent = props.icon;

  return (
    <div>
      {/* Label section with required star indicator */}
      <label
        htmlFor={props.id}
        className="block mb-1.5 text-[length:var(--font-size-label-md)] font-[number:var(--font-weight-semibold)] text-[color:var(--color-text-secondary)]"
      >
        {props.label}{" "}
        {props.required && (
          <span className="text-[color:var(--color-error)]">*</span>
        )}
      </label>

      {/* Input container with dynamic icons */}
      <div className="relative flex items-center">
        {IconComponent && (
          <span className="absolute left-3 text-[color:var(--color-text-placeholder)] flex items-center pointer-events-none">
            <IconComponent sx={{ fontSize: 18 }} />
          </span>
        )}

        <input
          id={props.id}
          type={inputType}
          required={props.required}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="h-[var(--input-height)] w-full rounded-[var(--input-radius)] bg-[var(--color-primary-light)] pl-10 pr-10 text-[length:var(--input-font-size)] text-[color:var(--input-text)] placeholder-[color:var(--input-placeholder)] border border-transparent transition-colors duration-150 focus:border-[color:var(--input-border-focus)] focus:bg-[var(--color-surface)] focus:outline-none focus:shadow-[var(--input-focus-shadow)]"
        />

        {/* Action button to show or hide password characters */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 flex items-center text-[color:var(--color-text-placeholder)] hover:text-[color:var(--color-text-secondary)] focus:outline-none"
          >
            {showPassword ? (
              <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
              <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
