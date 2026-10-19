/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOP_NAME?: string;
  readonly VITE_SHOP_PHONE?: string;
  readonly VITE_SHOP_EMAIL?: string;
  readonly VITE_SHOP_ADDRESS?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
