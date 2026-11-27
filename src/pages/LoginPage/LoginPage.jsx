import { useState } from "react";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import components located in the same LoginPage folder
import InputField, { LogoBrand } from "./InputFiled.jsx";

// Main Login Page View Component
export default function LoginPage() {
  // Local state for user email, password, and remember option
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Form submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[var(--color-background)] font-[family-name:var(--font-family-base)]">
      {/* Main Form Content Area */}
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[480px] rounded-[var(--radius-modal)] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-hover)] sm:p-10">
          {/* Card Header with Brand and Badge */}
          <div className="flex items-center justify-between mb-6">
            <LogoBrand iconSize={20} containerSize="size-9" />
          </div>

          {/* Section Titles */}
          <div className="mb-10">
            <h1 className="text-[length:var(--font-size-headline-md)] font-[number:var(--font-weight-bold)] leading-[var(--line-height-headline-md)] text-[color:var(--color-text-primary)]">
              Inicia sesión en tu cuenta
            </h1>
            <p className="mt-2 text-[length:var(--font-size-body-md)] leading-[var(--line-height-body-md)] text-[color:var(--color-text-tertiary)]">
              Accede a tus postulaciones, vacantes guardadas y procesos de
              selección activos.
            </p>
          </div>

          {/* Login Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              id="email"
              type="email"
              label="Correo electrónico"
              required
              placeholder="ejemplo@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={MailOutlinedIcon}
            />

            <InputField
              id="password"
              type="password"
              label="Contraseña"
              required
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={LockOutlinedIcon}
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="size-4 rounded border-[color:var(--color-border-strong)] text-[color:var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              <label
                htmlFor="rememberMe"
                className="cursor-pointer text-[length:var(--font-size-body-sm)] text-[color:var(--color-text-tertiary)]"
              >
                Recordar mi sesión en este dispositivo
              </label>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              className="flex h-[var(--button-height-default)] w-full cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-button)] bg-[var(--button-primary-bg)] px-[var(--button-padding-x)] text-[length:var(--button-font-size)] font-[number:var(--button-font-weight)] text-[color:var(--button-primary-text)] transition-colors duration-150 hover:bg-[var(--button-primary-hover)] active:bg-[var(--button-primary-active)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)]"
            >
              Iniciar sesión
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
