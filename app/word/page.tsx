export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getSermons, getPlaylists } from "@/lib/data/mock-sermons";
import { cn } from "@/lib/utils";
import SermonList from "./SermonList";

// Generate metadata for SEO
export const metadata = {
    title: "Sermons | House Of Worship",
    description: "주일 설교 및 시리즈 말씀 아카이브",
};

export default async function WordPage({ searchParams }: { searchParams: Promise<{ series?: string }> }) {
    const { series } = await searchParams;
    let sermonsData = { items: [], nextPageToken: undefined };
    let playlists = [];

    try {
        const [fetchedSermons, fetchedPlaylists] = await Promise.all([
            getSermons(series),
            getPlaylists()
        ]);
        sermonsData = fetchedSermons;
        playlists = fetchedPlaylists;
    } catch (error) {
        console.error("Failed to load Word page data:", error);
    }

    const hasSermons = sermonsData.items && sermonsData.items.length > 0;

    return (
        <div className="pt-32 min-h-screen bg-gray-50 dark:bg-black px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">The Word</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        하나님의 말씀은 살아 있고 활력이 있어 (히 4:12)
                    </p>
                </header>

                {/* Series Submenu (Playlists) */}
                <div className="flex justify-center mb-12 overflow-x-auto pb-4 sticky top-20 z-10 bg-gray-50/80 dark:bg-black/80 backdrop-blur-md py-4">
                    <div className="flex gap-4 px-4">
                        <Link
                            href="/word"
                            className={cn(
                                "px-5 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap",
                                !series
                                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                    : "border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-900"
                            )}
                        >
                            Every Sermons
                        </Link>

                        {playlists.map((playlist) => (
                            <Link
                                key={playlist.id}
                                href={`/word?series=${playlist.id}`}
                                className={cn(
                                    "px-5 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap",
                                    series === playlist.id
                                        ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                                        : "border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-900"
                                )}
                            >
                                {playlist.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Client Component for Sermon List & Load More */}
                {hasSermons ? (
                    <SermonList
                        key={series || 'all'}
                        initialSermons={sermonsData.items}
                        initialNextPageToken={sermonsData.nextPageToken}
                        series={series}
                    />
                ) : (
                    <div className="text-center py-40 space-y-4">
                        <div className="text-gray-400 dark:text-gray-600">
                            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 italic">No sermons found.</h3>
                        <p className="text-gray-500 max-w-sm mx-auto italic">
                            영상을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
