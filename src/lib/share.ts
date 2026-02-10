export async function shareOrCopy(opts: { title: string; text: string; url?: string }): Promise<"shared" | "copied" | "failed"> {
    const url = opts.url ?? window.location.href;

    if (navigator.share) {
        try {
            await navigator.share({ title: opts.title, text: opts.text, url });
            return "shared";
        } catch {
            // user cancelled or failed -> fall through to copy attempt
        }
    }

    try {
        await navigator.clipboard.writeText(url);
        return "copied";
    } catch {
        return "failed";
    }
}
