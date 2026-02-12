import { Sermon } from '@/lib/types/sermon';

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export interface Playlist {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
}

export async function fetchPlaylists(): Promise<Playlist[]> {
    if (!API_KEY || !CHANNEL_ID) return [];

    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&maxResults=10`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) return [];

        const data = await res.json();
        return (data.items || []).map((item: any) => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails?.medium?.url || '',
            description: item.snippet.description,
        }));
    } catch (error) {
        console.error("Error fetching playlists:", error);
        return [];
    }
}

export interface PaginatedSermons {
    items: Sermon[];
    nextPageToken?: string;
}

export async function fetchVideos(playlistId?: string, pageToken?: string): Promise<PaginatedSermons> {
    if (!API_KEY || !CHANNEL_ID) return { items: [] };

    // Use specific playlist OR default to Channel's "Uploads" playlist (replace UC with UU)
    const targetPlaylistId = playlistId || CHANNEL_ID.replace(/^UC/, 'UU');

    try {
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${targetPlaylistId}&part=snippet&maxResults=9`;

        if (pageToken) {
            url += `&pageToken=${pageToken}`;
        }

        const res = await fetch(url, { next: { revalidate: 3600 } });

        if (!res.ok) {
            console.error(`YouTube API Error: ${res.status} ${res.statusText}`);
            return { items: [] };
        }

        const data = await res.json();
        const items = data.items || [];

        const mappedItems = items.map((item: any) => {
            const snippet = item.snippet;
            const videoId = snippet.resourceId.videoId;

            return {
                id: videoId || '',
                title: snippet.title || 'No Title',
                series: playlistId ? "Series" : "Latest",
                preacher: "House Of Worship",
                date: snippet.publishedAt ? snippet.publishedAt.split('T')[0].replace(/-/g, '.') : '',
                scripture: "",
                videoUrl: videoId || '',
                thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || '',
                description: snippet.description || '',
                tags: ["YouTube"],
            };
        });

        return {
            items: mappedItems,
            nextPageToken: data.nextPageToken
        };

    } catch (error) {
        console.error("Error fetching videos:", error);
        return { items: [] };
    }
}

export async function fetchVideoById(videoId: string): Promise<Sermon | undefined> {
    if (!API_KEY) return undefined;

    try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) return undefined;

        const data = await res.json();
        const item = data.items?.[0];

        if (!item) return undefined;

        const snippet = item.snippet;
        return {
            id: item.id,
            title: snippet.title,
            series: "Sermon",
            preacher: "House Of Worship",
            date: snippet.publishedAt ? snippet.publishedAt.split('T')[0].replace(/-/g, '.') : '',
            scripture: "",
            videoUrl: item.id,
            thumbnail: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || '',
            description: snippet.description,
            tags: snippet.tags || ["YouTube"],
        };
    } catch (error) {
        console.error("Error fetching video by id:", error);
        return undefined;
    }
}

export async function getLiveStream(): Promise<string | undefined> {
    if (!API_KEY || !CHANNEL_ID) return undefined;

    try {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=id&eventType=live&type=video`;
        const res = await fetch(url, { next: { revalidate: 60 } }); // check every minute

        if (!res.ok) return undefined;

        const data = await res.json();
        const items = data.items || [];

        if (items.length > 0) {
            return items[0].id.videoId;
        }
        return undefined;
    } catch (error) {
        console.error("Error fetching live stream:", error);
        return undefined;
    }
}
