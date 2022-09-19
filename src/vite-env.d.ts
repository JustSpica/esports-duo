/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_DISCORD: string;
  readonly VITE_API_ESPORTS: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}