import { Sermon } from '@/lib/types/sermon';
import { fetchVideos, fetchPlaylists, fetchVideoById, Playlist } from '@/lib/youtube';

// Mock Data simulating a CMS response
export const sermons: Sermon[] = [
    {
        id: "sermon-2026-02-09",
        title: "본질로의 회귀: 태초에",
        series: "Return to Basic",
        preacher: "김본질 목사",
        date: "2026.02.09",
        scripture: "요한복음 1:1-5",
        videoUrl: "mC-zw0zCCtg", // Jireh
        thumbnail: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&q=80&w=1080",
        description: "우리가 잃어버린 가장 중요한 것, 바로 '말씀'으로 돌아가는 것입니다. 2026년 첫 번째 시리즈 설교.",
        tags: ["본질", "말씀", "시작"],
    },
    {
        id: "sermon-2026-02-02",
        title: "침묵 속의 외침",
        series: "Return to Basic",
        preacher: "김본질 목사",
        date: "2026.02.02",
        scripture: "시편 62:1-5",
        videoUrl: "n0FBb6hnw68", // Goodness of God
        thumbnail: "https://images.unsplash.com/photo-1507692049790-de58293a469d?auto=format&fit=crop&q=80&w=1080",
        description: "세상의 소음 속에서 잠잠히 하나님만 바라는 영성. 미니멀리즘 신앙의 핵심입니다.",
        tags: ["침묵", "기도", "안식"],
    },
    {
        id: "sermon-2026-01-26",
        title: "연결: 고립에서 공동체로",
        series: "Connectivity",
        preacher: "이연결 목사",
        date: "2026.01.26",
        scripture: "히브리서 10:24-25",
        videoUrl: "L5b9l_cZMlE", // What A Beautiful Name
        thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1080",
        description: "함께 모이기를 폐하지 마십시오. 디지털 시대에 진정한 연결을 회복합니다.",
        tags: ["공동체", "만남", "사랑"],
    },
    {
        id: "sermon-2026-01-19",
        title: "단순함의 능력",
        series: "Simplicity",
        preacher: "김본질 목사",
        date: "2026.01.19",
        scripture: "누가복음 10:41-42",
        videoUrl: "SE_Item3tCc", // The Blessing
        thumbnail: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1080",
        description: "마르다처럼 분주하지 마십시오. 오직 한 가지, 예수님의 발치에 앉는 것만으로 충분합니다.",
        tags: ["단순함", "우선순위", "예배"],
    },
    {
        id: "sermon-2026-01-12",
        title: "새 포도주와 새 부대",
        series: "New Normal",
        preacher: "김본질 목사",
        date: "2026.01.12",
        scripture: "마가복음 2:22",
        videoUrl: "f8TkUMJtK5k", // O Praise The Name
        thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1080",
        description: "2026년, 우리는 어떤 부대를 준비해야 할까요? 변화하는 시대 속 변하지 않는 진리.",
        tags: ["비전", "변화", "갱신"],
    }
];

// Custom sort order for playlists
const PLAYLIST_ORDER = ["설교", "설교요약", "찬양 영상", "하우 행사", "선교 영상"];

export const mockPlaylists: Playlist[] = [
    { id: "mock-1", title: "설교", thumbnail: "", description: "주일 설교 말씀" },
    { id: "mock-2", title: "설교요약", thumbnail: "", description: "설교 핵심 요약" },
    { id: "mock-3", title: "찬양 영상", thumbnail: "", description: "예배 찬양 실황" },
    { id: "mock-4", title: "하우 행사", thumbnail: "", description: "교회 주요 행사" },
    { id: "mock-5", title: "선교 영상", thumbnail: "", description: "국내외 선교 현장" },
];

export async function getPlaylists(): Promise<Playlist[]> {
    let playlists = await fetchPlaylists();

    if (playlists.length === 0) {
        playlists = mockPlaylists;
    }

    // Sort playlists based on the defined order
    return playlists.sort((a, b) => {
        const getOrder = (title: string) => {
            // 1. Exact match
            if (PLAYLIST_ORDER.includes(title)) {
                return PLAYLIST_ORDER.indexOf(title);
            }
            // 2. Contains match
            return PLAYLIST_ORDER.findIndex(key => title.includes(key));
        };

        const orderA = getOrder(a.title);
        const orderB = getOrder(b.title);

        if (orderA !== -1 && orderB !== -1) return orderA - orderB;
        if (orderA !== -1) return -1;
        if (orderB !== -1) return 1;

        return 0;
    });
}

// ... (imports)

// ...

export interface PaginatedSermons {
    items: Sermon[];
    nextPageToken?: string;
}

export async function getSermons(playlistId?: string, pageToken?: string): Promise<PaginatedSermons> {
    // Try to fetch from YouTube first
    const youtubeData = await fetchVideos(playlistId, pageToken);

    if (youtubeData.items.length > 0) {
        return youtubeData;
    }

    // Fallback to mock data
    return new Promise((resolve) => setTimeout(() => resolve({ items: sermons }), 500));
}

export async function getSermonById(id: string): Promise<Sermon | undefined> {
    // 1. Try finding in loaded list (cache-like)
    const allSermonsData = await getSermons();
    const found = allSermonsData.items.find(s => s.id === id);
    if (found) return found;

    // 2. Try fetching directly from YouTube
    const youtubeSermon = await fetchVideoById(id);
    if (youtubeSermon) return youtubeSermon;

    // 3. Last resort: check mock data directly
    return sermons.find(s => s.id === id);
}

export async function getRelatedSermons(currentId: string): Promise<Sermon[]> {
    const allSermonsData = await getSermons();
    return allSermonsData.items.filter(s => s.id !== currentId).slice(0, 3);
}
