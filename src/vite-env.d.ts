/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_PAT: string;
    readonly VITE_BASE_ID: string;
    readonly VITE_AUTH_TABLE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}