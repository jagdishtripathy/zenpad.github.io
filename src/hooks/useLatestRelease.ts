import { useState, useEffect } from "react";

interface ReleaseData {
    version: string;
    downloadUrl: string;
    publishedAt: string;
}

export function useLatestRelease() {
    const [release, setRelease] = useState<ReleaseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRelease = async () => {
            try {
                const response = await fetch("https://api.github.com/repos/jagdishtripathy/zenpad/releases/latest");
                if (!response.ok) {
                    throw new Error("Failed to fetch latest release");
                }
                const data = await response.json();

                // Find the .deb asset
                const debAsset = data.assets.find((asset: any) => asset.name.endsWith(".deb"));

                if (debAsset) {
                    setRelease({
                        version: data.tag_name,
                        downloadUrl: debAsset.browser_download_url,
                        publishedAt: data.published_at
                    });
                } else {
                    // Fallback if no .deb found, point to releases page
                    setRelease({
                        version: data.tag_name,
                        downloadUrl: data.html_url,
                        publishedAt: data.published_at
                    });
                }
            } catch (err) {
                console.error("Error fetching release:", err);
                setError("Failed to load release info");
            } finally {
                setLoading(false);
            }
        };

        fetchRelease();
    }, []);

    return { release, loading, error };
}
