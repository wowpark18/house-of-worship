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
    const [sermonsData, playlists] = await Promise.all([
        getSermons(series),
        getPlaylists()
    ]);

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black px-6 pb-20">
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
                <SermonList
                    key={series || 'all'}
                    initialSermons={sermonsData.items}
                    initialNextPageToken={sermonsData.nextPageToken}
                    series={series}
                />
            </div>
        </div>
    );
}
