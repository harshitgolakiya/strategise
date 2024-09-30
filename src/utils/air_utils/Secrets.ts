export function getAirTableSecrets() {
    const apiurl = import.meta.env.VITE_API_URL;
    const baseId = import.meta.env.VITE_BASE_ID;
    const pat = import.meta.env.VITE_PAT;
    const authTableId = import.meta.env.VITE_AUTH_TABLE_ID;
    return { apiurl, baseId, pat, authTableId };
}