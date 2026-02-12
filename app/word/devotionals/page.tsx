import Link from "next/link";
import { getDevotionals } from "@/lib/data/mock-devotionals";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Daily Devotionals | House Of Worship",
    description: "매일매일 주시는 생명의 말씀",
};

export default async function DevotionalsPage() {
    const devotionals = await getDevotionals();

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black px-6 pb-20">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 text-center space-y-4">
                    <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-semibold tracking-wider uppercase">
                        Daily Verse
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">매일묵상</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        오늘 하루를 말씀으로 시작하며, 주님의 음성에 귀 기울입니다.
                    </p>
                </header>

                <div className="space-y-8">
                    {devotionals.map((devotional) => (
                        <Link
                            key={devotional.id}
                            href={`/word/devotionals/${devotional.id}`}
                            className="block bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-[var(--accent)]/20"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="md:w-32 shrink-0">
                                    <div className="text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-[var(--accent)] transition-colors">
                                        {devotional.date}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-serif leading-relaxed group-hover:text-[var(--accent)] transition-colors">
                                            "{devotional.verse}"
                                        </h3>
                                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                            {devotional.scripture}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                                        {devotional.content}
                                    </p>
                                    <div className="pt-2 flex items-center text-sm font-medium text-[var(--accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        묵상 더보기 <ArrowRight size={14} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
