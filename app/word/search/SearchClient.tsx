"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Play, ArrowRight } from "lucide-react";
import { Sermon } from "@/lib/types/sermon";

// AI Keyword Mapping (Simulating Contextual Understanding)
const KEYWORD_MAPPING: Record<string, string[]> = {
    "불안": ["평안", "기도", "마음", "두려움"],
    "걱정": ["평안", "기도", "염려"],
    "위로": ["소망", "눈물", "회복", "사랑"],
    "시작": ["비전", "태초", "계획", "부르심"],
    "관계": ["이웃", "사랑", "용서", "공동체"],
    "재정": ["채우심", "감사", "복"],
    "지침": ["안식", "쉼", "회복"],
    "우울": ["빛", "소망", "기쁨"],
    "화": ["온유", "용서", "마음"],
};

interface SearchClientProps {
    initialSermons: Sermon[];
}

export default function SearchClient({ initialSermons }: SearchClientProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Sermon[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    // Simulated "AI" Search Logic
    const handleSearch = (searchQuery: string) => {
        if (!searchQuery.trim()) return;

        setIsSearching(true);
        setHasSearched(true);
        setQuery(searchQuery);

        // Simulate network delay for "AI Processing" feel
        setTimeout(() => {
            let searchTerms = [searchQuery];

            // 1. Expand query using AI Keyword Mapping
            Object.keys(KEYWORD_MAPPING).forEach(key => {
                if (searchQuery.includes(key)) {
                    searchTerms = [...searchTerms, ...KEYWORD_MAPPING[key]];
                }
            });

            // 2. Filter Sermons
            const filtered = initialSermons.filter(sermon => {
                const searchText = `${sermon.title} ${sermon.description} ${sermon.tags?.join(" ")}`.toLowerCase();
                return searchTerms.some(term => searchText.includes(term.toLowerCase()));
            });

            setResults(filtered);
            setIsSearching(false);
        }, 800);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch(query);
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-black px-6 pb-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <header>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">AI 설교 검색</h1>
                    <p className="text-gray-500 text-lg">
                        "오늘 어떤 마음이신가요?"<br className="md:hidden" /> 상황에 맞는 하나님의 말씀을 찾아드립니다.
                    </p>
                </header>

                <div className="relative max-w-xl mx-auto mt-8">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="예: 마음이 너무 불안해요, 새로운 시작이 두려워요"
                        className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all pl-12 text-lg"
                    />
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[var(--accent)] transition-colors"
                        size={24}
                        onClick={() => handleSearch(query)}
                    />
                </div>

                {!hasSearched && (
                    <div className="pt-12 grid gap-4 text-left animation-fade-in">
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">추천 검색어</p>
                        <div className="flex flex-wrap gap-2">
                            {["불안할 때 듣는 말씀", "새로운 시작", "관계의 어려움", "재정적 축복", "진로에 대한 고민"].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleSearch(tag)}
                                    className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm hover:bg-[var(--accent)] hover:text-white transition-colors"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Search Results */}
                {hasSearched && (
                    <div className="pt-12 text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">
                                {isSearching ? "AI가 말씀을 찾고 있습니다..." : `"${query}"에 대한 추천 설교`}
                            </h2>
                            {!isSearching && (
                                <span className="text-sm text-gray-400">{results.length}개의 말씀을 찾았습니다.</span>
                            )}
                        </div>

                        {isSearching ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 pointer-events-none">
                                {[1, 2].map((i) => (
                                    <div key={i} className="aspect-video bg-gray-200 dark:bg-zinc-800 rounded-2xl animate-pulse" />
                                ))}
                            </div>
                        ) : results.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {results.map((sermon) => (
                                    <Link href={`/word/${sermon.id}`} key={sermon.id} className="group block bg-gray-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                                        <div className="relative aspect-video bg-gray-200 overflow-hidden">
                                            <img
                                                src={sermon.thumbnail}
                                                alt={sermon.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="bg-white/90 p-3 rounded-full">
                                                    <Play size={20} className="text-black ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                                                <span>{sermon.date}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                                <span>{sermon.preacher}</span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                                                {sermon.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {sermon.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-gray-50 dark:bg-zinc-900 rounded-2xl">
                                <p className="text-gray-500">
                                    해당하는 설교를 찾지 못했습니다.<br />
                                    다른 키워드로 검색해보시겠어요?
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
