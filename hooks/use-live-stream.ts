"use client";

import { useEffect, useState } from "react";

export function UseLiveStream() {
    const [liveVideoId, setLiveVideoId] = useState<string | null>(null);

    useEffect(() => {
        const checkLive = async () => {
            // Fetch from local API endpoint
            try {
                const res = await fetch("/api/live", { next: { revalidate: 60 } });
                if (res.ok) {
                    const data = await res.json();
                    setLiveVideoId(data.videoId || null);
                }
            } catch (e) {
                console.error(e);
            }
        };

        checkLive();
        // Poll every 60 seconds
        const interval = setInterval(checkLive, 60000);
        return () => clearInterval(interval);
    }, []);

    return liveVideoId;
}
