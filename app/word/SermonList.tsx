"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { Sermon } from "@/lib/types/sermon";
import { loadMoreSermons } from "./actions";

interface SermonListProps {
    initialSermons: Sermon[];
    initialNextPageToken?: string;
    series?: string;
}

export default function SermonList({ initialSermons, initialNextPageToken, series }: SermonListProps) {
    const [sermons, setSermons] = useState<Sermon[]>(initialSermons);
    const [nextPageToken, setNextPageToken] = useState<string | undefined>(initialNextPageToken);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = async () => {
        if (!nextPageToken || loading) return;

        setLoading(true);
        try {
            const result = await loadMoreSermons(series, nextPageToken);
            setSermons((prev) => [...prev, ...result.items]);
            setNextPageToken(result.nextPageToken);
        } catch (error) {
            console.error("Failed to load more sermons:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Sermon Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermons.map((sermon) => (
                    <Link href={`/word/${sermon.id}`} key={sermon.id} className="group block">
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 mb-4 shadow-sm group-hover:shadow-md transition-all">
                            {/* Image */}
                            <img
                                src={sermon.thumbnail}
                                alt={sermon.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay Play Button */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <Play size={20} className="text-black ml-1" />
                                </div>
                            </div>

                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                                {sermon.series}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-2">
                                <span>{sermon.date}</span>
                                <span>•</span>
                                <span>{sermon.preacher}</span>
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                                {sermon.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {sermon.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Load More Button */}
            {nextPageToken && (
                <div className="mt-16 text-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={loading}
                        className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                    >
                        {loading && (
                            <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {loading ? "불러오는 중..." : "Load More Messages"}
                    </button>
                </div>
            )}
        </>
    );
}
