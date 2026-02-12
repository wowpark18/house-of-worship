import { getDevotionalById } from "@/lib/data/mock-devotionals";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ShareButton from "./ShareButton";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const devotional = await getDevotionalById(id);
    if (!devotional) return {};

    return {
        title: `${devotional.scripture} - Daily Devotionals`,
        description: devotional.content.substring(0, 100) + "...",
    };
}

export default async function DevotionalDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const devotional = await getDevotionalById(id);

    if (!devotional) {
        return (
            <div className="pt-24 min-h-screen text-center flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold">Devotional not found</h1>
                <Link href="/word/devotionals" className="text-[var(--accent)] hover:underline">
                    Back to list
                </Link>
            </div>
        );
    }

    const shareText = `[House Of Worship 매일묵상]\n${devotional.date}\n"${devotional.verse}"\n(${devotional.scripture})\n\n${devotional.content}`;
    const shareUrl = `/word/devotionals/${devotional.id}`;

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black px-6 pb-20">
            <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 shadow-sm rounded-3xl p-8 md:p-12 lg:p-16">
                <div className="mb-8">
                    <Link href="/word/devotionals" className="inline-flex items-center text-gray-500 hover:text-black dark:hover:text-white transition-colors text-sm font-medium group">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        목록으로 돌아가기
                    </Link>
                </div>

                <div className="space-y-8 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold tracking-wider uppercase">
                        {devotional.date}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                        "{devotional.verse}"
                    </h1>

                    <div className="text-xl font-medium text-[var(--accent)] tracking-wide uppercase">
                        {devotional.scripture}
                    </div>

                    <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 mt-8">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                            {devotional.content}
                        </p>
                    </div>

                    {/* Share Button */}
                    <div className="pt-8 flex justify-center md:justify-start">
                        <ShareButton
                            title="House Of Worship 매일묵상"
                            text={shareText}
                            url={shareUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
