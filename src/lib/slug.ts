export function slugify(s: string): string {
    return encodeURIComponent(s.toLowerCase().replace(/\s+/g, "-"));
}
export function unslug(s: string): string {
    return decodeURIComponent(s).replace(/-/g, " ");
}
