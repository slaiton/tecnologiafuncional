/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base del backend de correo. Vacío = mismo dominio (/api). */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
